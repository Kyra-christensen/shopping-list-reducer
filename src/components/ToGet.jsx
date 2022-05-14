import { useState } from 'react'

export default function ToGet({ toget, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let content;

  if (isEditing) {
    content = (
      <form onSubmit={(event) => { event.preventDefault(); setIsEditing(false); }}>
        <input aria-label='edit input' value={toget.text} onChange={(e) => onUpdate({ ...toget, text: e.target.value })}></input>
        <button aria-label='save edits'>Save</button>
      </form>
    ) 
  } else {
    content = (
      <button aria-label='edit button' type='button' onClick={() => setIsEditing(true)}>Edit</button>
    )
  }

  return (
    <>
      <input type='checkbox' checked={toget.done} onChange={(e) => {
        onUpdate({ ...toget, done: e.target.checked });
      }}/>
      {toget.text}
      {content}
      <button aria-label='delete button' type='button' onClick={() => onDelete(toget.id)}>Delete Item</button>
    </>
  )
}
