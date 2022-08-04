import React, {
    createContext,
    useEffect,
    useReducer,
    useContext,
    createRef
} from "react";

import {
    DefaultAnimationSpeed,
    DefaultAlgorithm,
    DefaultView,
    InitialArraySize
} from "utils/constants";
import { generateArray, shuffleArray } from "utils/array";

const StoreState = {
    animationSpeed: DefaultAnimationSpeed,
    arraySize: InitialArraySize,
    currentArray: [],
    currentView: DefaultView,
    activeAlgorithm: DefaultAlgorithm,
    isSorting: false,
    windowRef: null,
    dispatch: () => {}
};

const Reducer = (state, action) => {
    if (action.type === "reset") {
        return StoreState;
    }

    switch (action.type) {
        case "GENERATE": {
            return {
                ...state,
                currentArray: generateArray(state.arraySize)
            };
        }

        case "SHUFFLE": {
            return {
                ...state,
                currentArray: shuffleArray(state.currentArray)
            };
        }

        case "RESIZE_ARRAY": {
            return {
                ...state,
                arraySize: action.value,
                currentArray: generateArray(action.value)
            };
        }
    }

    const result = { ...state };
    result[action.type] = action.value;
    return result;
};

const StoreContext = createContext(StoreState);

export const StoreProvider = (props) => {
    const [state, dispatch] = useReducer(Reducer, StoreState);

    useEffect(() => {
        dispatch({ type: "GENERATE" });

        return () => {
            dispatch({ type: "reset" });
        };
    }, []);

    state.windowRef = createRef();
    state.dispatch = dispatch;

    return (
        <StoreContext.Provider value={state}>
            {props.children}
        </StoreContext.Provider>
    );
};

export const useStore = () => useContext(StoreContext);
