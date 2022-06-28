import React, { Component } from 'react'

export default class SocialsButton extends Component {
  render() {

    if (this.props.selection === "mail") {
      return (
        <div className=''>
            <button type='button' className='inline-block px-6 py-2.5 bg-white text-slate-700 font-medium text-xs leading-tight rounded shadow-md hover:bg-slate-700 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'> 
            <i className='fa fa-envelope'></i> Mail </button>
        </div>
      )
    }else if (this.props.selection === "linkedin"){
      return (
        <div className=''>
            <button type='button' className=' inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight rounded shadow-md hover:bg-slate-700 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'> 
            <i className='fa fa-linkedin pr-1'></i> LinkedIn </button>
        </div>
      )
    }else {
      return (
        <div>
          <button type='button' className='inline-block px-6 py-2.5 bg-white text-slate-700 font-medium text-xs leading-tight rounded shadow-md hover:bg-slate-700 hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'> 
          </button>
      </div>
      )
    }
  }
}
