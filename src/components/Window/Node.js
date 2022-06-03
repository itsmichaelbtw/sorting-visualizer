import React from "react";

export default function Node({ node, currentView }) {
    const height = node.height;

    if (currentView === "BarChart") {
        return <div className="w-full bg-green-400" style={{ height, backgroundColor: node.backgroundColor }} />
    };

    if (currentView === "Mirror") {
        return <div className="w-full bg-yellow-300 rounded" style={{ height, marginLeft: node.marginLeft }}></div>
    };

    return null;
};
