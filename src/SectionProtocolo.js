import React from 'react'
import './App.css'

class SectionFaq extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className='protocolo-div' />
        <div className='faq-protocolo'>
          <div className='contenedor-protocolo'>
            <h4>Protocolos Covid-19</h4>
            <b>Reserva</b>
            <p>1.- Para quien realice la reserva deberá entregar los siguientes datos, para sí evitar ser llenado en la llegada (check in):</p>
            <p>Nombre y Apellidos</p>
            <p>Rut</p>
            <p>Dirección</p>
            <p>Comuna y País de Residencia</p>
            <p>Número de Celular</p>
            <p>Correo Electrónico</p>
            <p>Número de acompañantes adultos</p>
            <p>Número de acompañantes niños</p>
            <p>2.- En caso de no poder asistir por algún motivo relacionado al Covid-19 u otro, las
políticas de cancelación son las siguientes: entre 30 y 10 días antes de la llegada tiene
una penalidad del 50% de la reserva y menos de 9 días el 100% de la reserva.
Promociones no tienen devolución de reserva.</p>
          </div>
          <div className='contenedor-protocolo'>
            <b>Registro Llegada (Check In)</b>
            <p>1. Los turistas (mayores de 18 años) deberán llenar una declaración de salud <a className='link-protocolo' href='http://condominiochanchan.com/DeclaracionJuradaSalud.pdf' target='_blank' rel='noopener noreferrer'>(Descarga Aquí)</a> por medio de un cuestionario, la que deberá ser entregada a su llegada.</p>
            <p>2. Se medirá la temperatura de los turistas con termómetro infrarrojo y/o revisión visual
de su estado de salud.</p>
            <p>3. Solo la persona que realizó la reserva deberá firmar el registro y hacer el pago del
saldo de la reserva. De preferencia realizar pago con tarjetas bancarias o transferencia
electrónica.</p>
            <p>4. Antes de firmar o hacer uso del POS se proveerá de alcohol gel para desinfección de
manos.</p>
            <p>5. Se debe utilizar mascarilla al entrar a la recepción y mantener el distanciamiento de al
menos un metro.</p>
            <b>Estadía</b>
            <p>1. Al mínimo síntoma respiratorio de sospecha de infección (tos, fiebre, sensación de
falta de aire o alguno de los síntomas asociado a la enfermedad del Covid-19), hay que
activar los protocolos establecidos por la autoridad sanitaria, y deberá la persona
afectada dirigirse a un establecimiento de salud para que verifiquen su condición.</p>
            <p>2. Se debe mantener el distanciamiento social con pasajeros de otras cabañas y/o
trabajadores. En espacios comunes, como el sector de la playa, las sillas reposeras se
mantendrán separadas y se desinfectarán periódicamente. No se proveerá de
colchonetas.</p>
            <p>3. Si se requiere información turística se realizará por medios electrónicos
preferencialmente, para evitar la manipulación de folletos, tarjetas, etc.</p>
            <p>4. En el sector de Basureros y Reciclaje se proveerá de alcohol gel para desinfectar
manos.</p>
            <p>5. Los servicios de aseos gratuitos (en caso de que corresponda) o a pagos se realizan sin
personas en su interior.</p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default SectionFaq
