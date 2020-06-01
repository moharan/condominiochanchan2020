import React from 'react'
import { Carousel } from 'react-bootstrap'
import './App.css'
import slide01 from './assets/home/01.jpg'
import slide02 from './assets/home/02.jpg'
import slide03 from './assets/home/03.jpg'
import slide04 from './assets/home/04.jpg'
import link01 from './assets/link/00_cabanas.jpg'
import link02 from './assets/link/00_turisticos.jpg'
import video from './assets/video/chanchan2019.m4v'
import webpay from './assets/tarifas/webpay.png'
import distancias01 from './assets/distancias/distancias_01.png'
import distancias02 from './assets/distancias/distancias_02.png'
import distancias03 from './assets/distancias/distancias_03.png'

class SectionHome extends React.Component {
  render () {
    const maps = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3147.1561919392266!2d-73.2619368!3d-37.9267814!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x24bf8e6e006f2d95!2sCondomino+chan+chan!5e0!3m2!1ses-419!2scl!4v1497905114066" width="100%" height="400px" frameborder="0" style="border:0" allowfullscreen />'

    function Iframe (props) {
      return (<div dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : '' }} />)
    }
    return (
      <React.Fragment>
        {/* slider */}
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src={slide01}
              alt='slide01'
            />
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
        {/* video - precios */}
        <div className='titulo-secciones'>Video</div>
        <div className='video-section'>
          <video
            className='video'
            controls
            autoPlay
            src={video}
          />
        </div>
        <div className='titulo-secciones02'>Cabañas</div>
        <div className='price-section'>
          <div className='temporadas'>Nuestras Temporadas</div>
          <div className='price-block'>
            <div className='price-title'>Nombre</div>
            <div className='price-title'>Capacidad Máxima</div>
            <div className='price-title active'>Baja</div>
            <div className='price-title disabled'>Media</div>
            <div className='price-title disabled'>Alta</div>
          </div>
          <div className='price-block'>
            <div className='price-element'>El Castaño</div>
            <div className='price-element'>5 *</div>
            <div className='price-element active'>$ 60.000</div>
            <div className='price-element disabled'>$ 75.000</div>
            <div className='price-element disabled'>$ 95.000</div>
          </div>
          <div className='price-block'>
            <div className='price-element'>Los Encinos</div>
            <div className='price-element'>7 *</div>
            <div className='price-element active'>$ 75.000</div>
            <div className='price-element disabled'>$ 90.000</div>
            <div className='price-element disabled'>$ 110.000</div>
          </div>
          <div className='price-block'>
            <div className='price-element'>Los Cipreses</div>
            <div className='price-element'>8</div>
            <div className='price-element active'>$ 85.000</div>
            <div className='price-element disabled'>$ 100.000</div>
            <div className='price-element disabled'>$ 120.000</div>
          </div>
          <div className='price-block'>
            <div className='price-element'>El Avellano</div>
            <div className='price-element'>9</div>
            <div className='price-element active last-active'>$ 90.000</div>
            <div className='price-element disabled'>$ 110.000</div>
            <div className='price-element disabled'>$ 130.000</div>
          </div>
          <div className='text-conditions'>
            <p>- Todos los valores son con IVA incluido (19%).</p>
            <p>- La capacidad de la cabaña incluye adultos y niños.</p>
            <b>(*) Opción de cama supletoria (1 persona adicional) por un recargo de $ 10.000.</b>
          </div>
          <div className='text-conditions'>
            <p>TEMPORADA BAJA: 01 de Mayo al 10 de Septiembre 2020.</p>
            <p>TEMPORADA MEDIA: 11 de Septiembre al 24 de Diciembre 2020. <b>(Arriendo mínimo 3 noches para Fiestas Patrias).</b></p>
            <p>TEMPORADA ALTA: 25 de Diciembre 2020 al 6 de Marzo 2021. <b>(Noche de Año Nuevo posee tarifa especial / Arriendo mínimo 3 noches en Enero y 4 noches en Febrero).</b></p>
          </div>
          <a href='https://www.webpay.cl/portalpagodirecto/pages/institucion.jsf?idEstablecimiento=36745135' target='_blank' rel='noopener noreferrer'>
            <img
              className='webpay-link'
              src={webpay}
              alt='webpay'
            />
          </a>
          <div className='text-conditions'>
            <p><b>Check in:</b> Desde las 15:00 hrs (Temporada Baja y Media) y 15:30 hrs (Temporada Alta)  hasta las 21:00 horas (avisar en caso de llegar posterior a este horario).</p>
            <p><b>Check out:</b> Hasta las 12:00 horas. Late Check out tiene un costo adicional y previa autorización.</p>
            <p><b>Condiciones de Reserva:</b> Depósito, transferencia o pago con tarjetas bancarias a través de Webpay.cl del 50% de la estadía por dos o más noches y 100% por una noche.</p>
            <p><b>Condiciones de Pago:</b> Pago en efectivo, transferencia o tarjetas bancarias de débito/crédito durante el check-in.</p>
            <p><b>Política de Cancelación:</b> Entre 30 y 10 días antes de la llegada tiene una penalidad del 50% de la reserva y menos de 9 días el 100% de la reserva. Promociones no tienen devolución de reserva.</p>
          </div>
        </div>
        <div className='lago-div'>
          <h4 className='mixestilo01'>Las Cabañas Condominio Chan Chan, se encuentran ubicadas en el sur de Chile, a orillas de las templadas aguas del Lago Lanalhue, en medio de un entorno natural de gran belleza, el cual es el escenario perfecto para que pases un tiempo de descanso, tranquilidad y recreación junto a tu familia o amigos.</h4>
          <h5 className='solocolor02'>Lago Lanalhue, Contulmo, Región del Bio Bio</h5>
        </div>
        <div className='links'>
          <a href='#link'><img src={link01} alt='Cabañas' className='contain-link' /></a>
          <a href='#link'><img src={link02} alt='Atractivos Turisticos' className='contain-link' /></a>
        </div>
        <div className='titulo-secciones03'>Mapa</div>
        <div className='maps-div'>
          <Iframe iframe={maps} />
        </div>
        <div className='titulo-secciones04'>Distancia</div>
        <div className='distancias-div'>
          <div><img className='dis01' src={distancias01} alt='distancias01' /></div>
          <div className='distancias02'><img className='dis02' src={distancias02} alt='distancias01' /></div>
          <div><img className='dis03' src={distancias03} alt='distancias01' /></div>
        </div>
      </React.Fragment>
    )
  }
}

export default SectionHome
