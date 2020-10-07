import React from 'react'
import './App.css'

class SectionFaq extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='faq-div' />
        <div className='faq-section'>
          <div className='contenedor-faq'>
            <h4>Preguntas Frecuentes</h4>
            <b>¿Hay servicio de internet (wifi) en las cabañas?</b>
            <p>R: Nuestras cabañas no cuentan con Wi Fi, ya que en la zona no existe factibilidad para entregar este servicio.</p>
            <hr />
            <b>¿Hay cobertura de celular e internet móvil en las cabañas?</b>
            <p>R: Existe cobertura para móviles con señal Entel y Claro. Otras compañías como Movistar poseen cobertura intermitente.</p>
            <hr />
            <b>¿El lago y la playa de las cabañas son aptos para el baño?</b>
            <p>R: La playa del sector es apta para el baño. El lago posee aguas templadas durante el verano.</p>
            <hr />
            <b>¿Las cabañas tienen acceso al lago?</b>
            <p>R: Sí, nuestras cabañas poseen acceso al lago y están ubicadas a pocos metros de la playa, con terreno plano y de fácil acceso.</p>
            <hr />
            <b>¿Se pueden traer lanchas o motos acuáticas?</b>
            <p>Como política interna de nuestras cabañas se restringe el ingreso de vehículos acuáticos motorizados como una medida de protección al medio ambiente (agua y fauna del lago) y a la tranquilidad de nuestros huéspedes. Solo se permite el ingreso de embarcaciones como kayaks, botes u otros sin motor.</p>
          </div>
          <div className='contenedor-faq'>
            <b>¿A cuanta distancia y/o tiempo se encuentran las cabañas de un centro urbano?</b>
            <p>R: A 11 Km (10 minutos) se ubica la Comuna de Contulmo, donde encontrarán pequeños supermercados y almacenes, restaurantes, hospital, servicentro y un cajero automático.</p>
            <p>A 23 km (25 minutos) se ubica la Comuna de Cañete, donde encontrarán supermercados, farmacias, mercado, tiendas, restaurantes, bancos, etc. </p>
            <p>Para compras de cosas básicas se encuentran almacenes a 4 km (menos de 5 minutos).</p>
            <hr />
            <b>¿Se permiten mascotas?</b>
            <p>R: Sí se aceptan bajo petición, de preferencia razas pequeñas.</p>
            <hr />
            <b>¿Se pueden instalar equipos de música en las cabañas?</b>
            <p>R: Está prohibido la instalación de equipos en las terrazas de las cabañas, así como escuchar música con volumen alto. Recuerde que usted está compartiendo este lugar con otros huéspedes y vecinos del sector.</p>
            <hr />
            <b>¿El agua de las cabañas es potable?</b>
            <p>R. El agua es obtenida de vertiente (clorada). Si no está acostumbrado(a) es recomendable beber agua embotellada.</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SectionFaq
