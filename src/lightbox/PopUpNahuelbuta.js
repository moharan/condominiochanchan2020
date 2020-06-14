import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/nahuelbuta/01_nahuelbuta.jpg'
import link02 from './../assets/lightbox/nahuelbuta/02_nahuelbuta.jpg'
import link03 from './../assets/lightbox/nahuelbuta/03_nahuelbuta.jpg'
import link04 from './../assets/lightbox/nahuelbuta/04_nahuelbuta.jpg'
import link05 from './../assets/lightbox/nahuelbuta/05_nahuelbuta.jpg'
import link06 from './../assets/lightbox/nahuelbuta/06_nahuelbuta.jpg'
import link07 from './../assets/lightbox/nahuelbuta/07_nahuelbuta.jpg'
import link08 from './../assets/lightbox/nahuelbuta/08_nahuelbuta.jpg'
import link09 from './../assets/lightbox/nahuelbuta/09_nahuelbuta.jpg'
import link10 from './../assets/lightbox/nahuelbuta/10_nahuelbuta.jpg'
import link11 from './../assets/lightbox/nahuelbuta/11_nahuelbuta.jpg'
import link12 from './../assets/lightbox/nahuelbuta/12_nahuelbuta.jpg'
import link13 from './../assets/lightbox/nahuelbuta/13_nahuelbuta.jpg'
import link14 from './../assets/lightbox/nahuelbuta/14_nahuelbuta.jpg'
import link15 from './../assets/lightbox/nahuelbuta/15_nahuelbuta.jpg'
import link16 from './../assets/lightbox/nahuelbuta/16_nahuelbuta.jpg'
import link17 from './../assets/lightbox/nahuelbuta/17_nahuelbuta.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox-atractivos'>
              <h3>Parque Nacional Nahuelbuta</h3>
              <p>El Parque Nacional Nahuelbuta posee una extensión de 6.832 ha, y se caracteriza por presentar grandes bosques de araucarias, con ejemplares de edades estimadas cercanas a los 2.000 años.</p>
              <p>Es posible acceder al parque por 3 vías: desde Angol, Cañete o desde la localidad de Antihuala.</p>
              <p>En el Parque es posible apreciar además de la Araucaria, una serie de otras especies de flora nativas tales como lengas, robles, coihues, ñirres, plantas insectívoras y orquídeas.</p>
              <p>También, numerosas especies de fauna nativa, entre los que destacan el zorro de Darwin (o chilote), que sólo habita en la cordillera de Nahuelbuta y Chiloé.</p>
              <p>Entre las atracciones del parque, destaca la Piedra El Águila, peñón rocoso con mirador que se ubica en la línea divisoria de aguas de la cordillera de Nahuelbuta, a 1379 msnm.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link01}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link02}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link03}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link04}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link05}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link06}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link07}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link08}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link09}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link10}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link11}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link12}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link13}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link14}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link15}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link16}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link17}
                  alt='nahuelbuta'
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    )
  }
}

export default PopUp
