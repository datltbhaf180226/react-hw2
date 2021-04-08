import React from 'react';

import { RatingBar, Notification } from './Rating-bar';
import './App.css';
// import { RatingList } from './RatingList';

function App() {
  const list = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ]

  const listNotification = [
    {
      id: 1,
      content: "abc",
      description: "abc",
      isChecked: true,
    },
    {
      id: 2,
      content: "abc",
      description: "abc",
      isChecked: true,
    },
    {
      id: 3,
      content: "abc",
      description: "abc",
      isChecked: false,
    },
    {
      id: 4,
      content: "abc",
      description: "abc",
      isChecked: false,
    },
    {
      id: 5,
      content: "abc",
      description: "abc",
      isChecked: false,
    },
  ]

  return (
    <div className="App">
      <RatingBar list={list} />
      
      <Notification listNotification={listNotification}/>
    </div>
  );
}

export default App;
