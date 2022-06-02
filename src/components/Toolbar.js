import React, { useRef } from "react";

import Button from "./Button";
import Slider from "./Slider";
import Dropdown from "./Dropdown";
import Timer from "./Timer";

import { useStore } from "context/store.context";
import { ViewModes, AnimationSpeeds, Algorithms } from "utils/constants";

export default function Toolbar() {
    const { currentView, animationSpeed, arraySize, activeAlgorithm, dispatch } = useStore();

    const timeout = useRef(null);

    const onSlider = (value) => {
        dispatch({
            type: "arraySize",
            value: value
        });

        // added a timeout to prevent the animation from being triggered when the user is dragging the slider viciously

        if (timeout.current) {
            clearTimeout(timeout.current);
        };
        
        timeout.current = setTimeout(() => {
            dispatch({
                type: "GENERATE"
            });
        }, 75);
    };

    const onGenerate = () => {
        dispatch({ type: "GENERATE" });
    };

    const onViewMode = (view) => {
        if (view !== currentView) {
            dispatch({
                type: "currentView",
                value: view
            });
        };
    };

    const onAnimationSpeed = (speed) => {
        if (speed !== animationSpeed) {
            dispatch({
                type: "animationSpeed",
                value: speed
            });
        };
    };

    const onAlgorithm = (algorithm) => {
        if (algorithm !== activeAlgorithm) {
            dispatch({
                type: "activeAlgorithm",
                value: algorithm
            });
        };
    };

    return (
        <div className="py-[16px] px-[8px] md:px-0">
            <div className="flex flex-row justify-center items-center h-[40px]">
                <div className="flex-1">
                    <div className="inline-block pr-[16px]">
                        <Slider value={arraySize} onChange={onSlider}/>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center">
                    <Button onClick={onGenerate}>
                        Generate Array
                    </Button>
                    <div className="ml-[4px]">
                        <Dropdown value={currentView} options={ViewModes} onChange={onViewMode} />
                    </div>
                    <div className="ml-[4px]">
                        <Dropdown value={animationSpeed} options={AnimationSpeeds} onChange={onAnimationSpeed} />
                    </div>
                    <div className="ml-[4px]">
                        <Dropdown value={activeAlgorithm} options={Algorithms} onChange={onAlgorithm} extendedView/>
                    </div>
                </div>
                <div className="flex-1 flex justify-end">
                    <div className="inline-block pl-[16px]">
                        <Timer prefix={<Button>Sort</Button>}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
