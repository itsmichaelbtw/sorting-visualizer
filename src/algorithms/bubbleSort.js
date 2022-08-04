import { swap } from "utils/algorithm";

export const bubbleSort = (array, callback, animate) => {
    let iteration = 0;
    let currArray = [];
    const length = array.length;

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (array[j].value > array[j + 1].value) {
                swap(array, j, j + 1);
                currArray = [...array];
                callback(iteration++, currArray);
            }
        }
    }

    return iteration;
};
