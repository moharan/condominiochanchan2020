import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/elena/01_elena.jpg'
import link02 from './../assets/lightbox/elena/02_elena.jpg'
import link03 from './../assets/lightbox/elena/03_elena.jpg'
import link04 from './../assets/lightbox/elena/04_elena.jpg'
import link05 from './../assets/lightbox/elena/05_elena.jpg'
import link06 from './../assets/lightbox/elena/06_elena.jpg'
import link07 from './../assets/lightbox/elena/07_elena.jpg'
import link08 from './../assets/lightbox/elena/08_elena.jpg'
import link09 from './../assets/lightbox/elena/09_elena.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox-atractivos'>
              <h3>Parque Santa Elena</h3>
              <p>Ubicado en el casco urbano, posee una superficie aproximada de 6 hectáreas.</p>
              <p>Los terrenos de este parque fueron donados por el primer alcalde de Contulmo, Pablo Kortwich. Dicha reserva está nutrida con una variada gama de árboles nativos y una fauna  compuesta por zorzales y charcanes, entre otras especies.</p>
              <p>Visitarlo y recorrer su superficie es fácil, ya que cuenta con una serie de senderos que lo dirigen hacia distintos puntos dentro y fuera de sus límites. Algunos de los atractivos a los que se puede acceder desde allí son: los Túneles “La Huiña” y “Contulmo”. También se puede observar dentro de los senderos, numerosas esculturas en madera de la fauna nativa y encontrar vistas panorámicas de la Comuna de Contulmo y Lago Lanalhue.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link01}
                  alt='santa elena'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link02}
                  alt='santa elena'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link03}
                  alt='santa elena'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link04}
                  alt='santa elena'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link05}
                  alt='santa elena'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link06}
                  alt='santa elena'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link07}
                  alt='santa elena'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link08}
                  alt='santa elena'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link09}
                  alt='santa elena'
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
