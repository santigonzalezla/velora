import style from "./ArtistApp.module.css";
import {useEffect, useState} from "react";

const SalesReport = ({ packages }) =>
{
    const [totalSales, setTotalSales] = useState(0);
    const [bestSellers, setBestSellers] = useState([]);
    const [mostSoldPackage, setMostSoldPackage] = useState(null);

    useEffect(() => {
        const total = packages.reduce((acc, packageItem) => acc + packageItem.sales, 0);
        setTotalSales(total);

        const sortedPackages = [...packages].sort((a, b) => b.sales - a.sales);

        const top4Packages = sortedPackages.slice(0, 4);

        setBestSellers(top4Packages);

        const mostSold = sortedPackages[0];
        setMostSoldPackage(mostSold);
    }, [packages]);

    return (
        <>
            <section className={style.salesReport}>
                <div className={style.salesReportBalance}>
                    <p className={style.HooveredCardTitle}>paquetes vendidos</p>
                    <h3 className={style.HooveredCardValue}>{totalSales} USD</h3>
                    <p className={style.HooveredCardPercentage}>
                        <span>{mostSoldPackage && mostSoldPackage.percentage}</span> mes anterior
                    </p>
                </div>
                <div className={style.bestSalers}>
                    <p>más vendidos</p>
                    <div className={style.bestSalersItems}>
                        {bestSellers.map((packageItem, index) => (
                            <p key={index}>{packageItem.name}</p>
                        ))}
                    </div>
                </div>
            </section>
            <section className={style.salesReport}>
                {/* Mapear sobre los 3 paquetes más vendidos */}
                {bestSellers.slice(0, 3).map((packageItem, index) => (
                    <div className={style.salesReportBalance} key={index}>
                        <p className={style.HooveredCardTitle}>{packageItem.name}</p>
                        <h3 className={style.HooveredCardValue}>{packageItem.sales}</h3>
                        <p className={style.HooveredCardPercentage}>
                            <span>{packageItem.percentage}</span> mes anterior
                        </p>
                    </div>
                ))}
            </section>
        </>
    );
}

export default SalesReport;