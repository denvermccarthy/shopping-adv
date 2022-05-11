import React, { useReducer, useState } from 'react';
import Item from '../../components/List/Item';
import { useList } from '../../context/ListContext';

export default function ListView() {
  const [text, setText] = useState('');
  const { items, deleteHandler, updateHandler, addItem } = useList();
  return (
    <div>
      ListView
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="New Item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />{' '}
        <button>ADD ITEM</button>
      </form>
      <ul>
        {items.map((item) => (
          <Item key={item.id} {...{ deleteHandler, updateHandler, item }} />
        ))}
      </ul>
    </div>
  );
}
