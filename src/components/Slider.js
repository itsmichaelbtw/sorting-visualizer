import React from "react";
import ReactSlider from "react-slider";

import { MinArraySize, MaxArraySize, InitialArraySize } from "utils/constants";

export default function Slider({ min = MinArraySize, max = MaxArraySize, value = InitialArraySize, disabled, onChange }) {
    return (
        <div className="w-full h-[40px] flex flex-row rounded bg-slate-700 shadow-md">
            <div className="py-2 px-4 bg-slate-800 rounded min-w-[76px] text-center select-none">
                <span className="font-bold text-white leading-[24px] text-lg">Size</span>
            </div>
            <div className="py-2 px-4 w-full flex items-center min-w-[240px]">
                <ReactSlider
                    className="w-full h-[4px] rounded bg-slate-800"
                    thumbClassName={`h-[18px] w-[18px] bg-blue-400 border-2 border-white hover:bg-blue-500 rounded-full -top-[7px] shadow-sm focus:outline-none ${disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
                    trackClassName="track"
                    defaultValue={value}
                    min={min}
                    max={max}
                    onChange={onChange}
                    disabled={disabled}
                />
            </div>
            <div className="py-2 px-4 bg-slate-800 rounded min-w-[76px] text-center select-none">
                <span className="font-bold text-white leading-[24px] text-lg">{value}</span>
            </div>
        </div>
    );
}
