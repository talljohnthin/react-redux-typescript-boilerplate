import { Action } from '../../actions/todo/index';
import { ITodo } from './../../types/todo';
import { ActionType } from '../../action-types/todo';
import { Dispatch } from 'redux';

const addTodo = (todo: ITodo) => (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.ADD_TODO,
        payload: todo
    });
};

const removeTodo = (id: number) => (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.REMOVE_TODO,
        payload: id
    });
};

export { addTodo, removeTodo };
