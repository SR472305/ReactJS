// import { INCREMENET,DECREMNET,RESET } from "./actiontype";

import { DECREMNET, INCREMENET, RESET } from "./actiontype";


const initialstate ={
    count : 0,
 }

const counterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case INCREMENET:
            return { ...state, count: state.count + 1 };
        case DECREMNET:
            return { ...state, count: state.count - 1 };
        case RESET:
            return { ...state, count: state.count = 0 };
        default:
            return state;
    }
};

export default counterReducer