import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/avellano/avellano01.jpg'
import link02 from './../assets/lightbox/avellano/avellano02.jpg'
import link03 from './../assets/lightbox/avellano/avellano03.jpg'
import link04 from './../assets/lightbox/avellano/avellano04.jpg'
import link05 from './../assets/lightbox/avellano/avellano05.jpg'
import link06 from './../assets/lightbox/avellano/avellano06.jpg'
import link07 from './../assets/lightbox/avellano/avellano07.jpg'
import link08 from './../assets/lightbox/avellano/avellano08.jpg'
import link09 from './../assets/lightbox/avellano/avellano09.jpg'
import link10 from './../assets/lightbox/avellano/avellano10.jpg'
import link11 from './../assets/lightbox/avellano/avellano11.jpg'
import link12 from './../assets/lightbox/avellano/avellano12.jpg'
import link13 from './../assets/lightbox/avellano/avellano13.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox'>
              <h3>Cabaña “cipres”</h3>
              <p>Cabaña de dos pisos para un máximo de 9 personas (a 100 metros del lago).</p>
              <ul> Equipada con:
                <li>1 Dormitorio con cama de 2 plazas en primer piso</li>
                <li>1 Baño (sin tina) en primer piso</li>
                <li>1 Dormitorio con cama de 2 plazas en segundo piso</li>
                <li>1 Baño (sin tina) en segundo piso</li>
                <li>1 Dormitorio con una cama de 1 plaza y media y una litera de 1 plaza para 2 personas</li>
                <li>1 Dormitorio pequeño con una cama de 1 plaza</li>
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
                  className='d-block w-100'
                  src={link01}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link02}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link03}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link04}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link05}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link06}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link07}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link08}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link09}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link10}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link11}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link12}
                  alt='avellano'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link13}
                  alt='avellano'
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
