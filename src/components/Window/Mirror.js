import React from "react";

import Node from "./Node";

import { renderArray, calculateMarginalGap } from "utils/array";
import { useStore } from "context/store.context";

export default function Mirror() {
    const { currentArray, currentView } = useStore();

    return (
        <div className="h-full w-full flex items-center">
            {renderArray(currentArray, (node, index) => {
                return (
                    <Node key={index} node={node} currentView={currentView} />
                );
            })}
        </div>
    );
}
