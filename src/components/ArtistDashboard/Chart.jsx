import style from "./ArtistApp.module.css";
import Grafic from "../../assets/img/ArtistApp/ArtistDashboard/grafic.png";
import Example from "./Graphic.jsx";

const Chart = ({ chartVariables }) =>
{
    return (
        <div className={style.Balance}>
            <div className={style.BalanceChart}>
                <Example />
            </div>
            <div className={style.BalanceInfo}>
                {chartVariables.map((variable, index) => (
                    <div className={style.BalanceInfoItem}>
                        <span>{variable.name}</span>
                        <div className={style.BalanceInfoItemPrice}>
                            <div className={style.BalanceInfoItemCircle}></div>
                            <span>{variable.value} USD</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chart;