import React from 'react';

const login = () => {
  return (
    <form method="POST" action="/login">
      <input name="username" type="text" placeholder="username"></input>
      <input name="password" type="password" placeholder="password"></input>
      <input type="submit" value="login" />
    </form>
  );
};

export default login;
