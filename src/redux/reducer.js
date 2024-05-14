import {
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  UPDATE_TODO_TEXT,
  MARK_COMPLETED,
  MARK_INCOMPLETE,
  FILTER_TODOS,
  MARK_ALL_COMPLETED,
  UPDATE_SEARCH_TERM,
} from './actionTypes';
  
  const initialState = { todos: [], filter: 'ALL', searchTerm: '' };
  
  const todoReducer = (state = initialState, action) => {
    switch (action.type) {

      case ADD_TODO:
        const newTodo = {
          text: action.payload.text,
          completed: false,
          description: action.payload.description 
        };
        return {
          ...state,
          todos: [newTodo, ...state.todos] 
        };
        
      case TOGGLE_TODO:
        const toggledTodo = state.todos[action.payload.id];
        const updatedTodos = state.todos.filter((todo, index) => index !== action.payload.id);
        toggledTodo.completed = !toggledTodo.completed; // Toggle completion status
      return {
            ...state,
            todos: toggledTodo.completed ? [...updatedTodos, toggledTodo] : [toggledTodo, ...updatedTodos],
          };
        
  
      case REMOVE_TODO:
        return {
          todos: state.todos.filter((todo, index) => index !== action.payload.id),
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
        
      case 'UPDATE_TODO_TEXT':
        return {
          ...state,
          todos: state.todos.map((todo, i) =>
            i === action.payload.index ? { ...todo, text: action.payload.newText } : todo
        ),
      };

  
      case MARK_COMPLETED:
        return {
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: true } : todo
          ),
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
  
      case MARK_INCOMPLETE:
        return {
          todos: state.todos.map((todo, index) =>
            index === action.payload.id ? { ...todo, completed: false } : todo
          ),
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
  
      case FILTER_TODOS:
        return {
          todos: state.todos,
          filter: action.payload.filter,
          searchTerm: state.searchTerm,
        };
  
      case UPDATE_SEARCH_TERM:
        return {
          todos: state.todos,
          filter: state.filter,
          searchTerm: action.payload.searchTerm,
        };
  
      case MARK_ALL_COMPLETED:
        return {
          todos: state.todos.map((todo) => ({ ...todo, completed: true })),
          filter: state.filter,
          searchTerm: state.searchTerm,
        };
  
      default:
        return state;
    }
  };
  
  export default todoReducer;