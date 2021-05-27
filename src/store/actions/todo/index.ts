import { ActionType } from '../../action-types/todo'
import { ITodo } from "../../types/todo";

export interface IAddTodo {
    type: ActionType.ADD_TODO,
    payload?: ITodo
}

export interface IRemoveTodo {
    type: ActionType.REMOVE_TODO,
    payload: number
}

export type Action = IAddTodo | IRemoveTodo
