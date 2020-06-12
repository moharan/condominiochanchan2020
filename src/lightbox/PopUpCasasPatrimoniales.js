import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/patrimoniales/01_patrimoniales.jpg'
import link02 from './../assets/lightbox/patrimoniales/02_patrimoniales.jpg'
import link03 from './../assets/lightbox/patrimoniales/03_patrimoniales.jpg'
import link04 from './../assets/lightbox/patrimoniales/04_patrimoniales.jpg'
import link05 from './../assets/lightbox/patrimoniales/05_patrimoniales.jpg'
import link06 from './../assets/lightbox/patrimoniales/06_patrimoniales.jpg'
import link07 from './../assets/lightbox/patrimoniales/07_patrimoniales.jpg'
import link08 from './../assets/lightbox/patrimoniales/08_patrimoniales.jpg'
import link09 from './../assets/lightbox/patrimoniales/09_patrimoniales.jpg'
import link10 from './../assets/lightbox/patrimoniales/10_patrimoniales.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox-atractivos'>
              <h3>Contulmo y Casas Patrimoniales</h3>
              <p>Compuesta  por  más de una decena de antiguas casas alemanas. Comprende un recorrido por la zona urbana de Contulmo en la que podrá apreciar los diseños, la nobleza de los materiales utilizados y  la solidez de sus construcciones.</p>
              <p>Estas viviendas edificadas entre 1884 y 1934, forman parte del legado arquitectónico que dejaron las familias de colonos alemanes que llegaron a nuestro país.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link01}
                  alt='casas patrimoniales'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link02}
                  alt='casas patrimoniales'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link03}
                  alt='casas patrimoniales'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link04}
                  alt='casas patrimoniales'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link05}
                  alt='casas patrimoniales'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link06}
                  alt='casas patrimoniales'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link07}
                  alt='casas patrimoniales'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link08}
                  alt='casas patrimoniales'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link09}
                  alt='casas patrimoniales'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link10}
                  alt='casas patrimoniales'
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
