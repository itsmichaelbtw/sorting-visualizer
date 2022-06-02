import React from "react";

export default function Button({ suffix, prefix, children, ...props }) {
    return (
        <div 
            {...props} 
            className="bg-blue-500 h-[40px] hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer active:border-none active:mt-1 select-none shadow-md min-w-fit">
            {
                prefix && (
                    <span>
                        {prefix}
                    </span>
                )
            }
            <span className="align-middle inline-block leading-[18px]">{children}</span>
            {
                suffix && (
                    <span className="align-middle inline-block ml-[4px]">
                        {suffix}
                    </span>
                )
            }
        </div>
    );
};
