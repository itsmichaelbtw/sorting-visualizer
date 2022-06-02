import React, { useState, useEffect } from "react";

import { generateArray } from "utils/array";
import { InitialArraySize } from "utils/constants";

export default function Window () {
    const [array, setArray] = useState([]);

    useEffect(() => {
        const array = generateArray(InitialArraySize);
        setArray(array);

        console.log(array)
    }, []);

    return (
        <div className="h-full w-full flex max-w-[1920px] ml-auto mr-auto md:pr-[32px] md:pl-[32px] md:pb-[32px]">
            <div className="flex-1 flex items-center bg-[#34495e] shadow-md rounded p-[16px] min-w-[620px]">
                {
                    array.map((node, index) => (
                        <div key={index} className="w-full bg-green-400 rounded node" style={{ height: node.height }} />
                    ))
                }
            </div>
        </div>
    );
};
