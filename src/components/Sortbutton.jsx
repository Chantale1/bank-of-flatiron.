import React from 'react';

function SortButton({ onClick, sortOrder }) {
  return (
    <button onClick={onClick}>
      {sortOrder === 'asc' ? 'Sort A-Z' : 'Sort Z-A'}
    </button>
  );
}

export default SortButton;