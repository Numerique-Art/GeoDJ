import React from 'react';
import './App.css';
import Sidebar from './sidebar/Sidebar';
import MapLeaflet from './map/Map';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <Sidebar />
        <MapLeaflet />
      </React.Fragment>
      
    );
  }
}

export default App;
