import React from "react";
import { Listbox } from "@headlessui/react";

import Button from "./Button";

export default function Dropdown({ value, options, onChange, disabled, extendedView = false }) {
    return (
        <div className="relative">
            <Listbox value={value} onChange={onChange} disabled={disabled}>
                <Listbox.Button>
                    <Button suffix={
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    } disabled={disabled}>{value}</Button>
                </Listbox.Button>
                <Listbox.Options className={`absolute z-10 mt-1 left-0 max-h-120 py-[4px] max-h-[180px] flex flex-col flex-wrap rounded shadow-md bg-slate-700 ${extendedView ? "w-screen max-w-[280px]" : "w-full"}`}>
                    {options.map(option => (
                        <Listbox.Option key={option} value={option} className={({ selected }) => {
                            return `px-[8px] py-[6px] cursor-pointer font-bold text-md ${selected ? "bg-slate-800" : "hover:bg-slate-600 hover:text-white"}`;
                        }}>
                            {option}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    );
};

