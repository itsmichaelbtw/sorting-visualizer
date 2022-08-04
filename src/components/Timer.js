import React, { useState, useEffect } from "react";

import { TimerFrameRate } from "utils/constants";

export default function Timer({ onPause, onStart, children }) {
    const now = new Date().getTime();

    const [run, setRun] = useState(false);
    const [deltaTime, setDelta] = useState(0);

    useEffect(() => {
        let timer = null;

        if (run) {
            timer = setInterval(() => {
                setDelta(new Date().getTime() - now);
            }, TimerFrameRate);
        }

        return () => {
            clearInterval(timer);
        };
    }, [run]);

    const onClick = () => {
        if (run) {
            onPause();
        } else {
            onStart(() => {
                setRun(false);
            });
        }

        setRun((v) => !v);
    };

    const formatTime = (time) => {
        const ms = time % 1000;
        const s = Math.floor(time / 1000) % 60;
        const m = Math.floor(time / 60000);

        return `${m.toString().padStart(2, "0")}:${s
            .toString()
            .padStart(2, "0")}:${ms.toString().padStart(3, "0")}`;
    };

    return (
        <div className="w-full h-[40px] flex flex-row rounded bg-slate-700 shadow-md select-none">
            {children({ onClick })}
            <div className="py-2 px-4 w-full flex items-center">
                <span className="font-bold text-white text-lg w-[83px]">
                    {formatTime(deltaTime)}
                </span>
            </div>
        </div>
    );
}
