import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/avellano/avellano01.jpg'
// import link02 from './assets/promociones/02.png'
// import link03 from './assets/promociones/03.png'
// import link04 from './assets/promociones/04.png'
// import link05 from './assets/promociones/05.png'
// import link06 from './assets/promociones/06.png'
// import link07 from './assets/promociones/07.png'
// import link08 from './assets/promociones/08.png'
// import link09 from './assets/promociones/09.png'
// import link10 from './assets/promociones/10.png'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className='text-up-info'>
            <div className='button-close-info' onClick={this.props.closePopup}>x</div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link01}
                  alt='avellano'
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
