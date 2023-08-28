import Styles from "./index.module.css";
import useCount from "../../hooks/useCount";

function BoxTimer() {
  const [days, hours, minutes, seconds] = useCount("August 31, 2023 00:00:00");

  return (
    <div className={Styles.contador}>
      <div>
        <p>{days}</p>
        <p>Dias</p>
      </div>
      <div>
        <p>{hours}</p>
        <p>Horas</p>
      </div>
      <div>
        <p>{minutes}</p>
        <p>Minutos</p>
      </div>
      <div>
        <p>{seconds}</p>
        <p>Segundos</p>
      </div>
    </div>
  );
}

export default BoxTimer;
