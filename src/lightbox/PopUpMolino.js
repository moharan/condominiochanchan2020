import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/grollmus/grollmus01.jpg'
import link02 from './../assets/lightbox/grollmus/grollmus02.jpg'
import link03 from './../assets/lightbox/grollmus/grollmus03.jpg'
import link04 from './../assets/lightbox/grollmus/grollmus04.jpg'
import link05 from './../assets/lightbox/grollmus/grollmus05.jpg'
import link06 from './../assets/lightbox/grollmus/grollmus06.jpg'
import link07 from './../assets/lightbox/grollmus/grollmus07.jpg'
import link08 from './../assets/lightbox/grollmus/grollmus08.jpg'
import link09 from './../assets/lightbox/grollmus/grollmus09.jpg'
import link10 from './../assets/lightbox/grollmus/grollmus10.jpg'
import link11 from './../assets/lightbox/grollmus/grollmus11.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox-atractivos'>
              <h3>Molino Grollmus </h3>
              <p>A solo 5 minutos de Contulmo Centro podrás recorrer en una visita guiada, la cual debe agendarse en el Museo Dungunwe de Contulmo, este antiguo molino perteneciente a una de las familias de colonos alemanes, el cual ha prestado servicios a la comunidad por largos años en la molienda del trigo, la producción de chicha y la generación de luz eléctrica en el pasado. </p>
              <p>En la visita podrás recorrer su pequeño museo y las dependencias del Molino donde podrás conocer un poco de la historia del Molino, de Contulmo y el Lago Lanalhue.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link01}
                  alt='molino'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link02}
                  alt='molino'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link03}
                  alt='molino'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link04}
                  alt='molino'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link05}
                  alt='molino'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link06}
                  alt='molino'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link07}
                  alt='molino'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link08}
                  alt='molino'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link09}
                  alt='molino'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link10}
                  alt='molino'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link11}
                  alt='molino'
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
