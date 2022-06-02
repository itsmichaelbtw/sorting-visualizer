import React from "react";

export default function Timer({ prefix = null, suffix = null }) {
    return (
        <div className="w-full h-[40px] flex flex-row rounded bg-slate-700 shadow-md select-none">
            {prefix}
            <div className="py-2 px-4 w-full flex items-center">
                <span className="font-bold text-white text-lg">00:00</span>
            </div>
            {suffix}
        </div>
    );
};
