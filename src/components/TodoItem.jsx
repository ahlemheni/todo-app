import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, removeTodo, updateTodoText } from '../redux/actions';
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  useEffect(() => {
    // Mettre à jour le texte édité lorsque le todo change
    setEditedText(todo.text);
  }, [todo.text]);

  const handleToggle = () => {
    dispatch(toggleTodo(index)); 
  };

  const handleEdit = () => {
    setIsEditing(!isEditing); 
  };

  const handleInputChange = (e) => {
    setEditedText(e.target.value); 
  };

  const handleSaveEdit = () => {
    dispatch(updateTodoText(index, editedText)); 
    setIsEditing(false); 
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        {!isEditing && (
          <input
            type="checkbox"
            className="mr-4"
            checked={todo.completed}
            onChange={handleToggle}
          />
        )}
        {!isEditing ? (
          <div>
            <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.text}
            </span>
            {todo.description && (
              <p style={{ fontStyle: 'italic', fontSize: 'smaller' }}>
                {todo.description}
              </p>
            )}
          </div>
        ) : (
          <input
            type="text"
            value={editedText}
            onChange={handleInputChange}
          />
        )}
      </div>
      <div className="space-x-3 ml-8">
        <button
          className="mr-2 text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <FaTrash />
        </button>
        <button
          className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded"
          onClick={isEditing ? handleSaveEdit : handleEdit}
        >
          {isEditing ? <FaSave /> : <FaEdit />}
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
