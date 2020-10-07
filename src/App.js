import React from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './assets/img/logo.png'
import fixedButton from './assets/img/consultas.png'
import fixedButtonMobile from './assets/img/consultas_small.png'
import fixedCallMobile from './assets/img/llamadas_small.png'
import ubicacion from './assets/img/ubicacion.png'
import facebook from './assets/img/facebook.png'
import instagram from './assets/img/instagram.png'
import confianza from './assets/confianza-turistica.png'
import turistico from './assets/servicio-turistico.png'
import whatsapp from './assets/img/whatsapp.png'
import SectionHome from './SectionHome'
import SectionCabanas from './SectionCabanas'
import SectionAtractivos from './SectionAtractivos'
import SectionPromociones from './SectionPromociones'
import SectionFaq from './SectionFaq'
import SectionProtocolo from './SectionProtocolo'
import './App.css'

class Info extends React.Component {
  render () {
    return (
      <div className='popup'>
        <div className='popup_inner'>
          <div className='text-up-info'>
            <div className='button-close-info' onClick={this.props.closePopup}>x</div>
            <img className='brand' alt='logotipo' src={logo} />
            <h5>Estimados Visitantes:</h5>
            <p>Informamos que nuestras cabañas se encuentran temporalmente cerradas desde mediados de marzo producto de las medidas sanitarias implementadas por las autoridades, así como una decisión de contribuir al control de la propagación del coronavirus.</p>
            <p>Esperamos que la difícil situación que enfrenta el país mejore para que en el menor tiempo posible puedas venir a disfrutar de nuestras instalaciones, del hermoso Lago Lanalhue y sus alrededores.</p>
            <p>Mientras tanto seguiremos trabajando en las manutenciones de las cabañas y jardines, así como en la implementación de protocolos de prevención y sanitización para una reapertura segura.</p>
            <p>Por el momento, solo realizaremos reservas desde el 01 de septiembre de 2020.</p>
            <p>Para mayor información escríbenos a cualquiera de nuestros contactos.</p>
            <p>Saludos Cordiales</p>
            <p>Administración</p>
            <h6>Cabañas Condominio Chan Chan</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleSectionHome = this.handleSectionHome.bind(this)
    this.handleSectionCabanas = this.handleSectionCabanas.bind(this)
    this.handleSectionAtractivos = this.handleSectionAtractivos.bind(this)
    this.handleSectionPromociones = this.handleSectionPromociones.bind(this)
    this.handleSectionFaq = this.handleSectionFaq.bind(this)
    this.handleSectionProtocolo = this.handleSectionProtocolo.bind(this)
    this.state = {
      sectionActive: 1,
      showPopup: false
    }
  }
  handleSectionHome () {
    this.setState({ sectionActive: 1 })
  }
  handleSectionCabanas () {
    this.setState({ sectionActive: 2 })
  }
  handleSectionAtractivos () {
    this.setState({ sectionActive: 3 })
  }
  handleSectionPromociones () {
    this.setState({ sectionActive: 4 })
  }
  handleSectionFaq () {
    this.setState({ sectionActive: 5 })
  }
  handleSectionProtocolo () {
    this.setState({ sectionActive: 6 })
  }
  togglePopup () {
    this.setState({
      showPopup: !this.state.showPopup
    })
  }

  render () {
  // Select the different section to show in the report
    const sectionActive = this.state.sectionActive
    let report
    if (sectionActive === 1) {
      report = <SectionHome cabanas={this.handleSectionCabanas} atractivos={this.handleSectionAtractivos} />
    } else if (sectionActive === 2) {
      report = <SectionCabanas />
    } else if (sectionActive === 3) {
      report = <SectionAtractivos />
    } else if (sectionActive === 4) {
      report = <SectionPromociones />
    } else if (sectionActive === 5) {
      report = <SectionFaq />
    } else if (sectionActive === 6) {
      report = <SectionProtocolo />
    } else {
      console.log('nO DEBERIA nunca llegar aqui!!')
    }
    // pop-up information
    const informationActive = this.state.showPopup
    let lightboxInformation
    if (informationActive === true) {
      lightboxInformation = <Info closePopup={this.togglePopup.bind(this)} />
    }
    return (
      <div className='App'>
        {lightboxInformation}
        <a className='fixed-button-desktop' href='https://api.whatsapp.com/send?phone=56954005083&text=Hola,%20Me%20Gustaría%20tener%20información%20de%20Condominio%20Chan%20Chan'><img src={fixedButton} width='127' height='146' alt='consultas' /></a>
        <a className='fixed-button-mobile' href='https://api.whatsapp.com/send?phone=56954005083&text=Hola,%20Me%20Gustaría%20tener%20información%20de%20Condominio%20Chan%20Chan'><img src={fixedButtonMobile} width='55' height='45' alt='consultas' /></a>
        <a className='fixed-call-mobile' href='tel:56954005083'><img src={fixedCallMobile} width='34' height='34' alt='llamadas' /></a>
        <Navbar className='navbar' expand='lg'>
          <Navbar.Brand onClick={this.handleSectionHome}>
            <img className='brand' alt='logotipo' src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link onClick={this.handleSectionCabanas}>Cabañas</Nav.Link>
              <Nav.Link onClick={this.handleSectionAtractivos}>Atractivos Turisticos</Nav.Link>
              <Nav.Link onClick={this.handleSectionPromociones}>Promociones</Nav.Link>
              <Nav.Link onClick={this.handleSectionFaq}>FAQ</Nav.Link>
              <Nav.Link onClick={this.handleSectionProtocolo}>Protocolo COVID-19</Nav.Link>
              <Nav.Link href='http://condominiochanchan.com/reglamento2020-2021.pdf' target='_blank' rel='noopener noreferrer'>Descarga Reglamento</Nav.Link>
            </Nav>
            <Form inline>
              <a onClick={this.handleSectionHome} href='#maps' className='iconos'><img src={ubicacion} width='23'height='23' alt='ubicacion' /></a>
              <a href='https://www.facebook.com/condominiochanchan/' target='blanck' className='iconos'><img
                src={facebook} width='23' height='23' alt='facebook' /></a>
              <a href='https://www.instagram.com/condominiochanchan/' target='blanck' className='iconos'>
                <img src={instagram} width='23' height='23' alt='instagram' /></a>
              <a href='https://api.whatsapp.com/send?phone=56954005083&text=Hola,%20Me%20Gustaría%20tener%20información%20de%20Condominio%20Chan%20Chan' className='iconos'><img src={whatsapp} width='23'height='23' alt='whatsapp' /></a>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className='extra-publicidad' onClick={this.handleSectionPromociones}>
          <p className='contact-email-publicidad'> Revisa Nuestras PROMOCIONES + Info: contacto@condominiochanchan.com</p>
        </div>
        {report}
        <footer>
          <img src={confianza} className='turistica-image' alt='confianza' />
          <img src={turistico} className='turistica-image' alt='turistico' />
          <div className='button' onClick={this.handleSectionPromociones} >Promoción de Temporada 2020 - 2021 </div>
          <a href='mailto:contacto@condominiochanchan.com?subject=Consulta%20CondominioChanChan&body=Hola%20me%20gustaria%20tener%20información,' className='contact-email'>contacto@condominiochanchan.com</a>
          <div> +56954005083</div>
          <a href='https://api.whatsapp.com/send?phone=56954005083&text=Hola,%20Me%20Gustaría%20tener%20información%20de%20Condominio%20Chan%20Chan' className='iconos'><img src={whatsapp} width='23'height='23' alt='whatsapp' /></a>
        </footer>
      </div>
    )
  }
}
