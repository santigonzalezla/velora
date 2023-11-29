import style from './ArtistApp.module.css';
import {Card} from "react-bootstrap";

const CampaingCard = ({ campaings }) =>
{
    return (
        <Card className={style.HooveredCard}>
            <Card.Title className={style.HooveredCardTitle}>
                <div>
                    <h3>Campañas Publicitarias</h3>
                    <span>Campañas de prueba</span>
                </div>
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00192 18.5163C7.90592 18.6053 7.74993 18.5372 7.74993 18.4063V17.4375V8.97828C7.74993 8.94299 7.73748 8.90883 7.71478 8.8818L1.84368 1.89239L0.855322 0.813841C0.767153 0.717625 0.835407 0.5625 0.965912 0.5625H18.6754C18.8033 0.5625 18.8725 0.71229 18.7896 0.8097L17.8749 1.8848L12.2828 8.87496C12.2615 8.90156 12.2499 8.9346 12.2499 8.96866V14.5113C12.2499 14.553 12.2325 14.5929 12.2019 14.6212L8.00192 18.5163ZM8.87493 16.2784C8.87493 16.2972 8.89021 16.3125 8.90906 16.3125C8.91811 16.3125 8.92679 16.3089 8.93319 16.3025L11.081 14.1547C11.1091 14.1266 11.1249 14.0884 11.1249 14.0486V8.57407C11.1249 8.54001 11.1365 8.50696 11.1578 8.48037L16.3971 1.9312C16.4757 1.83299 16.4058 1.6875 16.28 1.6875H3.46283C3.33538 1.6875 3.266 1.83639 3.34798 1.93398L8.83978 8.47202C8.86248 8.49904 8.87493 8.53321 8.87493 8.5685V16.2784Z" fill="#373B56"/>
                </svg>
            </Card.Title>
            {campaings.map((campaing, index) => (
                <Card.Text key={index} className={style.HooveredCardValue}>
                    <span>{campaing.title}</span>
                    <div className={style.HooveredCardMoney}>
                        <span>{campaing.value}</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 15.5C12.1421 15.5 15.5 12.1421 15.5 8C15.5 3.85786 12.1421 0.5 8 0.5C3.85786 0.5 0.5 3.85786 0.5 8C0.5 12.1421 3.85786 15.5 8 15.5Z" stroke="#373B56" stroke-width="0.779997" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.74471 10.831C5.95437 11.0956 6.22449 11.306 6.53235 11.4446C6.84022 11.5831 7.17685 11.6457 7.51394 11.6271H8.57548C9.04471 11.6271 9.49472 11.4407 9.82652 11.109C10.1583 10.7772 10.3447 10.3271 10.3447 9.85792C10.3447 9.38869 10.1583 8.93868 9.82652 8.60688C9.49472 8.27509 9.04471 8.08869 8.57548 8.08869H7.42548C6.95625 8.08869 6.50624 7.90229 6.17445 7.57049C5.84265 7.2387 5.65625 6.78869 5.65625 6.31946C5.65625 5.85023 5.84265 5.40022 6.17445 5.06842C6.50624 4.73663 6.95625 4.55023 7.42548 4.55023H8.48702C9.28317 4.55023 9.81394 4.72715 10.2562 5.34638M7.95625 3.57715V12.4233" stroke="#373B56" stroke-width="0.623998" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                    <span>{campaing.percentage}</span>
                </Card.Text>
            ))}
        </Card>
    );
}

export default CampaingCard;