import React, { useReducer, useState } from 'react';
import Item from '../../components/List/Item';

const initialList = [{ id: Date.now(), done: false, name: 'banana' }];
function reducer(state, action) {
  const { payload, type } = action;
  switch (type) {
    case 'ADD_ITEM':
      return [payload.item, ...state];
    case 'DELETE_ITEM':
      return state.filter((item) => item.id !== payload.item.id);
    default:
      throw new Error(`${type} is not a valid type.`);
  }
}

export default function ListView() {
  const [items, dispatch] = useReducer(reducer, initialList);
  const [text, setText] = useState('');

  const deleteHandler = (item) => {
    dispatch({ type: 'DELETE_ITEM', payload: { item } });
  };

  const updateHandler = (done, name) => {
    dispatch({ type: 'DELETE_ITEM', payload: { done, name } });
  };

  const addItem = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_ITEM',
      payload: { item: { id: Date.now(), done: false, name: text } },
    });
    setText('');
  };

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
