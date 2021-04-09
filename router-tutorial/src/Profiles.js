import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
  const activeStyle = {
    color: 'rgb(129, 107, 255)',
    fontWeight: 'bold',
    fontSize: '1.12rem',
    textDecoration: 'none',
  };
  return (
    <div>
      <h3>사용자 목록</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/JB">
            JB 프로필
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/akame">
            akame 프로필
          </NavLink>
        </li>
      </ul>
      <Route
        path="/profiles"
        exact
        render={() => <div>사용자를 선택해 주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;
