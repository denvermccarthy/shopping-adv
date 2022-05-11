import { useState } from 'react';

export default function Item({ item, updateHandler, deleteHandler }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(item.name);
  return isEditing ? (
    <div>
      <input
        type="checkbox"
        onClick={(e) => updateHandler({ ...item, done: e.target.checked })}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => deleteHandler(item)}>Delete</button>
      <button
        onClick={() => {
          updateHandler({ ...item, name });
          setIsEditing(false);
        }}
      >
        Save
      </button>
    </div>
  ) : (
    <div>
      <input
        type="checkbox"
        onClick={() => updateHandler({ ...item, done: e.target.checked })}
      />
      {item.name}
      <button onClick={() => deleteHandler(item)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}
