import React from "react";

import Toolbar from "components/Toolbar";
import Window from "components/Window";

import { StoreProvider } from "context/store.context";

export default function App() {
    return (
        <div className="h-full w-full">
            <div className="h-full w-full flex flex-col md:pr-[16px] md:pl-[16px] md:pb-[16px] min-w-[620px] max-w-[1920px]">
                <StoreProvider>
                    <Toolbar />
                    <Window />
                </StoreProvider>
            </div>
        </div>
    );
};
