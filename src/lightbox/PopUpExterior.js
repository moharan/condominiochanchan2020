import React from 'react'
import { Carousel } from 'react-bootstrap'
import './../App.css'

import link01 from './../assets/lightbox/exterior/exterior01.jpg'
import link02 from './../assets/lightbox/exterior/exterior02.jpg'
import link03 from './../assets/lightbox/exterior/exterior03.jpg'
import link04 from './../assets/lightbox/exterior/exterior04.jpg'
import link05 from './../assets/lightbox/exterior/exterior05.jpg'
import link06 from './../assets/lightbox/exterior/exterior06.jpg'
import link07 from './../assets/lightbox/exterior/exterior07.jpg'
import link08 from './../assets/lightbox/exterior/exterior08.jpg'
import link09 from './../assets/lightbox/exterior/exterior09.jpg'
import link10 from './../assets/lightbox/exterior/exterior10.jpg'
import link11 from './../assets/lightbox/exterior/exterior11.jpg'
import link12 from './../assets/lightbox/exterior/exterior12.jpg'
import link13 from './../assets/lightbox/exterior/exterior13.jpg'
import link14 from './../assets/lightbox/exterior/exterior14.jpg'
import link15 from './../assets/lightbox/exterior/exterior15.jpg'
import link16 from './../assets/lightbox/exterior/exterior16.jpg'
import link17 from './../assets/lightbox/exterior/exterior17.jpg'
import link18 from './../assets/lightbox/exterior/exterior18.jpg'
import link19 from './../assets/lightbox/exterior/exterior19.jpg'
import link20 from './../assets/lightbox/exterior/exterior20.jpg'
import link21 from './../assets/lightbox/exterior/exterior21.jpg'
import link22 from './../assets/lightbox/exterior/exterior22.jpg'
import link23 from './../assets/lightbox/exterior/exterior23.jpg'
import link24 from './../assets/lightbox/exterior/exterior24.jpg'
import link25 from './../assets/lightbox/exterior/exterior25.jpg'
import link26 from './../assets/lightbox/exterior/exterior26.jpg'
import link27 from './../assets/lightbox/exterior/exterior27.jpg'
import link28 from './../assets/lightbox/exterior/exterior28.jpg'
import link29 from './../assets/lightbox/exterior/exterior29.jpg'
import link30 from './../assets/lightbox/exterior/exterior30.jpg'
import link31 from './../assets/lightbox/exterior/exterior31.jpg'
import link32 from './../assets/lightbox/exterior/exterior32.jpg'
import link33 from './../assets/lightbox/exterior/exterior33.jpg'
import link34 from './../assets/lightbox/exterior/exterior34.jpg'
import link35 from './../assets/lightbox/exterior/exterior35.jpg'
import link36 from './../assets/lightbox/exterior/exterior36.jpg'
import link37 from './../assets/lightbox/exterior/exterior37.jpg'
import link38 from './../assets/lightbox/exterior/exterior38.jpg'
import link39 from './../assets/lightbox/exterior/exterior39.jpg'
import link40 from './../assets/lightbox/exterior/exterior40.jpg'
import link41 from './../assets/lightbox/exterior/exterior41.jpg'
import link42 from './../assets/lightbox/exterior/exterior42.jpg'
import link43 from './../assets/lightbox/exterior/exterior43.jpg'
import link44 from './../assets/lightbox/exterior/exterior44.jpg'
import link45 from './../assets/lightbox/exterior/exterior45.jpg'
import link46 from './../assets/lightbox/exterior/exterior46.jpg'
import link47 from './../assets/lightbox/exterior/exterior47.jpg'
import link48 from './../assets/lightbox/exterior/exterior48.jpg'
import link49 from './../assets/lightbox/exterior/exterior49.jpg'
import link50 from './../assets/lightbox/exterior/exterior50.jpg'
import link51 from './../assets/lightbox/exterior/exterior51.jpg'
import link52 from './../assets/lightbox/exterior/exterior52.jpg'
import link53 from './../assets/lightbox/exterior/exterior53.jpg'
import link54 from './../assets/lightbox/exterior/exterior54.jpg'
import link55 from './../assets/lightbox/exterior/exterior55.jpg'
import link56 from './../assets/lightbox/exterior/exterior56.jpg'
import link57 from './../assets/lightbox/exterior/exterior57.jpg'
import link58 from './../assets/lightbox/exterior/exterior58.jpg'
import link59 from './../assets/lightbox/exterior/exterior59.jpg'

class PopUp extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner-img'>
          <div className='text-up-info'>
            <div className='button-close-info-img' onClick={this.props.closePopup}>x</div>
            <div className='info-lightbox'>
              <h3>Exterior Cabañas</h3>
              <p>Nuestras cabañas se encuentran en aproximadamente una hectárea de terreno rodeadas de mucha vegetación, la que incluye árboles nativos, árboles frutales, diversidad de flores y arbustos. Posee una gran playa con acceso al lago, área de juegos, cancha de pasto, sector de fogata, sector de tinaja de agua caliente (hot tubs), etc.</p>
            </div>
            <Carousel>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link01}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link02}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link03}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link04}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link05}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link06}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link07}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link08}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link09}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link10}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link11}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link12}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link13}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link14}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link15}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link16}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link17}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link18}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link19}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link20}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link21}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link22}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link23}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link24}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link25}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link26}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link27}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link28}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link29}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link30}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link31}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link32}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link33}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link34}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link35}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link36}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link37}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link38}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link39}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link40}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link41}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link42}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link43}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link44}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link45}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link46}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link47}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link48}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link49}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link50}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link51}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link52}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link53}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link54}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link55}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link56}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link57}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link58}
                  alt='exterior cabañas'
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={link59}
                  alt='exterior cabañas'
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
