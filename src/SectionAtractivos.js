import React from 'react'
import { Carousel } from 'react-bootstrap'
import './App.css'

import slide01 from './assets/turistico-slide/01-turisticos.jpg'
import slide02 from './assets/turistico-slide/02-turisticos.jpg'
import slide03 from './assets/turistico-slide/03-turisticos.jpg'
import slide04 from './assets/turistico-slide/04-turisticos.jpg'
import atractivos01 from './assets/distancias/atractivos01.png'
import atractivos02 from './assets/distancias/atractivos02.png'
import link01 from './assets/link/01_cabanas.jpg'
import link02 from './assets/link/02_cabanas.jpg'
import link03 from './assets/link/03_cabanas.jpg'
import link04 from './assets/link/04_cabanas.jpg'
import link05 from './assets/link/05_cabanas.jpg'
import link06 from './assets/link/06_cabanas.jpg'

class SectionAtractivos extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide01}
              alt='slide01'
            />
            <Carousel.Caption>
              <h4 className='text-carrousel'>El Lago Lanalhue posee numerosas opciones de panoramas para realizar además de las actividades que pueden desarrollarse en él mismo, como la práctica de deportes náuticos, pesca, observación de aves, etc.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide02}
              alt='slide02'
            />
            <Carousel.Caption>
              <h4>Se pueden realizar excursiones a distintas reservas naturales, destacándose el Parque Nacional Nahuelbuta.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide03}
              alt='slide03'
            />
            <Carousel.Caption>
              <h4>También hay panoramas culturales, como visitas al Museo Mapuche, Molino Grollmus, entre otros.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide04}
              alt='slide04'
            />
            <Carousel.Caption>
              <h4>Por último puedes disfrutar de la gastronomía local y de los productos típicos de la zona.</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='titulo-secciones04'>Atractivos</div>
        <div className='distancias-div'>
        <div className='distancias02'><img className='atractivo02' src={atractivos02} alt='atractivos02' /></div>
          <div className='distancias02'><img className='atractivo01' src={atractivos01} alt='atractivos01' /></div>
        </div>
        <div className='links'>
          <a href='#link'><img src={link01} alt='El Avellano' className='contain-link' /></a>
          <a href='#link'><img src={link02} alt='Los Encinos' className='contain-link' /></a>
          <a href='#link'><img src={link03} alt='Los Cipreses' className='contain-link' /></a>
          <a href='#link'><img src={link04} alt='El Castaño' className='contain-link' /></a>
          <a href='#link'><img src={link05} alt='Exterior Cabañas' className='contain-link' /></a>
          <a href='#link'><img src={link06} alt='Hot Tubs' className='contain-link' /></a>
        </div>
      </React.Fragment>
    )
  }
}

export default SectionAtractivos
