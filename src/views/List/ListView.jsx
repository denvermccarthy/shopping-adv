import React, { useReducer, useState } from 'react';
import Item from '../../components/List/Item';

const initialList = [{ id: Date.now(), done: false, name: 'banana' }];
function reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case 'ADD_ITEM':
      return [payload.item, ...state];
    default:
      throw new Error(`${type} is not a valid type.`);
  }
}

export default function ListView() {
  const [items, dispatch] = useReducer(reducer, initialList);
  const [text, setText] = useState('');
  return (
    <div>
      ListView
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: 'ADD_ITEM',
            payload: { item: { id: Date.now(), done: false, name: text } },
          });
          setText('');
        }}
      >
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
          <Item key={item.id} {...item} />
        ))}
      </ul>
    </div>
  );
}
