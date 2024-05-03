import React from 'react';

function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search transactions..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;