import React from 'react'
import './App.css'

import link01 from './assets/promociones/01.png'
import link02 from './assets/promociones/02.png'
import link03 from './assets/promociones/03.png'
import link04 from './assets/promociones/04.png'
import link05 from './assets/promociones/05.png'
import link06 from './assets/promociones/06.png'
import link07 from './assets/promociones/07.png'
import link08 from './assets/promociones/08.png'
import link09 from './assets/promociones/09.png'
import link10 from './assets/promociones/10.png'

class SectionPromociones extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='links'>
          <a href='#link'><img src={link01} alt='promociones' className='contain-link' /></a>
          <a href='#link'><img src={link02} alt='promociones' className='contain-link' /></a>
          <a href='#link'><img src={link03} alt='promociones' className='contain-link' /></a>
          <a href='#link'><img src={link04} alt='promociones' className='contain-link' /></a>
          <a href='#link'><img src={link05} alt='promociones' className='contain-link' /></a>
          <a href='#link'><img src={link06} alt='promociones' className='contain-link' /></a>
          <a href='#link'><img src={link07} alt='promociones' className='contain-link' /></a>
          <a href='#link'><img src={link08} alt='promociones' className='contain-link' /></a>
          <a href='#link'><img src={link09} alt='promociones' className='contain-link' /></a>
          <a href='#link'><img src={link10} alt='promociones' className='contain-link' /></a>
        </div>
      </React.Fragment>
    )
  }
}

export default SectionPromociones
