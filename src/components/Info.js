import React, { Component } from 'react'
import Title from './Title'
import '../style.css'

export default class Info extends Component {
  render() {
    return (
        <div className='info-panel'>
          <Title name = {"Smith Smith"}/>
        </div>
    )
  }
}
