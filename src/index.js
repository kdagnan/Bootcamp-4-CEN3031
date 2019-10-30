import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from './data/data';
import 'bootstrap/dist/css/bootstrap.css';


//The app is now passing the data as a property
ReactDOM.render(<App data={data} />, document.getElementById('root'));
