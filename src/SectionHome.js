import React from 'react'
import { Carousel } from 'react-bootstrap'
import './App.css'
import slide01 from './assets/home/01.jpg'
import slide02 from './assets/home/02.jpg'
import slide03 from './assets/home/03.jpg'
import slide04 from './assets/home/04.jpg'
import video from './assets/video/chanchan2019.m4v'

class SectionHome extends React.Component {
  render () {
    return (
      <React.Fragment>
        {/* slider */}
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide01}
              alt='slide01'
            />
            {/* <Carousel.Caption>
            <h3>111</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide02}
              alt='slide02'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide03}
              alt='slide03'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide04}
              alt='slide04'
            />
          </Carousel.Item>
        </Carousel>
        {/* video - precios */}
        <div className='video-section'>
          <video
            className='video'
            controls
            autoPlay
            // src={video}
          />
        </div>
        <div className='price-section'>
          <div className='price-block'>
            <div className='price-title'>Nombre</div>
            <div className='price-title'>Capacidad Máxima</div>
            <div className='price-title active'>Baja</div>
            <div className='price-title disabled'>Media</div>
            <div className='price-title disabled'>Alta</div>
          </div>
          <div className='price-block'>
            <div className='price-element'>El Castaño</div>
            <div className='price-element'>5 *</div>
            <div className='price-element active'>$ 60.000</div>
            <div className='price-element disabled'>$ 75.000</div>
            <div className='price-element disabled'>$ 95.000</div>
          </div>
          <div className='price-block'>
            <div className='price-element'>Los Encinos</div>
            <div className='price-element'>7 *</div>
            <div className='price-element active'>$ 75.000</div>
            <div className='price-element disabled'>$ 90.000</div>
            <div className='price-element disabled'>$ 110.000</div>
          </div>
          <div className='price-block'>
            <div className='price-element'>Los Cipreses</div>
            <div className='price-element'>8</div>
            <div className='price-element active'>$ 85.000</div>
            <div className='price-element disabled'>$ 100.000</div>
            <div className='price-element disabled'>$ 120.000</div>
          </div>
          <div className='price-block'>
            <div className='price-element'>El Avellano</div>
            <div className='price-element'>9</div>
            <div className='price-element active last-active'>$ 90.000</div>
            <div className='price-element disabled'>$ 110.000</div>
            <div className='price-element disabled'>$ 130.000</div>
          </div>
          <div className='text-conditions'>
            <p>- Todos los valores son con IVA incluido (19%).</p>
            <p>- La capacidad de la cabaña incluye adultos y niños.</p>
            <b>(*) Opción de cama supletoria (1 persona adicional) por un recargo de $ 10.000.</b>
          </div>
          <div className='text-conditions'>
            <p>TEMPORADA BAJA: 01 de Mayo al 10 de Septiembre 2020</p>
            <p>TEMPORADA MEDIA: 11 de Septiembre al 24 de Diciembre 2020. <b>(Arriendo mínimo 3 noches para Fiestas Patrias)</b></p>
            <p>TEMPORADA ALTA: 25 de Diciembre 2020 al 6 de Marzo 2021. <b>(Noche de Año Nuevo posee tarifa especial / Arriendo mínimo 3 noches en Enero y 4 noches en Febrero)</b></p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SectionHome
