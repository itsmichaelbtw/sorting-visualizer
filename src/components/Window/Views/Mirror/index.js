import React from "react";

import Node from "./Node";

import { renderArray } from "utils/array";
import { useStore } from "context/store.context";

export default function Mirror() {
    const { currentArray } = useStore();

    return (
        <div className="h-full w-full flex items-center">
            {renderArray(currentArray, (item, index) => {
                return <Node key={index} {...item} />;
            })}
        </div>
    );
};
