import React from 'react';

const Card = (props) => {
  const { text } = props;
  return (
    <div className="card" style={{ width: '18rem;' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">{text}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
};

export default Card;

