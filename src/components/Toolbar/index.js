import React from "react";

import Button from "components/Button";

// view modes
// - Default
// - Mirror
// - Compare
// - Box
// - Bar chart

export default function Toolbar() {
    return (
        <div className="pr-[5%] pl-[5%] pt-[32px] pb-[32px]">
            <div className="flex flex-row justify-center items-center">
                <Button>
                    Generate Array
                </Button>
            </div>
        </div>
    );
};
