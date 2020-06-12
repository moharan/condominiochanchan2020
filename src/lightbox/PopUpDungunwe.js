import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/dungunwe/01_dungunwe.jpg'
import link02 from './../assets/lightbox/dungunwe/02_dungunwe.jpg'
import link03 from './../assets/lightbox/dungunwe/03_dungunwe.jpg'
import link04 from './../assets/lightbox/dungunwe/04_dungunwe.jpg'
import link05 from './../assets/lightbox/dungunwe/05_dungunwe.jpg'
import link06 from './../assets/lightbox/dungunwe/06_dungunwe.jpg'
import link07 from './../assets/lightbox/dungunwe/07_dungunwe.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox-atractivos'>
              <h3>Museo Dungunwe</h3>
              <p>Espacio creado para  atesorar el legado historico-cultural que las culturas, alemana, mapuche y chilena dejaron generación tras generación en el desarrollo de la Comuna de Contulmo.</p>
              <p>En el podrá encontrar elementos domésticos así como también documentos históricos y un ambiente lleno de recuerdos digno de visitar.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link01}
                  alt='museo dungunwe'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link02}
                  alt='museo dungunwe'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link03}
                  alt='museo dungunwe'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link04}
                  alt='museo dungunwe'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link05}
                  alt='museo dungunwe'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link06}
                  alt='museo dungunwe'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link07}
                  alt='museo dungunwe'
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
