import React, { Component } from 'react'
import Title from './Title'
import '../style.css'
import SocialsButton from './SocialsButton'

export default class Info extends Component {
  render() {
    return (
        <div className='info-panel'>
          <Title name = {"Stelios Artsontoulis"}/>
          <SocialsButton />
        </div>
    )
  }
}
