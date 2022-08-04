import React, { useRef, useCallback } from "react";

import Button from "./Button";
import Slider from "./Slider";
import Dropdown from "./Dropdown";
import Timer from "./Timer";

import { useStore } from "context/store.context";
import {
    ViewModes,
    AnimationSpeeds,
    Algorithms,
    TimerFrameRate
} from "utils/constants";
import { getAlgorithm, getAnimationSpeed, swap, sleep } from "utils/algorithm";
import { generateArray, createRandomIntensity } from "utils/array";

export default function Toolbar() {
    const {
        currentView,
        animationSpeed,
        currentArray,
        arraySize,
        activeAlgorithm,
        isSorting,
        windowRef,
        dispatch
    } = useStore();

    const timeout = useRef(null);

    const onSlider = (value) => {
        dispatch({ type: "arraySize", value: value });

        if (timeout.current) {
            clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
            dispatch({ type: "GENERATE" });
        }, 50);
    };

    const onGenerate = () => {
        if (!isSorting) {
            dispatch({ type: "GENERATE" });
        }
    };

    const onViewMode = (view) => {
        if (view !== currentView) {
            dispatch({ type: "currentView", value: view });
        }
    };

    const onAnimationSpeed = (speed) => {
        if (speed !== animationSpeed) {
            dispatch({ type: "animationSpeed", value: speed });
        }
    };

    const onAlgorithm = (algorithm) => {
        if (algorithm !== activeAlgorithm) {
            dispatch({ type: "activeAlgorithm", value: algorithm });
        }
    };

    const onPause = () => {};

    const onStart = async (callback) => {
        if (isSorting) {
            return;
        }

        dispatch({ type: "isSorting", value: true });

        const ref = windowRef.current; // only use this if we want to do animations

        const speed = getAnimationSpeed(animationSpeed);
        const algorithm = getAlgorithm(activeAlgorithm);
        const iterations = algorithm(
            currentArray.slice(),
            async (nodeIndex, array) => {
                await sleep(nodeIndex * speed);

                dispatch({
                    type: "currentArray",
                    value: array
                });
            }
        );

        await sleep(iterations * speed);

        callback();
        dispatch({ type: "isSorting", value: false });
    };

    return (
        <div className="py-[16px] px-[8px] md:px-0">
            <div className="flex flex-row justify-center items-center h-[40px]">
                <div className="flex-1">
                    <div className="inline-block pr-[16px]">
                        <Slider
                            value={arraySize}
                            onChange={onSlider}
                            disabled={isSorting}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <Button onClick={onGenerate} disabled={isSorting}>
                        Generate Array
                    </Button>
                    <div className="ml-[4px]">
                        <Dropdown
                            value={currentView}
                            options={ViewModes}
                            onChange={onViewMode}
                            disabled={isSorting}
                        />
                    </div>
                    <div className="ml-[4px]">
                        <Dropdown
                            value={animationSpeed}
                            options={AnimationSpeeds}
                            onChange={onAnimationSpeed}
                            disabled={isSorting}
                        />
                    </div>
                    <div className="ml-[4px]">
                        <Dropdown
                            value={activeAlgorithm}
                            options={Algorithms}
                            onChange={onAlgorithm}
                            disabled={isSorting}
                            extendedView
                        />
                    </div>
                </div>
                <div className="flex-1 flex justify-end">
                    <div className="inline-block pl-[16px]">
                        <Timer onPause={onPause} onStart={onStart}>
                            {({ onClick }) => (
                                <Button onClick={onClick} disabled={isSorting}>
                                    Sort
                                </Button>
                            )}
                        </Timer>
                    </div>
                </div>
            </div>
        </div>
    );
}
