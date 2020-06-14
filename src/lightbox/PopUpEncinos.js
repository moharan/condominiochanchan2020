import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/encinos/encinos01.jpg'
import link02 from './../assets/lightbox/encinos/encinos02.jpg'
import link03 from './../assets/lightbox/encinos/encinos03.jpg'
import link04 from './../assets/lightbox/encinos/encinos04.jpg'
import link05 from './../assets/lightbox/encinos/encinos05.jpg'
import link06 from './../assets/lightbox/encinos/encinos06.jpg'
import link07 from './../assets/lightbox/encinos/encinos07.jpg'
import link08 from './../assets/lightbox/encinos/encinos08.jpg'
import link09 from './../assets/lightbox/encinos/encinos09.jpg'
import link10 from './../assets/lightbox/encinos/encinos10.jpg'
import link11 from './../assets/lightbox/encinos/encinos11.jpg'
import link12 from './../assets/lightbox/encinos/encinos12.jpg'
import link13 from './../assets/lightbox/encinos/encinos13.jpg'
import link14 from './../assets/lightbox/encinos/encinos14.jpg'
import link15 from './../assets/lightbox/encinos/encinos15.jpg'


class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox'>
              <h3>Cabaña “Los Encinos”</h3>
              <p>Cabaña de dos pisos para un máximo de 7(*) personas (a 100 metros del lago.</p>
              <ul> Equipada con:
                <li>1 Dormitorio con cama de 2 plazas en primer piso</li>
                <li>1 Baño (sin tina) en primer piso</li>
                <li>1 Dormitorio con cama de 2 plazas en segundo piso</li>
                <li>1 Baño (sin tina) en segundo piso</li>
                <li>1 Dormitorio con una cama de 1 plaza y media y una cama de 1 plaza y media con cama nido</li>
                <li>1 Dormitorio pequeño con una cama de 1 plaza y media</li>
                <li>Living - Comedor</li>
                <li>Cocina completamente equipada</li>
                <li>TV Satelital</li>
                <li>Amplia terraza</li>
                <li>Asadera</li>
                <li>Estacionamiento para varios vehículos (2-3)</li>
                <li>Calefacción a leña</li>
              </ul>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link01}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link02}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link03}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link04}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link05}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link06}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link07}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link08}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link09}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link10}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link11}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link12}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link13}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link14}
                  alt='encinos'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link15}
                  alt='encinos'
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
