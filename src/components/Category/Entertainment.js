import React, { Component } from 'react'
import Navbar from '../Navbar';
import News from '../News';

export default class Entertainment extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={6} country="in" category="entertainment"/>
      </div>
    )
  }
}
