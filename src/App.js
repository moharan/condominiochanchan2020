import React from 'react'
import { Navbar, Nav, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './assets/img/logo.png'
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
              <a href='#link' class='iconos'><img src={ubicacion} width='23'height='23' alt='ubicacion' /></a>
              <a href='https://www.facebook.com/condominiochanchan/' target='blanck' class='iconos'><img
                src={facebook} width='23' height='23' alt='facebook' /></a>
              <a href='https://www.instagram.com/condominiochanchan/' target='blanck' class='iconos'>
                <img src={instagram} width='23' height='23' alt='instagram' /></a>
              <a href='#link' class='iconos'><img src={whatsapp} width='23'height='23' alt='whatsapp' /></a>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {report}
        <footer>
          <p>footer</p>
        </footer>
      </div>
    )
  }
}
