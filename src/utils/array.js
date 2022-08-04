import { MinNodeHeight, MaxNodeHeight, InitialArraySize } from "./constants";

const Node = {
    height: null,
    value: null,
    marginLeft: null,
    backgroundColor: null
};

export const createRandomIntensity = () => {
    const min = MinNodeHeight;
    const max = MaxNodeHeight;

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
};

export const calculateMarginalGap = (arraySize) => {
    if (arraySize < 50) {
        return "8px";
    }

    if (arraySize < 100) {
        return "6px";
    }

    return "2px";
};

export const generateArray = (arraySize = InitialArraySize) => {
    const array = [];
    const marginalGap = calculateMarginalGap(arraySize);

    for (let i = 0; i < arraySize; i++) {
        const intensity = createRandomIntensity();
        const node = Object.create(Node);

        node.height = `${intensity}%`;
        node.value = intensity;
        node.marginLeft = marginalGap;

        array.push(node);
    }

    return array;
};

export const renderArray = (array, onRender) => {
    return array.map((item, index) => {
        return onRender(item, index);
    });
};
