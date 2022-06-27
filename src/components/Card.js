import React, { Component } from 'react'
import '../style.css'
import Info from './Info'


export default class Card extends Component {
  
  render() {
    return (
        <div className='card-container'>
            <img className="profile-photo" src="https://picsum.photos/id/1025/600/400" alt="" />
            <Info />
        </div>
    )
  }
}
