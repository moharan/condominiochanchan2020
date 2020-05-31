import React from 'react'
import { Carousel } from 'react-bootstrap'
import './App.css'
import slide01 from './assets/cabañas-slide/cabanas01.jpg'
import slide02 from './assets/cabañas-slide/cabanas02.jpg'
import slide03 from './assets/cabañas-slide/cabanas03.jpg'
import slide04 from './assets/cabañas-slide/cabanas04.jpg'
import exteriores from './assets/servicios/exteriores.png'
import actividades from './assets/servicios/actividades.png'
import cabanas from './assets/servicios/cabanas.png'
import limpieza from './assets/servicios/limpieza.png'
import mascotas from './assets/servicios/mascotas.png'
import pago from './assets/servicios/pago.png'
import sostenibles from './assets/servicios/sostenibles.png'
import tienda from './assets/servicios/tienda.png'

class SectionCabanas extends React.Component {
  render () {
    return (
      <React.Fragment>
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
              <h4>Sus aguas son aptas para el baño y para la práctica de deportes náuticos.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide03}
              alt='slide03'
            />
            <Carousel.Caption>
              <h4>Su entorno natural está dominado por bosques nativos y plantaciones y por una rica avifauna que habita en el lugar.</h4>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide04}
              alt='slide04'
            />
            <Carousel.Caption>
              <h4>En los alrededores hay distintos panoramas para realizar como visita al Parque Nacional Nahuelbuta y a la famosa Piedra del Águila, Monumento Natural de Contulmo, Museo Mapuche, entre otros; o participar de las numerosas actividades y ferias costumbristas que se desarrollan en las Comunas de Contulmo y Cañete.</h4>
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
            <p>- Aseo Gratuito (estadías > 5 días)s</p>
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
      </React.Fragment>
    )
  }
}

export default SectionCabanas
