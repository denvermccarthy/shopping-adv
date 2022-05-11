import React from 'react';

export default function Item({ name, id, done }) {
  return <li key={id}>{name}</li>;
}
