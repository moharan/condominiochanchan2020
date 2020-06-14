import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/rayen/rayen01.jpg'
import link02 from './../assets/lightbox/rayen/rayen02.jpg'
import link03 from './../assets/lightbox/rayen/rayen03.jpg'
import link04 from './../assets/lightbox/rayen/rayen04.jpg'
import link05 from './../assets/lightbox/rayen/rayen05.jpg'
import link06 from './../assets/lightbox/rayen/rayen06.jpg'
import link07 from './../assets/lightbox/rayen/rayen07.jpg'
import link08 from './../assets/lightbox/rayen/rayen08.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox-atractivos'>
              <h3>Salto Rayen</h3>
              <p>Ubicado a 9 km de Contulmo en la ruta que une Contulmo – Puren.</p>
              <p>Para llegar a los saltos, con caídas de 17 y 22 metros, se debe caminar a través de un sendero, cruzar puentes y pasarelas de madera por alrededor de 1,5 kilómetros.</p>
              <p>Además del atractivo de las caídas de agua es la exuberante vegetación nativa, donde destacan los helechos, musgos, arrayanes, canelos, avellanos, robles, copihues y muchas especies más.</p>
              <p>También se pueden observar aves y fauna propia de la Cordillera de Nahuelbuta.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link01}
                  alt='salto rayen'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link02}
                  alt='salto rayen'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link03}
                  alt='salto rayen'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link04}
                  alt='salto rayen'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link05}
                  alt='salto rayen'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link06}
                  alt='salto rayen'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link07}
                  alt='salto rayen'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link08}
                  alt='salto rayen'
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
