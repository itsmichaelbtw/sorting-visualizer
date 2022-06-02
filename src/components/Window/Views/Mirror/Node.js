import React from "react";

export default function Node({ height, margin, index }) {
    return (
        <div className="w-full bg-yellow-300 rounded" style={{ height, marginLeft: index !== 0 ? margin : 0 }}></div>
    );
};
