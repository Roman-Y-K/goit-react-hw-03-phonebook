import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Filter = ({ filter, onChange }) => {
  const filterInputId = shortid.generate();
  return (
    <>
      <label htmlFor={filterInputId}>Find contact by name</label>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        id={filterInputId}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
