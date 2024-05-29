import React, { useState } from 'react';

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search mb-4">
      <input
        type="text"
        placeholder="Search resources..."
        value={searchTerm}
        onChange={handleSearch}
        className="py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />
    </div>
  );
};

export default SearchInput;