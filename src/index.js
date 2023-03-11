import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';


Amplify.configure(config);
const tasksDATA = [
  { id: "user-0", name: "Instructor1", completed: true },
  { id: "user-1", name: "Instructor2", completed: false },
  { id: "user-2", name: "Instructor3", completed: false }
];

const filtersDATA = [
  { id: "filter-0", name: "All", completed: true },
  { id: "filter-1", name: "Instructor", completed: false },
  { id: "filter-2", name: "Student", completed: false }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={tasksDATA} filters={filtersDATA}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
