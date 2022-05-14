import { useState } from 'react';
import ToGet from '../components/ToGet';
import { useToGets } from '../context/ListProvider';

export default function ShoppingList() {
  const [newToGet, setNewToGet] = useState('');
  const { togets, handleAddToGet, handleUpdateToGet, handleDeleteToGet} = useToGets();

  function handleSubmit(e) {
    e.preventDefault();
    handleAddToGet(newToGet);
    setNewToGet('');
  }

  return (
    <>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <label>Add an item:</label>
        <input placeholder='New Item' type='text' name='newToGet' value={newToGet} onChange={(e) => setNewToGet(e.target.value)}></input>
        <button aria-label='add item'>Add Item</button>
      </form>
      <ul>
        {togets.map((toget) => (
          <li key={toget.id} role='list-item'>
            <ToGet toget={toget} onUpdate={handleUpdateToGet} onDelete={handleDeleteToGet} />
          </li>
        ))}
      </ul>
    </>
  )
}
