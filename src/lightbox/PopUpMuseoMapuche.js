import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/mapuche/01_mapuche.jpg'
import link02 from './../assets/lightbox/mapuche/02_mapuche.jpg'
import link03 from './../assets/lightbox/mapuche/03_mapuche.jpg'
import link04 from './../assets/lightbox/mapuche/04_mapuche.jpg'
import link05 from './../assets/lightbox/mapuche/05_mapuche.jpg'
import link06 from './../assets/lightbox/mapuche/06_mapuche.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox-atractivos'>
              <h3>Museo Mapuche</h3>
              <p>Emplazado a 1 Km al sur de la ciudad de Cañete, fue creado con el propósito de resguardar y compartir el patrimonio de la cultura mapuche.</p>
              <p>Este espacio posee un importante tesoro arqueológico y etnográfico del pueblo mapuche; con una colección de 1.400 objetos, distribuidos entre tejidos, platería, cestería, cerámica y madera.</p>
              <p>La muestra contempla temáticas como Actividades Económicas, Costumbres Mortuorias y Artes Mapuche, entre otras.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link01}
                  alt='museo mapuche'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link02}
                  alt='museo mapuche'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link03}
                  alt='museo mapuche'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link04}
                  alt='museo mapuche'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link05}
                  alt='museo mapuche'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link06}
                  alt='museo mapuche'
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
