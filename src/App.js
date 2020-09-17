import React, { useContext, useEffect } from 'react';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Auth from './components/Auth/Auth';
import Router from './Router';
import { UserContext } from './context/UserContext';

import './styles/index.css';
import { FeedContext } from './context/FeedContext';

function App() {

  const { user } = useContext(UserContext);
  const { whoFollow, getWhoFollow } = useContext(FeedContext);

  useEffect(() => {
    getWhoFollow();
  }, [])

  return (
    <>
      <ToastContainer autoClose={2000} closeButton={false} />
      {user ? <Router /> : <Auth />}
    </>
  );
}

export default App;
