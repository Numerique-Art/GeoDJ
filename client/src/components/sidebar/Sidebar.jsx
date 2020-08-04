import React, { Component } from 'react';
import './Sidebar.css';
import '@fortawesome/fontawesome-free/js/all';

class Sidebar extends Component {

  render(){

    return (
      <div className="sidebar">
        <ul className="sidebar-list">
        <li><a href="#"><i className="fas fa-th fa-2x"></i><span> Menu</span></a></li>
          <li><a href="#"><i className="fas fa-map fa-2x"></i><span> Carte</span></a></li>
          <li><a href="#de"><i className="fas fa-cog fa-2x"></i><span> Configurations</span></a></li>
          <li><a href="#de"><i className="fas fa-exclamation-circle fa-2x"></i><span> Informations</span></a></li>
        </ul>
      </div>
    );

  }

}

export default Sidebar;
