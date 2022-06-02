import React from "react";

import Toolbar from "components/Toolbar";
import Window from "components/Window";

export default function App() {
    return (
        <div className="h-full w-full">
            <div className="h-full w-full flex flex-col">
                <Toolbar />
                <Window />
            </div>
        </div>
    );
};
