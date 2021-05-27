import { ITodo } from './../types/todo/index';
import { IState } from './../types/todo';
import { Action } from '../actions/todo';
import { ActionType } from '../action-types/todo';

const initialState: IState = {
    list: []
};

const todoReducer = (state: IState = initialState, action: Action): IState => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return { ...state, list: [...state.list, action.payload || ({} as ITodo)] };
        case ActionType.REMOVE_TODO:
            return { ...state };
        default:
            return state;
    }
};

export default todoReducer;
