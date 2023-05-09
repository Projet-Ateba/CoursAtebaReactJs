import React, { useState } from 'react';

function TodoList() {
const [todos, setTodos] = useState([]);
const [newTodo, setNewTodo] = useState('');
const handleAddTodo = () => {
setTodos([...todos, newTodo]);
setNewTodo('');
};
const handleRemoveTodo = (index) => {
const newTodos = [...todos];
newTodos.splice(index, 1);
setTodos(newTodos);
};
return (
<div>
<input type="text" placeholder="Nouvelle tâche" value={newTodo}
onChange={(e) => setNewTodo(e.target.value)} />
<button onClick={handleAddTodo}>Ajouter</button>
<ul>
{todos.map((todo, index) => (
<li key={index}>
{todo}
<button onClick={() =>
handleRemoveTodo(index)}>Supprimer</button>
</li>
))}
</ul>
</div>
);
}
export default TodoList;