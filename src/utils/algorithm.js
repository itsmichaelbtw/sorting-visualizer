import {
    bubbleSort,
    insertionSort,
    selectionSort,
    mergeSort
} from "algorithms";

export const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const swap = (array, i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
};

export const getAlgorithm = (algorithm) => {
    switch (algorithm) {
        case "BubbleSort":
            return bubbleSort;
        case "InsertionSort":
            return insertionSort;
        case "SelectionSort":
            return selectionSort;
        case "MergeSort":
            return mergeSort;
        default:
            return bubbleSort;
    }
};

export const getAnimationSpeed = (speed) => {
    switch (speed) {
        case "Slow":
            return 25;
        case "Normal":
            return 10;
        case "Fast":
            return 1;
    }
};
