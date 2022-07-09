import React, { Component } from 'react'
import Navbar from '../Navbar';
import News from '../News';

export default class Technology extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={6} country="in" category="technology"/>
      </div>
    )
  }
}
