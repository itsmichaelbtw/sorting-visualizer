import { MinNodeHeight, MaxNodeHeight, InitialArraySize } from "./constants";

const Node = {
    height: null,
    value: null,
    label: null,
    origIndex: null,
    index: null,
    margin: null
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
        return "8px"
    };

    if (arraySize < 100) {
        return "6px"
    };

    if (arraySize < 200) {
        return "4px"
    };

    if (arraySize < 300) {
        return "2px"
    };

    if (arraySize < 400) {
        return "1px"
    };

    return "0px";
};

export const generateArray = (arraySize = InitialArraySize) => {
    const array = [];
    const marginalGap = calculateMarginalGap(arraySize);

    for (let i = 0; i < arraySize; i++) {
        const node = Object.create(Node);
        const intensity = createRandomIntensity();

        node.height = `${intensity}%`;
        node.value = intensity;
        node.label = `Node ${i}`;
        node.origIndex = i;
        node.index = i;
        node.margin = marginalGap;
        
        array.push(node);
    };

    return array;
};

export const renderArray = (array, onRender) => {
    return array.map((item, index) => {
        return onRender(item, index);
    });
};
