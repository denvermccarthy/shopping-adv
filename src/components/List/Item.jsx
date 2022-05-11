import React from 'react';

export default function Item({ item, updateHandler, deleteHandler }) {
  return (
    <div key={item.id}>
      <input type="checkbox" onClick={() => updateHandler(item)} />
      {item.name}
      <button onClick={() => deleteHandler(item)}>Delete</button>
      <button>Edit</button>
    </div>
  );
}
