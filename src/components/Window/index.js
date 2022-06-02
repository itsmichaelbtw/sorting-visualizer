import React from "react";

import BarChart from "./Views/BarChart";
import Mirror from "./Views/Mirror";

import { useStore } from "context/store.context";

export default function Window () {
    const { currentArray, currentView, dispatch } = useStore();

    return (
        <div className="h-full w-full flex ml-auto mr-auto">
            <div className="flex-1 bg-[#34495e] shadow-md rounded p-[8px]">
                {
                    currentView === "BarChart" && <BarChart />
                }
                {
                    currentView === "Mirror" && <Mirror />
                }
            </div>
            {/* <div className="flex-1 flex items-center bg-[#34495e] shadow-md rounded p-[16px] min-w-[620px]">
                {
                    currentArray.map((node, index) => (
                        <div key={index} className="w-full bg-green-400" style={{ height: node.height }} />
                    ))
                }
            </div> */}
        </div>
    );
};
