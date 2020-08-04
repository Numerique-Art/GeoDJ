import React from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import Map from './map/Map';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Sidebar />
        <Map />
      </React.Fragment>
      
    );
  }
}

export default App;
