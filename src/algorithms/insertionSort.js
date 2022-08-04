import { swap } from "utils/algorithm";

export const insertionSort = (array, callback) => {
    let iteration = 0;
    let currArray = [];
    const length = array.length;

    for (let i = 1; i < length; i++) {
        let j = i;

        while (j > 0 && array[j].value < array[j - 1].value) {
            swap(array, j, j - 1);
            currArray = [...array];
            callback(iteration++, currArray);
            j--;
        }
    }

    return iteration;
};
