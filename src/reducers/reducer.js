import { ADD_PLAIN, UPDATE_INPUT } from './actions';

export default (state, action) => {
    switch(action.type) {
        case ADD_PLAIN:
            return {
                ...state,
                tempValue: "",
                texts: [...state.texts, state.tempValue],
            };
        case UPDATE_INPUT:
            return {
                ...state,
                tempValue: action.payload,
            }
        default:
            return state;
    }
}