import React from 'react';

const RegisteredCustomers = (props) => {
  function handleClick(e) {
    localStorage.setItem('access', JSON.stringify(false));
    props.history.push('/');
  }

  return (
    <div>
      <h1>Registered Customers</h1>
      <button onClick={handleClick}>Deslogar</button>
    </div>
  );
};

export default RegisteredCustomers;
