import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/lago/lago01.jpg'
import link02 from './../assets/lightbox/lago/lago02.jpg'
import link03 from './../assets/lightbox/lago/lago03.jpg'
import link04 from './../assets/lightbox/lago/lago04.jpg'
import link05 from './../assets/lightbox/lago/lago05.jpg'
import link06 from './../assets/lightbox/lago/lago06.jpg'
import link07 from './../assets/lightbox/lago/lago07.jpg'
import link08 from './../assets/lightbox/lago/lago08.jpg'
import link09 from './../assets/lightbox/lago/lago09.jpg'
import link10 from './../assets/lightbox/lago/lago10.jpg'
import link11 from './../assets/lightbox/lago/lago11.jpg'
import link12 from './../assets/lightbox/lago/lago12.jpg'
import link13 from './../assets/lightbox/lago/lago13.jpg'
import link14 from './../assets/lightbox/lago/lago14.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox-atractivos'>
              <h3>Lago Lanalhue </h3>
              <p>Su nombre proviene del Mapudungun y significa Lugar de Almas en Pena o Alma perdida. </p>
              <p>Ubicado en el extremo sur de la Región del Bío Bío, entre la Cordillera de la Costa (Nahuelbuta) y el mar, a 4 km de Contulmo y 9 km de Cañete.</p>
              <p>Se caracteriza por sus aguas templadas, ideales para disfrutar del baño, de la práctica de deportes náuticos y de la pesca.</p>
              <p>Se encuentra rodeado por plantaciones forestales y vegetación nativa.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link01}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link02}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link03}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link04}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link05}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link06}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link07}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link08}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link09}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link10}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link11}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link12}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link13}
                  alt='lago lanalhue'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link14}
                  alt='lago lanalhue'
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
