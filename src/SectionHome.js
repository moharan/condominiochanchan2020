import React from 'react'
import { Carousel } from 'react-bootstrap'
import './App.css'
import slide01 from './assets/home/01.jpg'
import slide02 from './assets/home/02.jpg'
import slide03 from './assets/home/03.jpg'
import slide04 from './assets/home/04.jpg'

class SectionHome extends React.Component {
  render () {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={slide01}
            alt='slide01'
          />
          {/* <Carousel.Caption>
            <h3>111</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={slide02}
            alt='slide02'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={slide03}
            alt='slide03'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={slide04}
            alt='slide04'
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default SectionHome
