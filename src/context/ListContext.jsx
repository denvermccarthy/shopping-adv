import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

const ListContext = createContext();

const ListProvider = ({ children }) => {
  const initialList = [{ id: Date.now(), done: false, name: 'banana' }];
  const [text, setText] = useState('');

  const [items, dispatch] = useReducer(reducer, initialList);

  const deleteHandler = (item) => {
    dispatch({ type: 'DELETE_ITEM', payload: { item } });
  };

  const updateHandler = (item) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { item } });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
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
      case 'CLEAR_CART':
        return [];
      case 'DELETE_ITEM':
        return state.filter((item) => item.id !== payload.item.id);
      case 'UPDATE_ITEM':
        return state.map((item) =>
          item.id === payload.item.id ? payload.item : item
        );
      case 'LOCAL_STORAGE':
        return action.payload.list;
      default:
        throw new Error(`${type} is not a valid type.`);
    }
  }
  useEffect(() => {
    if (items !== initialList) {
      localStorage.setItem('items', JSON.stringify(items));
    }
  }, [items]);

  useEffect(() => {
    const list = JSON.parse(localStorage.getItem('items'));
    if (list) {
      dispatch({ type: 'LOCAL_STORAGE', payload: { list } });
    }
  }, []);
  return (
    <ListContext.Provider
      value={{
        items,
        deleteHandler,
        updateHandler,
        addItem,
        clearCart,
        text,
        setText,
      }}
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
