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
import whatsapp from './assets/img/whatsapp.png'
import SectionHome from './SectionHome'
import SectionCabanas from './SectionCabanas'
import SectionAtractivos from './SectionAtractivos'
import SectionPromociones from './SectionPromociones'
import SectionFaq from './SectionFaq'
import './App.css'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.handleSectionHome = this.handleSectionHome.bind(this)
    this.handleSectionCabanas = this.handleSectionCabanas.bind(this)
    this.handleSectionAtractivos = this.handleSectionAtractivos.bind(this)
    this.handleSectionPromociones = this.handleSectionPromociones.bind(this)
    this.handleSectionFaq = this.handleSectionFaq.bind(this)
    this.state = {
      sectionActive: 1
    }
  }
  handleSectionHome () {
    this.setState({ sectionActive: 1 })
  }
  handleSectionCabanas () {
    this.setState({ sectionActive: 2 })
    console.log('aqui trabajo')
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

  render () {
  // Select the different section to show in the report
    const sectionActive = this.state.sectionActive
    let report
    if (sectionActive === 1) {
      report = <SectionHome />
    } else if (sectionActive === 2) {
      report = <SectionCabanas />
    } else if (sectionActive === 3) {
      report = <SectionAtractivos />
    } else if (sectionActive === 4) {
      report = <SectionPromociones />
    } else if (sectionActive === 5) {
      report = <SectionFaq />
    } else {
      console.log('nO DEBERIA nunca llegar aqui!!')
    }
    return (
      <div className='App'>
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
              <Nav.Link href='#link'>Descarga Reglamento</Nav.Link>
            </Nav>
            <Form inline>
              <a href='#link' className='iconos'><img src={ubicacion} width='23'height='23' alt='ubicacion' /></a>
              <a href='https://www.facebook.com/condominiochanchan/' target='blanck' className='iconos'><img
                src={facebook} width='23' height='23' alt='facebook' /></a>
              <a href='https://www.instagram.com/condominiochanchan/' target='blanck' className='iconos'>
                <img src={instagram} width='23' height='23' alt='instagram' /></a>
              <a href='https://api.whatsapp.com/send?phone=56954005083&text=Hola,%20Me%20Gustaría%20tener%20información%20de%20Condominio%20Chan%20Chan' className='iconos'><img src={whatsapp} width='23'height='23' alt='whatsapp' /></a>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {report}
        <footer>
          <div>- Promoción de Temporada 2020 </div>
          <a href='mailto:contacto@condominiochanchan.com?subject=Consulta%20CondominioChanChan&body=Hola%20me%20gustaria%20tener%20información,' className='contact-email'> - contacto@condominiochanchan.com </a>
          <div> +56 9 5400 5083</div>
          <a href='https://api.whatsapp.com/send?phone=56954005083&text=Hola,%20Me%20Gustaría%20tener%20información%20de%20Condominio%20Chan%20Chan' className='iconos'><img src={whatsapp} width='23'height='23' alt='whatsapp' /></a>
        </footer>
      </div>
    )
  }
}
