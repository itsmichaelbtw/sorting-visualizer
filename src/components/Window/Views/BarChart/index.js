import React from "react";

import Node from "./Node";

import { renderArray } from "utils/array";
import { useStore } from "context/store.context";

export default function BarChart() {
    const { currentArray } = useStore();

    return (
        <div className="h-full w-full flex flex-row items-end rounded overflow-hidden">
            {renderArray(currentArray, (item, index) => {
                return <Node key={index} {...item} />;
            })}
        </div>
    );
};
