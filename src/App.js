import React, { Component } from 'react'
import Dice from './components/Dice'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Dice/>
        <Dice/>
        <Dice/>
      </div>
    )
  }
}
