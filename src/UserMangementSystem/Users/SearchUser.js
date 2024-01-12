import React, { useState } from 'react';

const SearchUser = ({ onSearch, onReset }) => {
  const [searchId, setSearchId] = useState('');

  const handleSearch = () => {
    onSearch(searchId);
  };

  const handleReset = () => {
    setSearchId('');
    onReset();
  };

  return (
    <div className="d-flex mb-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search by Student ID"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
      <button className="btn btn-secondary ms-2" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default SearchUser;
