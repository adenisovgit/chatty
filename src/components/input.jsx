import React from 'react';

const Input = ({ placeholder }) => (
  <form className="bd-search d-flex align-items-center">
    <input type="search" className="form-control ds-input" id="search-input" placeholder={placeholder} aria-label="Поиск для..." dir="auto" style={{ position: 'relative', verticalAlign: 'top' }} />
  </form>
);

export default Input;
