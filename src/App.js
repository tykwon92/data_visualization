import React from 'react';
import Face from './Face';
import Face2 from './Face2';
import Face3 from './Face3';
import Face4 from './Face4';
import Brain from './brain';

import './App.css';


function App() {
  return <div className="App">
    <h1>Human Brain Evolution Tree</h1>
    <Face />
    <Face2 />
    <Face3 />
    <Face4 />
    <Brain />

    </div>
  ;
}

export default App;
