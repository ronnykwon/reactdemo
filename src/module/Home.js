import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

export class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Bienvenue sur React</h1>
          <sub> {this.props.firstname} {this.props.lastname} </sub>
        </header>
      </div>
    );
  }
}