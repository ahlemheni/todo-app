import {
    ADD_TODO,
    TOGGLE_TODO,
    REMOVE_TODO,
    MARK_COMPLETED,
    MARK_INCOMPLETE,
    FILTER_TODOS,
    MARK_ALL_COMPLETED,
    UPDATE_SEARCH_TERM,
    UPDATE_TODO_TEXT,
  } from './actionTypes';
  
  export const addTodo = (text, description) => {
    return {
      type: 'ADD_TODO',
      payload: {
        text,
        description // Ajoutez la description au payload
      }
    };
  };
  
  export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: { id },
  });
  
  export const updateTodoText = (index, newText) => ({
    type: 'UPDATE_TODO_TEXT',
    payload: { index, newText },
  });

  export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload: { id },
  });
  
  export const markCompleted = (id) => ({
    type: MARK_COMPLETED,
    payload: { id },
  });
  
  export const markIncomplete = (id) => ({
    type: MARK_INCOMPLETE,
    payload: { id },
  });
  
  export const filterTodos = (filter) => ({
    type: FILTER_TODOS,
    payload: { filter },
  });
  
  export const markAllCompleted = () => ({
    type: MARK_ALL_COMPLETED,
  });
  
  export const updateSearchTerm = (searchTerm) => ({
    type: UPDATE_SEARCH_TERM,
    payload: { searchTerm },
  });