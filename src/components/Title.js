import React, { Component } from 'react'

export default class Title extends Component {
    
  render() {
    return (
        <h1 className='font-extrabold text-2xl text-white text-center ml-auto mr-auto mt-5'>
            {this.props.name}
        </h1>
    )
  }
}
