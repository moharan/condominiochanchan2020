import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/tuneles/tuneles01.jpg'
import link02 from './../assets/lightbox/tuneles/tuneles02.jpg'
import link03 from './../assets/lightbox/tuneles/tuneles03.jpg'
import link04 from './../assets/lightbox/tuneles/tuneles04.jpg'
import link05 from './../assets/lightbox/tuneles/tuneles05.jpg'
import link06 from './../assets/lightbox/tuneles/tuneles06.jpg'
import link07 from './../assets/lightbox/tuneles/tuneles07.jpg'
import link08 from './../assets/lightbox/tuneles/tuneles08.jpg'
import link09 from './../assets/lightbox/tuneles/tuneles09.jpg'
import link10 from './../assets/lightbox/tuneles/tuneles10.jpg'
import link11 from './../assets/lightbox/tuneles/tuneles11.jpg'
import link12 from './../assets/lightbox/tuneles/tuneles12.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox-atractivos'>
              <h3>Antiguos Tuneles Ferroviarios</h3>
              <p>Red de antiguos túneles ferroviarios que cruzan la Cordillera de Nahuelbuta, pertenecientes al ramal Lebu – Los Sauces.</p>
              <p>Desde Contulmo se puede acceder a los túneles La Huiña, Contulmo, Nahuelbuta, Sanzana, entre otros, con distancias de hasta casi un kilómetro de longitud.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link01}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link02}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link03}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link04}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link05}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link06}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link07}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link08}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link09}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link10}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link11}
                  alt='tuneles'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link12}
                  alt='tuneles'
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
