import React from 'react';
import { useList } from '../../context/ListContext';

export default function Header() {
  const { items, clearCart } = useList();
  return (
    <div>
      List Items: {items.length} || <span onClick={clearCart}>CLEAR CART</span>
    </div>
  );
}
