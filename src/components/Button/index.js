import React from "react";

export default function Button({ onClick, children }) {
    return (
        <div className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded cursor-pointer ml-[4px] active:border-none active:mt-1 select-none">
            {children}
        </div>
    );
};
