import React from 'react'
import { Carousel } from 'react-bootstrap'
import './App.css'

import slide01 from './assets/turistico-slide/01-turisticos.jpg'
import slide02 from './assets/turistico-slide/02-turisticos.jpg'
import slide03 from './assets/turistico-slide/03-turisticos.jpg'
import slide04 from './assets/turistico-slide/04-turisticos.jpg'
import atractivos01 from './assets/distancias/atractivos01.png'
import atractivos02 from './assets/distancias/atractivos02.png'
import link01 from './assets/link/01atractivos.jpg'
import link02 from './assets/link/02atractivos.jpg'
import link03 from './assets/link/03atractivos.jpg'
import link04 from './assets/link/04atractivos.jpg'
import link05 from './assets/link/05atractivos.jpg'
import link06 from './assets/link/06atractivos.jpg'
import link07 from './assets/link/07atractivos.jpg'
import link08 from './assets/link/08atractivos.jpg'
import link09 from './assets/link/09atractivos.jpg'
import link10 from './assets/link/10atractivos.jpg'
/* lightbox */
import PopUpMolino from './lightbox/PopUpMolino'
import PopUpNahuelbuta from './lightbox/PopUpNahuelbuta'
import PopUpContulmo from './lightbox/PopUpContulmo'
import PopUpRayen from './lightbox/PopUpRayen'
import PopUpTuneles from './lightbox/PopUpTuneles'
import PopUpMuseoMapuche from './lightbox/PopUpMuseoMapuche'
import PopUpCasasPatrimoniales from './lightbox/PopUpCasasPatrimoniales'
import PopUpDungunwe from './lightbox/PopUpDungunwe'
import PopUpLanalhue from './lightbox/PopUpLanalhue'
import PopUpElena from './lightbox/PopUpElena'

class SectionAtractivos extends React.Component {
  constructor (props) {
    super(props)
    this.togglePopupMolino = this.togglePopupMolino.bind(this)
    this.togglePopUpNahuelbuta = this.togglePopUpNahuelbuta.bind(this)
    this.togglePopUpContulmo = this.togglePopUpContulmo.bind(this)
    this.togglePopUpRayen = this.togglePopUpRayen.bind(this)
    this.togglePopUpTuneles = this.togglePopUpTuneles.bind(this)
    this.togglePopUpMuseoMapuche = this.togglePopUpMuseoMapuche.bind(this)
    this.togglePopUpCasasPatrimoniales = this.togglePopUpCasasPatrimoniales.bind(this)
    this.togglePopUpDungunwe = this.togglePopUpDungunwe.bind(this)
    this.togglePopUpLanalhue = this.togglePopUpLanalhue.bind(this)
    this.togglePopUpElena = this.togglePopUpElena.bind(this)
    this.state = {
      showPopupMolino: false,
      showPopUpNahuelbuta: false,
      showPopUpContulmo: false,
      showPopUpRayen: false,
      showPopUpTuneles: false,
      showPopUpMuseoMapuche: false,
      showPopUpCasasPatrimoniales: false,
      showPopUpDungunwe: false,
      showPopUpLanalhue: false,
      showPopUpElena: false
    }
  }

  togglePopupMolino () {
    this.setState({
      showPopupMolino: !this.state.showPopupMolino
    })
  }

  togglePopUpNahuelbuta () {
    this.setState({
      showPopUpNahuelbuta: !this.state.showPopUpNahuelbuta
    })
  }

  togglePopUpContulmo () {
    this.setState({
      showPopUpContulmo: !this.state.showPopUpContulmo
    })
  }

  togglePopUpRayen () {
    this.setState({
      showPopUpRayen: !this.state.showPopUpRayen
    })
  }

  togglePopUpTuneles () {
    this.setState({
      showPopUpTuneles: !this.state.showPopUpTuneles
    })
  }

  togglePopUpMuseoMapuche () {
    this.setState({
      showPopUpMuseoMapuche: !this.state.showPopUpMuseoMapuche
    })
  }

  togglePopUpCasasPatrimoniales () {
    this.setState({
      showPopUpCasasPatrimoniales: !this.state.showPopUpCasasPatrimoniales
    })
  }

  togglePopUpDungunwe () {
    this.setState({
      showPopUpDungunwe: !this.state.showPopUpDungunwe
    })
  }

  togglePopUpLanalhue () {
    this.setState({
      showPopUpLanalhue: !this.state.showPopUpLanalhue
    })
  }

  togglePopUpElena () {
    this.setState({
      showPopUpElena: !this.state.showPopUpElena
    })
  }
  render () {
    // pop-up information
    const showPopupMolino = this.state.showPopupMolino
    const showPopUpNahuelbuta = this.state.showPopUpNahuelbuta
    const showPopUpContulmo = this.state.showPopUpContulmo
    const showPopUpRayen = this.state.showPopUpRayen
    const showPopUpTuneles = this.state.showPopUpTuneles
    const showPopUpMuseoMapuche = this.state.showPopUpMuseoMapuche
    const showPopUpCasasPatrimoniales = this.state.showPopUpCasasPatrimoniales
    const showPopUpDungunwe = this.state.showPopUpDungunwe
    const showPopUpLanalhue = this.state.showPopUpLanalhue
    const showPopUpElena = this.state.showPopUpElena
    let lightboxPopupMolino
    let lightboxPopUpNahuelbuta
    let lightboxPopUpContulmo
    let lightboxPopUpRayen
    let lightboxPopUpTuneles
    let lightboxPopUpMuseoMapuche
    let lightboxPopUpCasasPatrimoniales
    let lightboxPopUpDungunwe
    let lightboxPopUpLanalhue
    let lightboxPopUpElena
    if (showPopupMolino === true) {
      lightboxPopupMolino = <PopUpMolino closePopup={this.togglePopupMolino} />
    }
    if (showPopUpNahuelbuta === true) {
      lightboxPopUpNahuelbuta = <PopUpNahuelbuta closePopup={this.togglePopUpNahuelbuta} />
    }
    if (showPopUpContulmo === true) {
      lightboxPopUpContulmo = <PopUpContulmo closePopup={this.togglePopUpContulmo} />
    }
    if (showPopUpRayen === true) {
      lightboxPopUpRayen = <PopUpRayen closePopup={this.togglePopUpRayen} />
    }
    if (showPopUpTuneles === true) {
      lightboxPopUpTuneles = <PopUpTuneles closePopup={this.togglePopUpTuneles} />
    }
    if (showPopUpMuseoMapuche === true) {
      lightboxPopUpMuseoMapuche = <PopUpMuseoMapuche closePopup={this.togglePopUpMuseoMapuche} />
    }
    if (showPopUpCasasPatrimoniales === true) {
      lightboxPopUpCasasPatrimoniales = <PopUpCasasPatrimoniales closePopup={this.togglePopUpCasasPatrimoniales} />
    }
    if (showPopUpDungunwe === true) {
      lightboxPopUpDungunwe = <PopUpDungunwe closePopup={this.togglePopUpDungunwe} />
    }
    if (showPopUpLanalhue === true) {
      lightboxPopUpLanalhue = <PopUpLanalhue closePopup={this.togglePopUpLanalhue} />
    }
    if (showPopUpElena === true) {
      lightboxPopUpElena = <PopUpElena closePopup={this.togglePopUpElena} />
    }
    return (
      <React.Fragment>
        {lightboxPopupMolino}
        {lightboxPopUpNahuelbuta}
        {lightboxPopUpContulmo}
        {lightboxPopUpRayen}
        {lightboxPopUpTuneles}
        {lightboxPopUpMuseoMapuche}
        {lightboxPopUpCasasPatrimoniales}
        {lightboxPopUpDungunwe}
        {lightboxPopUpLanalhue}
        {lightboxPopUpElena}
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide01}
              alt='slide01'
            />
            <Carousel.Caption>
              <h4 className='text-carrousel'>El Lago Lanalhue posee numerosas opciones de panoramas para realizar además de las actividades que pueden desarrollarse en él mismo, como la práctica de deportes náuticos, pesca, observación de aves, etc.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide02}
              alt='slide02'
            />
            <Carousel.Caption>
              <h4 className='text-carrousel'>Se pueden realizar excursiones a distintas reservas naturales, destacándose el Parque Nacional Nahuelbuta.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide03}
              alt='slide03'
            />
            <Carousel.Caption>
              <h4 className='text-carrousel'>También hay panoramas culturales, como visitas al Museo Mapuche, Molino Grollmus, entre otros.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide04}
              alt='slide04'
            />
            <Carousel.Caption>
              <h4 className='text-carrousel'>Por último puedes disfrutar de la gastronomía local y de los productos típicos de la zona.</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='titulo-secciones04'>Atractivos</div>
        <div className='distancias-div'>
          <div className='distancias02'><img className='atractivo02' src={atractivos02} alt='atractivos02' /></div>
          <div className='distancias02'><img className='atractivo01' src={atractivos01} alt='atractivos01' /></div>
        </div>
        <div className='links'>
          <div onClick={this.togglePopupMolino} alt='molino-grollmus' className='contain-link'><img src={link01} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopUpNahuelbuta} alt='nahuelbuta' className='contain-link'><img src={link02} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopUpContulmo} alt='monumento-contulmo' className='contain-link'><img src={link03} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopUpRayen} alt='salto-rayen' className='contain-link'><img src={link04} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopUpTuneles} alt='tuneles' className='contain-link'><img src={link05} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopUpMuseoMapuche} alt='museo-mapuche' className='contain-link'><img src={link06} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopUpCasasPatrimoniales} alt='casas-patrimoniales' className='contain-link'><img src={link07} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopUpDungunwe} alt='dungunwe' className='contain-link'><img src={link08} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopUpLanalhue} alt='lago-lanalhue' className='contain-link'><img src={link09} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopUpElena} alt='santa-elena' className='contain-link'><img src={link10} width='100%' height='100%' alt='' /></div>
        </div>
      </React.Fragment>
    )
  }
}

export default SectionAtractivos
