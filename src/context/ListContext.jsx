import { createContext, useContext, useReducer } from 'react';

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const initialList = [{ id: Date.now(), done: false, name: 'banana' }];

  const [items, dispatch] = useReducer(reducer, initialList);

  const deleteHandler = (item) => {
    dispatch({ type: 'DELETE_ITEM', payload: { item } });
  };

  const updateHandler = (item) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { item } });
  };

  const addItem = (e) => {
    e.preventDefault();
    if (!text) return;
    dispatch({
      type: 'ADD_ITEM',
      payload: { item: { id: Date.now(), done: false, name: text } },
    });
    setText('');
  };
  function reducer(state, action) {
    const { payload, type } = action;
    switch (type) {
      case 'ADD_ITEM':
        return [payload.item, ...state];
      case 'DELETE_ITEM':
        return state.filter((item) => item.id !== payload.item.id);
      case 'UPDATE_ITEM':
        return state.map((item) =>
          item.id === payload.item.id ? payload.item : item
        );
      default:
        throw new Error(`${type} is not a valid type.`);
    }
  }
  return (
    <ListContext.Provider
      value={{ items, deleteHandler, updateHandler, addItem }}
    >
      {children}
    </ListContext.Provider>
  );
};

const useList = () => {
  const context = useContext(ListContext);

  if (context === undefined)
    throw new Error('ListContext must be used in a ListProvider');

  return context;
};

export { ListProvider, useList };
