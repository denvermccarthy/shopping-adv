import React, { useReducer } from 'react';

const initialList = [{ id: Date.now(), done: false, name: 'banana' }];
function reducer(state, action) {}

export default function ListView() {
  const [items, dispatch] = useReducer(reducer, initialList);
  return (
    <div>
      ListView
      <form>
        <input type="text" placeholder="New Item" /> <button>ADD ITEM</button>
      </form>
      <ul>
        {items.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
