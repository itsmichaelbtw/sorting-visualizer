import { swap } from "utils/algorithm";

export const selectionSort = (array, callback) => {
    let iteration = 0;
    let currArray = [];
    const length = array.length;

    for (let i = 0; i < length; i++) {
        let min = i;

        for (let j = i + 1; j < length; j++) {
            if (array[j].value < array[min].value) {
                min = j;
            };
        };

        if (min !== i) {
            swap(array, i, min);
            currArray = [...array];
            callback(iteration++, currArray);
        };
    };

    return iteration;
};
