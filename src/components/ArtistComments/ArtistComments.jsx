import style from './ArtistComments.module.css'
import {Row, Col, Container, Card} from 'react-bootstrap';
import Logo from '../../assets/img/HomeApp/Chats/Logo.png'
import SideBarArtist from '../SideBarArtist/SideBarArtist';


const ArtistComments = () =>
{
    const comments = {
        "user1": [
            {
                name: "user1",
                user: "@usersample1",
                location: "Colombia",
                subscriptions: "52K",
                rating: "4.5",
                houreRate: "50 - 100",
                comments: [
                    {
                        user: "@usersample2",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                    {
                        user: "@usersample3",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                    {
                        user: "@usersample4",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                ]
            }
        ],
        "user2": [
            {
                name: "user2",
                user: "@usersample2",
                location: "Colombia",
                subscriptions: "52K",
                rating: "4.5",
                houreRate: "50 - 100",
                comments: [
                    {
                        user: "@usersample2",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                    {
                        user: "@usersample3",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                    {
                        user: "@usersample4",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                ]
            }
        ],
        "user3": [
            {
                name: "user3",
                user: "@usersample3",
                location: "Colombia",
                subscriptions: "52K",
                rating: "4.5",
                houreRate: "50 - 100",
                comments: [
                    {
                        user: "@usersample2",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                    {
                        user: "@usersample3",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                    {
                        user: "@usersample4",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                ]
            }
        ],
        "user4": [
            {
                name: "user4",
                user: "@usersample4",
                location: "Colombia",
                subscriptions: "52K",
                rating: "4.5",
                houreRate: "50 - 100",
                comments: [
                    {
                        user: "@usersample2",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                    {
                        user: "@usersample3",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                    {
                        user: "@usersample4",
                        location: "Bogota",
                        comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero. Sed euismod, diam sit amet aliquam luctus, nunc nulla aliquet leo, vitae luctus enim nunc in libero.",
                        rating: "4.5"
                    },
                ]
            }
        ],
    }

    return (
        <div id={style.ArtistComments}>
            <SideBarArtist/>
            <div id={style.ContainerArtistComments}>
                <div className={style.rowDashboard}>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <section className={style.Head}>
                            <svg width="35" height="35" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.00192 18.5163C7.90592 18.6053 7.74993 18.5372 7.74993 18.4063V17.4375V8.97828C7.74993 8.94299 7.73748 8.90883 7.71478 8.8818L1.84368 1.89239L0.855322 0.813841C0.767153 0.717625 0.835407 0.5625 0.965912 0.5625H18.6754C18.8033 0.5625 18.8725 0.71229 18.7896 0.8097L17.8749 1.8848L12.2828 8.87496C12.2615 8.90156 12.2499 8.9346 12.2499 8.96866V14.5113C12.2499 14.553 12.2325 14.5929 12.2019 14.6212L8.00192 18.5163ZM8.87493 16.2784C8.87493 16.2972 8.89021 16.3125 8.90906 16.3125C8.91811 16.3125 8.92679 16.3089 8.93319 16.3025L11.081 14.1547C11.1091 14.1266 11.1249 14.0884 11.1249 14.0486V8.57407C11.1249 8.54001 11.1365 8.50696 11.1578 8.48037L16.3971 1.9312C16.4757 1.83299 16.4058 1.6875 16.28 1.6875H3.46283C3.33538 1.6875 3.266 1.83639 3.34798 1.93398L8.83978 8.47202C8.86248 8.49904 8.87493 8.53321 8.87493 8.5685V16.2784Z" fill="#373B56"/>
                            </svg>
                            <div className={style.HeadInput}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.93099 0.524597C2.70932 0.524597 0.0976562 3.13626 0.0976562 6.35793C0.0976562 9.5796 2.70932 12.1913 5.93099 12.1913C7.29849 12.1934 8.6229 11.713 9.67099 10.8346L14.2085 15.3721C14.2569 15.4205 14.3143 15.4588 14.3775 15.485C14.4407 15.5112 14.5084 15.5247 14.5768 15.5247C14.6452 15.5247 14.713 15.5112 14.7762 15.485C14.8394 15.4588 14.8968 15.4205 14.9452 15.3721C14.9935 15.3237 15.0319 15.2663 15.0581 15.2031C15.0843 15.1399 15.0977 15.0722 15.0977 15.0038C15.0977 14.9354 15.0843 14.8676 15.0581 14.8044C15.0319 14.7412 14.9935 14.6838 14.9452 14.6354L10.4077 10.0979C11.2859 9.04977 11.7663 7.72541 11.7643 6.35793C11.7643 3.13626 9.15266 0.524597 5.93099 0.524597ZM1.13932 6.35793C1.13932 3.71168 3.28474 1.56626 5.93099 1.56626C8.57724 1.56626 10.7227 3.71168 10.7227 6.35793C10.7227 9.00418 8.57724 11.1496 5.93099 11.1496C3.28474 11.1496 1.13932 9.00418 1.13932 6.35793Z" fill="#373B56"/>
                                </svg>

                                <input type="text">
                                </input>
                            </div>
                            <img src={Logo} id={style.LogoDashboard}/>
                        </section>
                    </Col>
                </div>
                <div className={style.rowDashboard}>
                    <Col xs="12" sm="12" md="12" lg="12">
                        {Object.keys(comments).map(user => (
                            <section className={style.Comments}>
                                <div key={user} className={style.InnerComments}>
                                    <div className={style.InnerCommentsTop}>
                                        <div className={style.InnerCommentsProfile}>
                                            <div className={style.InnerCommentsImage}>

                                            </div>
                                            <div className={style.InnerCommentsTopName}>
                                                <h5>{comments[user][0].name}</h5>
                                                <p>{comments[user][0].user}</p>
                                            </div>
                                        </div>
                                        <div className={style.InnerCommentsTopLocation}>
                                            <svg width="25" height="25" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.92518 15.4607L8.63958 15.1394C8.46108 14.9609 4.28418 10.0343 4.28418 7.07118C4.28418 4.50078 6.35478 2.43018 8.92518 2.43018C11.4956 2.43018 13.5662 4.50078 13.5662 7.07118C13.5662 10.0343 9.38928 14.9609 9.21078 15.1751L8.92518 15.4607ZM8.92518 3.14418C6.74748 3.14418 4.99818 4.89348 4.99818 7.07118C4.99818 9.35598 7.99698 13.2116 8.92518 14.354C9.85338 13.2116 12.8522 9.35598 12.8522 7.07118C12.8522 4.89348 11.1029 3.14418 8.92518 3.14418Z" fill="#373B56"/>
                                                <path d="M8.92465 8.85613C7.92505 8.85613 7.13965 8.07073 7.13965 7.07113C7.13965 6.07153 7.92505 5.28613 8.92465 5.28613C9.92425 5.28613 10.7096 6.07153 10.7096 7.07113C10.7096 8.07073 9.92425 8.85613 8.92465 8.85613ZM8.92465 6.00013C8.31775 6.00013 7.85365 6.46423 7.85365 7.07113C7.85365 7.67803 8.31775 8.14213 8.92465 8.14213C9.53155 8.14213 9.99565 7.67803 9.99565 7.07113C9.99565 6.46423 9.53155 6.00013 8.92465 6.00013Z" fill="#373B56"/>
                                            </svg>
                                            <span>{comments[user][0].location}</span>
                                        </div>
                                        <div className={style.InnerCommentsTopSubscriptions}>
                                            <p><span>{comments[user][0].subscriptions}</span> subscriptions</p>
                                        </div>
                                        <div className={style.InnerCommentsTopRating}>
                                            <span>{comments[user][0].rating}</span>
                                            <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M11.3923 13.7757C11.2937 13.776 11.1974 13.7453 11.1172 13.6878L7.34935 10.9561L3.58148 13.6878C3.50098 13.7461 3.404 13.7774 3.30456 13.7771C3.20512 13.7767 3.10837 13.7447 3.0283 13.6858C2.94823 13.6268 2.88898 13.5439 2.85913 13.449C2.82928 13.3542 2.83037 13.2523 2.86224 13.1581L4.33178 8.80544L0.523182 6.19362C0.440686 6.13711 0.378422 6.0557 0.345488 5.96129C0.312555 5.86687 0.310678 5.76439 0.340131 5.66884C0.369584 5.57328 0.428824 5.48964 0.509196 5.43014C0.589568 5.37065 0.686859 5.33842 0.786854 5.33815H5.48549L6.90346 0.974385C6.934 0.880173 6.9936 0.798057 7.07371 0.739817C7.15382 0.681578 7.25031 0.650208 7.34935 0.650208C7.44839 0.650208 7.54489 0.681578 7.625 0.739817C7.7051 0.798057 7.76471 0.880173 7.79525 0.974385L9.21322 5.33962H13.9119C14.012 5.33957 14.1095 5.37158 14.1901 5.43096C14.2707 5.49034 14.3302 5.57397 14.3598 5.6696C14.3895 5.76523 14.3877 5.86784 14.3548 5.9624C14.3219 6.05697 14.2596 6.13851 14.177 6.19509L10.3669 8.80544L11.8356 13.1569C11.8594 13.2274 11.8661 13.3025 11.8551 13.376C11.8442 13.4496 11.8158 13.5194 11.7725 13.5799C11.7292 13.6403 11.6722 13.6896 11.6061 13.7237C11.5399 13.7577 11.4667 13.7755 11.3923 13.7757Z" fill="#373B56"/>
                                            </svg>
                                            {comments[user][0].subscriptions} reseñas
                                        </div>
                                        <div className={style.InnerCommentsTopHoureRate}>
                                            <span>Hora $</span>
                                            <p>{comments[user][0].houreRate}</p>
                                        </div>
                                    </div>
                                    {comments[user][0].comments.map(commentInfo => (
                                        <div key={commentInfo.user} className={style.CommentsContainer}>
                                            <p className={style.CommentsContainerRating}>{commentInfo.rating}</p>
                                            <div className={style.CommentsContainerText}>
                                                <div className={style.CommentsContainerStar}>
                                                    <svg width="20" height="20" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.3923 13.7757C11.2937 13.776 11.1974 13.7453 11.1172 13.6878L7.34935 10.9561L3.58148 13.6878C3.50098 13.7461 3.404 13.7774 3.30456 13.7771C3.20512 13.7767 3.10837 13.7447 3.0283 13.6858C2.94823 13.6268 2.88898 13.5439 2.85913 13.449C2.82928 13.3542 2.83037 13.2523 2.86224 13.1581L4.33178 8.80544L0.523182 6.19362C0.440686 6.13711 0.378422 6.0557 0.345488 5.96129C0.312555 5.86687 0.310678 5.76439 0.340131 5.66884C0.369584 5.57328 0.428824 5.48964 0.509196 5.43014C0.589568 5.37065 0.686859 5.33842 0.786854 5.33815H5.48549L6.90346 0.974385C6.934 0.880173 6.9936 0.798057 7.07371 0.739817C7.15382 0.681578 7.25031 0.650208 7.34935 0.650208C7.44839 0.650208 7.54489 0.681578 7.625 0.739817C7.7051 0.798057 7.76471 0.880173 7.79525 0.974385L9.21322 5.33962H13.9119C14.012 5.33957 14.1095 5.37158 14.1901 5.43096C14.2707 5.49034 14.3302 5.57397 14.3598 5.6696C14.3895 5.76523 14.3877 5.86784 14.3548 5.9624C14.3219 6.05697 14.2596 6.13851 14.177 6.19509L10.3669 8.80544L11.8356 13.1569C11.8594 13.2274 11.8661 13.3025 11.8551 13.376C11.8442 13.4496 11.8158 13.5194 11.7725 13.5799C11.7292 13.6403 11.6722 13.6896 11.6061 13.7237C11.5399 13.7577 11.4667 13.7755 11.3923 13.7757Z" fill="#373B56"/>
                                                    </svg>
                                                    <svg width="20" height="20" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.3923 13.7757C11.2937 13.776 11.1974 13.7453 11.1172 13.6878L7.34935 10.9561L3.58148 13.6878C3.50098 13.7461 3.404 13.7774 3.30456 13.7771C3.20512 13.7767 3.10837 13.7447 3.0283 13.6858C2.94823 13.6268 2.88898 13.5439 2.85913 13.449C2.82928 13.3542 2.83037 13.2523 2.86224 13.1581L4.33178 8.80544L0.523182 6.19362C0.440686 6.13711 0.378422 6.0557 0.345488 5.96129C0.312555 5.86687 0.310678 5.76439 0.340131 5.66884C0.369584 5.57328 0.428824 5.48964 0.509196 5.43014C0.589568 5.37065 0.686859 5.33842 0.786854 5.33815H5.48549L6.90346 0.974385C6.934 0.880173 6.9936 0.798057 7.07371 0.739817C7.15382 0.681578 7.25031 0.650208 7.34935 0.650208C7.44839 0.650208 7.54489 0.681578 7.625 0.739817C7.7051 0.798057 7.76471 0.880173 7.79525 0.974385L9.21322 5.33962H13.9119C14.012 5.33957 14.1095 5.37158 14.1901 5.43096C14.2707 5.49034 14.3302 5.57397 14.3598 5.6696C14.3895 5.76523 14.3877 5.86784 14.3548 5.9624C14.3219 6.05697 14.2596 6.13851 14.177 6.19509L10.3669 8.80544L11.8356 13.1569C11.8594 13.2274 11.8661 13.3025 11.8551 13.376C11.8442 13.4496 11.8158 13.5194 11.7725 13.5799C11.7292 13.6403 11.6722 13.6896 11.6061 13.7237C11.5399 13.7577 11.4667 13.7755 11.3923 13.7757Z" fill="#373B56"/>
                                                    </svg>
                                                    <svg width="20" height="20" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.3923 13.7757C11.2937 13.776 11.1974 13.7453 11.1172 13.6878L7.34935 10.9561L3.58148 13.6878C3.50098 13.7461 3.404 13.7774 3.30456 13.7771C3.20512 13.7767 3.10837 13.7447 3.0283 13.6858C2.94823 13.6268 2.88898 13.5439 2.85913 13.449C2.82928 13.3542 2.83037 13.2523 2.86224 13.1581L4.33178 8.80544L0.523182 6.19362C0.440686 6.13711 0.378422 6.0557 0.345488 5.96129C0.312555 5.86687 0.310678 5.76439 0.340131 5.66884C0.369584 5.57328 0.428824 5.48964 0.509196 5.43014C0.589568 5.37065 0.686859 5.33842 0.786854 5.33815H5.48549L6.90346 0.974385C6.934 0.880173 6.9936 0.798057 7.07371 0.739817C7.15382 0.681578 7.25031 0.650208 7.34935 0.650208C7.44839 0.650208 7.54489 0.681578 7.625 0.739817C7.7051 0.798057 7.76471 0.880173 7.79525 0.974385L9.21322 5.33962H13.9119C14.012 5.33957 14.1095 5.37158 14.1901 5.43096C14.2707 5.49034 14.3302 5.57397 14.3598 5.6696C14.3895 5.76523 14.3877 5.86784 14.3548 5.9624C14.3219 6.05697 14.2596 6.13851 14.177 6.19509L10.3669 8.80544L11.8356 13.1569C11.8594 13.2274 11.8661 13.3025 11.8551 13.376C11.8442 13.4496 11.8158 13.5194 11.7725 13.5799C11.7292 13.6403 11.6722 13.6896 11.6061 13.7237C11.5399 13.7577 11.4667 13.7755 11.3923 13.7757Z" fill="#373B56"/>
                                                    </svg>
                                                    <svg width="20" height="20" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.3923 13.7757C11.2937 13.776 11.1974 13.7453 11.1172 13.6878L7.34935 10.9561L3.58148 13.6878C3.50098 13.7461 3.404 13.7774 3.30456 13.7771C3.20512 13.7767 3.10837 13.7447 3.0283 13.6858C2.94823 13.6268 2.88898 13.5439 2.85913 13.449C2.82928 13.3542 2.83037 13.2523 2.86224 13.1581L4.33178 8.80544L0.523182 6.19362C0.440686 6.13711 0.378422 6.0557 0.345488 5.96129C0.312555 5.86687 0.310678 5.76439 0.340131 5.66884C0.369584 5.57328 0.428824 5.48964 0.509196 5.43014C0.589568 5.37065 0.686859 5.33842 0.786854 5.33815H5.48549L6.90346 0.974385C6.934 0.880173 6.9936 0.798057 7.07371 0.739817C7.15382 0.681578 7.25031 0.650208 7.34935 0.650208C7.44839 0.650208 7.54489 0.681578 7.625 0.739817C7.7051 0.798057 7.76471 0.880173 7.79525 0.974385L9.21322 5.33962H13.9119C14.012 5.33957 14.1095 5.37158 14.1901 5.43096C14.2707 5.49034 14.3302 5.57397 14.3598 5.6696C14.3895 5.76523 14.3877 5.86784 14.3548 5.9624C14.3219 6.05697 14.2596 6.13851 14.177 6.19509L10.3669 8.80544L11.8356 13.1569C11.8594 13.2274 11.8661 13.3025 11.8551 13.376C11.8442 13.4496 11.8158 13.5194 11.7725 13.5799C11.7292 13.6403 11.6722 13.6896 11.6061 13.7237C11.5399 13.7577 11.4667 13.7755 11.3923 13.7757Z" fill="#373B56"/>
                                                    </svg>
                                                    <svg width="20" height="20" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.3923 13.7757C11.2937 13.776 11.1974 13.7453 11.1172 13.6878L7.34935 10.9561L3.58148 13.6878C3.50098 13.7461 3.404 13.7774 3.30456 13.7771C3.20512 13.7767 3.10837 13.7447 3.0283 13.6858C2.94823 13.6268 2.88898 13.5439 2.85913 13.449C2.82928 13.3542 2.83037 13.2523 2.86224 13.1581L4.33178 8.80544L0.523182 6.19362C0.440686 6.13711 0.378422 6.0557 0.345488 5.96129C0.312555 5.86687 0.310678 5.76439 0.340131 5.66884C0.369584 5.57328 0.428824 5.48964 0.509196 5.43014C0.589568 5.37065 0.686859 5.33842 0.786854 5.33815H5.48549L6.90346 0.974385C6.934 0.880173 6.9936 0.798057 7.07371 0.739817C7.15382 0.681578 7.25031 0.650208 7.34935 0.650208C7.44839 0.650208 7.54489 0.681578 7.625 0.739817C7.7051 0.798057 7.76471 0.880173 7.79525 0.974385L9.21322 5.33962H13.9119C14.012 5.33957 14.1095 5.37158 14.1901 5.43096C14.2707 5.49034 14.3302 5.57397 14.3598 5.6696C14.3895 5.76523 14.3877 5.86784 14.3548 5.9624C14.3219 6.05697 14.2596 6.13851 14.177 6.19509L10.3669 8.80544L11.8356 13.1569C11.8594 13.2274 11.8661 13.3025 11.8551 13.376C11.8442 13.4496 11.8158 13.5194 11.7725 13.5799C11.7292 13.6403 11.6722 13.6896 11.6061 13.7237C11.5399 13.7577 11.4667 13.7755 11.3923 13.7757Z" fill="#373B56"/>
                                                    </svg>
                                                </div>
                                                <div className={style.CommentsContainerLocation}>
                                                    <svg width="25" height="25" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.92518 15.4607L8.63958 15.1394C8.46108 14.9609 4.28418 10.0343 4.28418 7.07118C4.28418 4.50078 6.35478 2.43018 8.92518 2.43018C11.4956 2.43018 13.5662 4.50078 13.5662 7.07118C13.5662 10.0343 9.38928 14.9609 9.21078 15.1751L8.92518 15.4607ZM8.92518 3.14418C6.74748 3.14418 4.99818 4.89348 4.99818 7.07118C4.99818 9.35598 7.99698 13.2116 8.92518 14.354C9.85338 13.2116 12.8522 9.35598 12.8522 7.07118C12.8522 4.89348 11.1029 3.14418 8.92518 3.14418Z" fill="#373B56"/>
                                                        <path d="M8.92465 8.85613C7.92505 8.85613 7.13965 8.07073 7.13965 7.07113C7.13965 6.07153 7.92505 5.28613 8.92465 5.28613C9.92425 5.28613 10.7096 6.07153 10.7096 7.07113C10.7096 8.07073 9.92425 8.85613 8.92465 8.85613ZM8.92465 6.00013C8.31775 6.00013 7.85365 6.46423 7.85365 7.07113C7.85365 7.67803 8.31775 8.14213 8.92465 8.14213C9.53155 8.14213 9.99565 7.67803 9.99565 7.07113C9.99565 6.46423 9.53155 6.00013 8.92465 6.00013Z" fill="#373B56"/>
                                                    </svg>
                                                    {commentInfo.location}
                                                </div>
                                                <p className={style.CommentsContainerComment}>{commentInfo.comment}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </Col>
                </div>
                <Row className={style.rowDashboard}>

                </Row>
            </div>
        </div>
    );
}

export default ArtistComments;