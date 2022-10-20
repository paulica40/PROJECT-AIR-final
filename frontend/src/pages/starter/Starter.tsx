import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import reactLogo from '../../images/react-logo.svg';

import s from './Starter.module.scss';

const Starter: FC = () => {
  return (
    <div className={s.root}>
      <div className={s.starterBlock}>
        <img src={reactLogo} alt="react" />
        <h3 className="my-3 align-self-center">Welcome to your Project_AIR application!</h3>
        
        <div className={s.buttons}>
          <Link to={'/login'}>
            <Button type="submit" color="warning" className="auth-btn my-3" size="sm">
              Login
            </Button>
          </Link>
          <Link className="mr-3" to={'/register'}>
            <Button type="submit" color="warning" className="auth-btn my-3 mx-3" size="sm">
              Sign up
            </Button>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default Starter;
