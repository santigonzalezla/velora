import { useState } from 'react';
import style from './ArtistApp.module.css'

function Caledar() {
  const diasSemana = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const mesesAnio = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  const fechaActual = new Date();
  const [mes, setMes] = useState(fechaActual.getMonth());
  const [ano, setAno] = useState(fechaActual.getFullYear());

  const primerDiaMes = new Date(ano, mes, 1).getDay();
  const ultimoDiaMes = new Date(ano, mes + 1, 0).getDate();

  const cambiarMes = (n) => {
    let nuevoMes = mes + n;
    let nuevoAno = ano;
    if (nuevoMes > 11) {
      nuevoMes = 0;
      nuevoAno++;
    } else if (nuevoMes < 0) {
      nuevoMes = 11;
      nuevoAno--;
    }
    setMes(nuevoMes);
    setAno(nuevoAno);
  };

  const [inicioReserva, setInicioReserva] = useState(null);
  const [finReserva, setFinReserva] = useState(null);

  return (
    <div className={style.calendario}>
      <div className={style.encabezado}>
        <button id={style.Select} onClick={() => cambiarMes(-1)}>&lt;</button>
        <h5>{mesesAnio[mes]} {ano}</h5>
        <button id={style.Select} onClick={() => cambiarMes(1)}>&gt;</button>
      </div>
      <div className={style.diasYSemana}>
        {diasSemana.map((dia, index) => (
          <div key={index}>{dia}</div>
        ))}
      </div>
      <div className={style.dias}>
        {[...Array(primerDiaMes).keys()].map((dia) => (
          <div key={dia}></div>
        ))}
        {[...Array(ultimoDiaMes).keys()].map((dia) => {
          const diaActual = dia + 1;
          const esDiaInicio = inicioReserva && inicioReserva.getDate() === diaActual;
          const esDiaFin = finReserva && finReserva.getDate() === diaActual;
          const esDentroDeReserva = inicioReserva && finReserva && diaActual > inicioReserva.getDate() && diaActual < finReserva.getDate();

          const diaClase = esDiaInicio ? style.diaInicio : esDiaFin ? style.diaFin : esDentroDeReserva ? style.diaReserva : style.diaMorado;

          return (
            <div key={diaActual} className={diaClase} onClick={() => {
              if (!inicioReserva) {
                setInicioReserva(new Date(ano, mes, diaActual));
              } else if (!finReserva) {
                setFinReserva(new Date(ano, mes, diaActual));
              } else {
                setInicioReserva(new Date(ano, mes, diaActual));
                setFinReserva(null);
              }
            }}>
              {diaActual}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Caledar;
