import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/contulmo/01_contulmo.jpg'
import link02 from './../assets/lightbox/contulmo/02_contulmo.jpg'
import link03 from './../assets/lightbox/contulmo/03_contulmo.jpg'
import link04 from './../assets/lightbox/contulmo/04_contulmo.jpg'
import link05 from './../assets/lightbox/contulmo/05_contulmo.jpg'
import link06 from './../assets/lightbox/contulmo/06_contulmo.jpg'
import link07 from './../assets/lightbox/contulmo/07_contulmo.jpg'
import link08 from './../assets/lightbox/contulmo/08_contulmo.jpg'
import link09 from './../assets/lightbox/contulmo/09_contulmo.jpg'
import link10 from './../assets/lightbox/contulmo/10_contulmo.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox-atractivos'>
              <h3>Monumento Natural Contulmo</h3>
              <p>Ubicado a 6 Km de Contulmo en la ruta que une Contulmo - Purén.</p>
              <p>Tiene una extensión de 82 hectáreas de conservación, administrado por CONAF, con una longitud de 3.200 metros. Posee un tiempo estimado de recorrido de 2 horas. Actualmente alberga 146 especies vegetales  de los cuales 120 son nativos.</p>
              <p>Existen 26 variedades de helechos, se han determinado 3 comunidades de Bosques, refugiando a 51 especies de fauna entre los cuales se encuentran, zorros, pumas, monitos del monte, pudúes, chucaos, etc.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link01}
                  alt='contulmo'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link02}
                  alt='contulmo'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link03}
                  alt='contulmo'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link04}
                  alt='contulmo'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link05}
                  alt='contulmo'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link06}
                  alt='contulmo'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link07}
                  alt='contulmo'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link08}
                  alt='contulmo'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link09}
                  alt='contulmo'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link10}
                  alt='contulmo'
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
