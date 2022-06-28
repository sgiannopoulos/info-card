import React, { Component } from 'react'

export default class Title extends Component {
    
  render() {
    return (
        <div className=' mt-5 place-content-between '>
            <h1 className='font-extrabold text-2xl text-white text-center'>
                {this.props.name}
            </h1>
            <h3 className='text-yellow-500 italic text-sm text-center'>
                Software Engineer
            </h3>
            <h3 className='text-gray-400 italic text-xs text-center'>
                Unemployed
            </h3>
        </div>
    )
  }
}
