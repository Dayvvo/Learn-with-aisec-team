import './App.css';
import React from 'react';
import Header from './component/header';
import Activity from './component/activities';
import Sidenav from './component/sidenav';

const App = () => {


  return (
    <div className='App'>
      <Sidenav/>
      <div className="">
        <Header/>
        <Activity/>
      </div>
      
    </div>
  );
};

export default App;
