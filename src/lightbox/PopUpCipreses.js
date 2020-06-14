import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/cipreses/cipreses01.jpg'
import link02 from './../assets/lightbox/cipreses/cipreses02.jpg'
import link03 from './../assets/lightbox/cipreses/cipreses03.jpg'
import link04 from './../assets/lightbox/cipreses/cipreses04.jpg'
import link05 from './../assets/lightbox/cipreses/cipreses05.jpg'
import link06 from './../assets/lightbox/cipreses/cipreses06.jpg'
import link07 from './../assets/lightbox/cipreses/cipreses07.jpg'
import link08 from './../assets/lightbox/cipreses/cipreses08.jpg'
import link09 from './../assets/lightbox/cipreses/cipreses09.jpg'
import link10 from './../assets/lightbox/cipreses/cipreses10.jpg'
import link11 from './../assets/lightbox/cipreses/cipreses11.jpg'
import link12 from './../assets/lightbox/cipreses/cipreses12.jpg'
import link13 from './../assets/lightbox/cipreses/cipreses13.jpg'
import link14 from './../assets/lightbox/cipreses/cipreses14.jpg'
import link15 from './../assets/lightbox/cipreses/cipreses15.jpg'
import link16 from './../assets/lightbox/cipreses/cipreses16.jpg'
import link17 from './../assets/lightbox/cipreses/cipreses17.jpg'
import link18 from './../assets/lightbox/cipreses/cipreses18.jpg'
import link19 from './../assets/lightbox/cipreses/cipreses19.jpg'
import link20 from './../assets/lightbox/cipreses/cipreses20.jpg'
import link21 from './../assets/lightbox/cipreses/cipreses21.jpg'
import link22 from './../assets/lightbox/cipreses/cipreses22.jpg'
import link23 from './../assets/lightbox/cipreses/cipreses23.jpg'
import link24 from './../assets/lightbox/cipreses/cipreses24.jpg'
import link25 from './../assets/lightbox/cipreses/cipreses25.jpg'
import link26 from './../assets/lightbox/cipreses/cipreses26.jpg'
import link27 from './../assets/lightbox/cipreses/cipreses27.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox'>
              <h3>Cabaña “Los Cipreses”</h3>
              <p>Cabaña de dos pisos para un máximo de 8 personas (a 100 metros del lago).</p>
              <ul> Equipada con:
                <li>1 Dormitorio con cama de 2 plazas en primer piso</li>
                <li>1 Baño (sin tina) en primer piso</li>
                <li>1 Dormitorio con cama de 2 plazas en segundo piso</li>
                <li>1 Baño (sin tina) en segundo piso</li>
                <li>1 Dormitorio con una cama de 1 plaza y una litera de 1 plaza para 2 personas</li>
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
                  className='d-block w-100w'
                  src={link01}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link02}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link03}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link04}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link05}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link06}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link07}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link08}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link09}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link10}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link11}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link12}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link13}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link14}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link15}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link16}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link17}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link18}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link19}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link20}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link21}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link22}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link23}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link24}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link25}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link26}
                  alt='cipreses'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link27}
                  alt='cipreses'
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
