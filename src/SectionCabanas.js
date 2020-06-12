import React from 'react'
import { Carousel } from 'react-bootstrap'
import './App.css'
import slide01 from './assets/cabañas-slide/cabanas01.jpg'
import slide02 from './assets/cabañas-slide/cabanas02.jpg'
import slide03 from './assets/cabañas-slide/cabanas03.jpg'
import slide04 from './assets/cabañas-slide/cabanas04.jpg'
import link01 from './assets/link/01_cabanas.jpg'
import link02 from './assets/link/02_cabanas.jpg'
import link03 from './assets/link/03_cabanas.jpg'
import link04 from './assets/link/04_cabanas.jpg'
import link05 from './assets/link/05_cabanas.jpg'
import link06 from './assets/link/06_cabanas.jpg'
import exteriores from './assets/servicios/exteriores.png'
import actividades from './assets/servicios/actividades.png'
import cabanas from './assets/servicios/cabanas.png'
import limpieza from './assets/servicios/limpieza.png'
import mascotas from './assets/servicios/mascotas.png'
import pago from './assets/servicios/pago.png'
import sostenibles from './assets/servicios/sostenibles.png'
import tienda from './assets/servicios/tienda.png'
/* lightbox */
import PopUpAvellano from './lightbox/PopUpAvellano'
import PopUpEncinos from './lightbox/PopUpEncinos'
import PopUpCipreses from './lightbox/PopUpCipreses'

class SectionCabanas extends React.Component {
  constructor (props) {
    super(props)
    this.togglePopupAvellano = this.togglePopupAvellano.bind(this)
    this.togglePopupEncinos = this.togglePopupEncinos.bind(this)
    this.togglePopupCipreses = this.togglePopupCipreses.bind(this)
    this.state = {
      showPopupAvellano: false,
      showPopupEncinos: false,
      showPopupCipreses: false
    }
  }

  togglePopupAvellano () {
    this.setState({
      showPopupAvellano: !this.state.showPopupAvellano
    })
  }

  togglePopupEncinos () {
    this.setState({
      showPopupEncinos: !this.state.showPopupEncinos
    })
  }

  togglePopupCipreses () {
    this.setState({
      showPopupCipreses: !this.state.showPopupCipreses
    })
  }
  render () {
    // pop-up information
    const showPopupAvellano = this.state.showPopupAvellano
    const showPopupEncinos = this.state.showPopupEncinos
    const showPopupCipreses = this.state.showPopupCipreses
    let lightboxAvellano
    let lightboxEncinos
    let lightboxCipreses
    if (showPopupAvellano === true) {
      lightboxAvellano = <PopUpAvellano closePopup={this.togglePopupAvellano} />
    }
    if (showPopupEncinos === true) {
      lightboxEncinos = <PopUpEncinos closePopup={this.togglePopupEncinos} />
    }
    if (showPopupCipreses === true) {
      lightboxCipreses = <PopUpCipreses closePopup={this.togglePopupCipreses} />
    }
    return (
      <React.Fragment>
        {lightboxAvellano}
        {lightboxEncinos}
        {lightboxCipreses}
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide01}
              alt='slide01'
            />
            <Carousel.Caption>
              <h4 className='text-carrousel'>El Lago Lanalhue, uno de los principales destinos turísticos de la Región del Bio Bio, se encuentra ubicado entre la Cordillera de Nahuelbuta y el mar.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide02}
              alt='slide02'
            />
            <Carousel.Caption>
              <h4 className='text-carrousel'>Sus aguas son aptas para el baño y para la práctica de deportes náuticos.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide03}
              alt='slide03'
            />
            <Carousel.Caption>
              <h4 className='text-carrousel'>Su entorno natural está dominado por bosques nativos y plantaciones y por una rica avifauna que habita en el lugar.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide04}
              alt='slide04'
            />
            <Carousel.Caption>
              <h4 className='text-carrousel'>En los alrededores hay distintos panoramas para realizar como visita al Parque Nacional Nahuelbuta y a la famosa Piedra del Águila, Monumento Natural de Contulmo, Museo Mapuche, entre otros; o participar de las numerosas actividades y ferias costumbristas que se desarrollan en las Comunas de Contulmo y Cañete.</h4>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='service-section'>
          <div className='contenedor-servicios'>
            <img src={exteriores} alt='exteriores' />
            <p className='titulo-servicios'>Exteriores</p>
            <p>- Acceso al Lago</p>
            <p>- Playa</p>
            <p>- Jardines</p>
            <p>- Zona Fogón</p>
            <p>- Zona Juegos</p>
          </div>
          <div className='contenedor-servicios'>
            <img src={actividades} alt='actividades' />
            <p className='titulo-servicios'>Actividades</p>
            <p>- Arriendo Hot Tubs (Tinaja agua caliente)</p>
            <p>- Arriendo Kayaks</p>
            <p>- Playa</p>
            <p>- Jardines</p>
            <p>- Fogón</p>
            <p>- Zona Juegos</p>
          </div>
          <div className='contenedor-servicios'>
            <img src={cabanas} alt='cabanas' />
            <p className='titulo-servicios'>Cabañas</p>
            <p>- Ropa de Cama</p>
            <p>- Toallas de Baño</p>
            <p>- TV satelital</p>
            <p>- Cocina Equipada</p>
            <p>- Parrilla</p>
            <p>- Calefacción (leña)</p>
            <p>- Secador de Pelo</p>
          </div>
          <div className='contenedor-servicios'>
            <img src={sostenibles} alt='practicas sostenibles' />
            <p className='titulo-servicios'>Prácticas Sostenibles</p>
            <p>- Punto Limpio (reciclaje)</p>
            <p>- Compostaje Desechos Vegetales</p>
            <p>- Restricción Vehículos Acuáticos Motorizados</p>
            <p>- Prohibición Fumar en Interiores</p>
          </div>
          <div className='contenedor-servicios'>
            <img src={limpieza} alt='servicios de limpieza' />
            <p className='titulo-servicios'>Servicios de limpieza</p>
            <p>- Lavandería (gratuito)</p>
            <p>- Aseo Gratuito (estadías > 5 días)</p>
          </div>
          <div className='contenedor-servicios'>
            <img src={mascotas} alt='mascotas' />
            <p className='titulo-servicios'>Mascotas</p>
            <p>- Se admiten gratis (bajo petición)</p>
          </div>
          <div className='contenedor-servicios'>
            <img src={pago} alt='medios de pago' />
            <p className='titulo-servicios'>Mascotas</p>
            <p>- Efectivo (moneda local)</p>
            <p>- Tarjetas Bancarias (débito/crédito)</p>
            <p>- Webpay</p>
            <p>- Reintegro IVA Turistas Extranjeros</p>
          </div>
          <div className='contenedor-servicios'>
            <img src={tienda} alt='tienda' />
            <p className='titulo-servicios'>Tienda</p>
            <p>- Venta Souvenirs Artesanía Local</p>
          </div>
        </div>
        <div className='links'>
          <div onClick={this.togglePopupAvellano} alt='El Avellano' className='contain-link'><img src={link01} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopupEncinos} alt='Los Encinos' className='contain-link'><img src={link02} width='100%' height='100%' alt='' /></div>
          <div onClick={this.togglePopupCipreses} alt='Los Cipreses' className='contain-link'><img src={link03} width='100%' height='100%' alt='' /></div>
          <div alt='El Castaño' className='contain-link'><img src={link04} width='100%' height='100%' alt='' /></div>
          <div alt='Exterior Cabañas' className='contain-link'><img src={link05} width='100%' height='100%' alt='' /></div>
          <div alt='Hot Tubs' className='contain-link'><img src={link06} width='100%' height='100%' alt='' /></div>
        </div>
      </React.Fragment>
    )
  }
}

export default SectionCabanas
