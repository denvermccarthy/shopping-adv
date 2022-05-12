import { useState } from 'react';
import styles from './item.css';

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
        onClick={(e) => updateHandler({ ...item, done: e.target.checked })}
      />
      <p className={item.done ? styles.completed : undefined}>{item.name}</p>
      <button onClick={() => deleteHandler(item)}>Delete</button>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  );
}
