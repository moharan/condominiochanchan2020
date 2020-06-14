import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/hottubs/hottubs01.jpg'
import link02 from './../assets/lightbox/hottubs/hottubs02.jpg'
import link03 from './../assets/lightbox/hottubs/hottubs03.jpg'
import link04 from './../assets/lightbox/hottubs/hottubs04.jpg'
import link05 from './../assets/lightbox/hottubs/hottubs05.jpg'
import link06 from './../assets/lightbox/hottubs/hottubs06.jpg'
import link07 from './../assets/lightbox/hottubs/hottubs07.jpg'
import link08 from './../assets/lightbox/hottubs/hottubs08.jpg'
import link09 from './../assets/lightbox/hottubs/hottubs09.jpg'
import link10 from './../assets/lightbox/hottubs/hottubs10.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox'>
              <h3>Hot tubs</h3>
              <p>Nuestras cabañas cuentan con un Hot Tubs o Tinaja de Agua Caliente fabricada en madera de ciprés, con capacidad de hasta 6 personas, ubicada en un entorno de mucha vegetación con una espectacular vista al lago Lanalhue. Además de disfrutar del paisaje, las tinajas proveen de numerosos beneficios para la salud.</p>
              <b>Se arrienda con reserva de al menos 24 hrs.</b>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link01}
                  alt='hot tubs'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link02}
                  alt='hot tubs'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link03}
                  alt='hot tubs'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link04}
                  alt='hot tubs'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link05}
                  alt='hot tubs'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link06}
                  alt='hot tubs'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link07}
                  alt='hot tubs'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link08}
                  alt='hot tubs'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link09}
                  alt='hot tubs'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100w'
                  src={link10}
                  alt='hot tubs'
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
