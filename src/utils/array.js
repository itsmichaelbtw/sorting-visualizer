import { MinNodeHeight, MaxNodeHeight, InitialArraySize } from "./constants";

const Node = {
    height: null,
    value: null,
    label: null,
    index: null,
};

export const createRandomIntensity = () => {
    const min = MinNodeHeight;
    const max = MaxNodeHeight;

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const shuffleArray = (array) => {
    array.sort(() => Math.random() - 0.5);   
};

export const generateArray = (arraySize = InitialArraySize) => {
    const array = [];

    for (let i = 0; i < arraySize; i++) {
        const node = Object.create(Node);
        const intensity = createRandomIntensity();
        node.height = `${intensity}%`;
        node.value = intensity;
        node.label = `Node ${i}`;
        node.index = i;
        array.push(node);
    };

    return array;
};
