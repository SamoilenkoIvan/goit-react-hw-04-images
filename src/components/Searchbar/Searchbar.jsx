import React, { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import './Searchbar.css';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return alert('Please enter something :)');
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  useEffect(() => {
    const handleEscapeKeyPress = e => {
      if (e.key === 'Escape') {
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleEscapeKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, []);

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span>
            <FiSearch size={25} stroke="#3f51b5" />
          </span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
