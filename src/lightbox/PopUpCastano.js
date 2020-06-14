import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/castano/castano01.jpg'
import link02 from './../assets/lightbox/castano/castano02.jpg'
import link03 from './../assets/lightbox/castano/castano03.jpg'
import link04 from './../assets/lightbox/castano/castano04.jpg'
import link05 from './../assets/lightbox/castano/castano05.jpg'
import link06 from './../assets/lightbox/castano/castano06.jpg'
import link07 from './../assets/lightbox/castano/castano07.jpg'
import link08 from './../assets/lightbox/castano/castano08.jpg'
import link09 from './../assets/lightbox/castano/castano09.jpg'
import link10 from './../assets/lightbox/castano/castano10.jpg'
import link11 from './../assets/lightbox/castano/castano11.jpg'
import link12 from './../assets/lightbox/castano/castano12.jpg'
import link13 from './../assets/lightbox/castano/castano13.jpg'
import link14 from './../assets/lightbox/castano/castano14.jpg'
import link15 from './../assets/lightbox/castano/castano15.jpg'
import link16 from './../assets/lightbox/castano/castano16.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox'>
              <h3>Cabaña “El Castaño”</h3>
              <p>Cabaña de un piso para un máximo de 5 - 6 (*) personas (a 50 metros del lago).</p>
              <ul> Equipada con:
                <li>Un dormitorio con cama 2 plazas</li>
                <li>Un dormitorio con una cama 1 plaza y media y una litera de 1 plaza para dos personas</li>
                <li>Un baño (con tina)</li>
                <li>Living - Comedor</li>
                <li>Cocina completamente equipada</li>
                <li>TV Satelital</li>
                <li>Amplia terraza</li>
                <li>Asadera</li>
                <li>Calefacción a leña</li>
                <li>Estacionamiento para 2 vehículos</li>
              </ul>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link01}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link02}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link03}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link04}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link05}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link06}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link07}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link08}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link09}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link10}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link11}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link12}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link13}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link14}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link15}
                  alt='castaño'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link16}
                  alt='castaño'
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
