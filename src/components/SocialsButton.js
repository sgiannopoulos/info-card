import React, { Component } from 'react'

export default class SocialsButton extends Component {
  render() {
    return (
      <div>
          <button type='button' className='inline-block px-6 py-2.5 bg-white text-slate-700 font-medium text-xs leading-tight rounded shadow-md hover:bg-slate-700 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'> 
          Mail <i></i></button>
      </div>
    )
  }
}
