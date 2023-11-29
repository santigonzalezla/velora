import style from "./ArtistApp.module.css";

const Scheduler = ({ datosScheduler }) =>
{
    return (
        <section className={style.Dates}>
            <h5>Esta semana</h5>
            {datosScheduler.map((date, index) => (
                <div className={style.itemsDates}>
                    <p>{date.type} con {date.user} - {date.time}</p>
                    <span>{date.link}</span>
                </div>
            ))}
        </section>
    );
}

export default Scheduler;