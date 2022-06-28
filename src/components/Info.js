import React, { Component } from 'react'
import Title from './Title'
import '../style.css'
import SocialsButton from './SocialsButton'

export default class Info extends Component {
  render() {
    return (
        <div className='info-panel flex flex-col'>
          <Title className='flex flex-row' name = {"Stelios Artsontoulis"}/>
          <div className='flex flex-row flex-grow-1 justify-between flex-wrap mt-4 ml-auto mr-auto'>
            <SocialsButton className="flex" selection = {"mail"} />
            <SocialsButton className="flex" selection = {"linkedin"} />
          </div>
          <div className='flex flex-col flex-grow-1  mt-8 ml-2'>
            <h2 className='flex flex-row text-white'>About</h2>
            <p className='flex flex-row text-slate-400 text-center'>
              Dolor veniam cupidatat aliquip eu aute esse in aliquip est. 
              Pariatur eu adipisicing officia eu aliqua voluptate esse do amet amet enim officia non.
            </p>
          </div>
          <div className='flex flex-col flex-grow-1  mt-1 ml-2 mb-4'>
            <h2 className='flex flex-row text-white'>Interests</h2>
            <p className='flex flex-row text-slate-400 text-center'>
              Dolor veniam cupidatat aliquip eu aute esse in aliquip est. 
              Pariatur eu adipisicing officia eu aliqua voluptate esse do amet amet enim officia non.
            </p>
          </div>
          
        </div>
    )
  }
}
