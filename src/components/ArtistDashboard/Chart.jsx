import style from "./ArtistApp.module.css";
import Grafic from "../../assets/img/ArtistApp/ArtistDashboard/grafic.png";

const Chart = ({ chartVariables }) =>
{
    return (
        <div className={style.Balance}>
            <div className={style.BalanceChart}>
                <img src={Grafic} alt="" width="100%"/>
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