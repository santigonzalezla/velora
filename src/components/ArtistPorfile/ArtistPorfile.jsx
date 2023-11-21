import style from './ArtistApp.module.css'
import {Image, Row, Col, Container, Modal, Form, Card} from 'react-bootstrap';
import {Tab, Tabs, TabList, TabPanel} from "react-tabs";
import {useEffect, useState, useRef} from 'react';
import SideBarArtist from '../SideBarArtist/SideBarArtist';
import SuggetionsArtist from '../SuggetionsArtist/SuggetionsArtist';
import Banner from '../../assets/img/HomeApp/ViewArtist/ArtistBanner.png'
import Photo from '../../assets/img/HomeApp/ViewArtist/ArtistPhoto.png'
import Location from '../../assets/img/HomeApp/ViewArtist/Location.png'
import Star from '../../assets/img/HomeApp/ViewArtist/Star.png'
import AddMedia from '../../assets/img/ArtistApp/ArtistPorfile/addmedia.png'
import Premium from '../../assets/img/ArtistApp/ArtistPorfile/Premium.png'
import FeedArtist from '../FeedArtist/FeedArtist'
import Caledar from './Calendar';
import {Cookies} from 'react-cookie'
import jwt from 'jwt-decode'

const cookies = new Cookies();

async function getUserInfo() {
    const token = cookies.get('auth-cookie');
    const headers = {
        'Authorization': 'Bearer ' + (token || '')
    };
    const decoded = jwt(token);
    const response = await fetch(`${import.meta.env.VITE_AUTH_API_URL}/profile/${decoded.username}`, {
        headers
    });

    if (response.ok) {
        const data = await response.json();
        return data.data;
    } else {
        return null;
    }
}

async function createPost(data) {
    const token = cookies.get('auth-cookie');
    const url = `${import.meta.env.VITE_POST_API_URL}/posts`;
    const options = {
        credetials: 'include',
        headers: {
            'Authorization': 'Bearer ' + (token || '')
        },
        method: 'POST',
        body: data
    };
    const response = await fetch(url, options);

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        return null;
    }
}


const ArtistPorfile = () =>
{
    // Modal de crear post
    const [show, setShow] = useState(false);
    // Modal de editar post
    const [editPost, setEditPost] = useState(false)
    const [confirmPost, setConfirmPost] = useState(false)

    const [first_name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [country, setCountry] = useState('');
    const [bio, setBio] = useState('');

    const [postText, setPostText] = useState('');
    const [postImages, setPostImages] = useState(null);
    const [postVisibility, setPostVisibility] = useState('public');

    const [posts, setPosts] = useState([]);

    // Pre visualizar imagen
    const [selectedImage, setSelectedImage] = useState(null);

    // Controles para el modal de crear post
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Controles para el modal de editar post
    const editPostClose = () => setEditPost(false)
    const editPostOpen = () => setEditPost(true)

    const addImageButton = useRef(null);

    // Controles para el modal de confirmacion post
    const confirmPostClose = () => setConfirmPost(false)
    const confirmPostShow = () => {
        setShow(false),
            setConfirmPost(false);
    }

    const loadProfile = async () => {
        getUserInfo().then((data) => {
            setName(data.first_name);
            setCountry(data.country);
            setLastname(data.last_name);
            setUsername(data.username);
            setBio(data.bio || "Biografia");
        });
    }

    const handleCreatePost = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('text', postText);
        if (postImages) {
            for (let i = 0; i < postImages.length; i++) {
                data.append('media', postImages[i]);
            }
        }

        //data.append('media', postImages);
        data.append('privacy', postVisibility);
        for (const value of data.values()) {
            console.log(value);
        }
        handleClose();
        const response = await createPost(data);
        window.location.reload();

    }

    const handleAddImage = () => {
        addImageButton.current.click();
    }


    useEffect(() => {
        loadProfile()
    }, []);

    return (
        <div id={style.ViewArtist}>
            <SideBarArtist/>
            <div id={style.ViewArtistCol} fluid>
                <Row className={style.ViewArtistRow}>
                    <Col xs="12" sm="9" md="9" lg="9" id={style.ViewArtistContent}>
                        <Image src={Banner} className={style.ArtistBanner} fluid/>
                        <div className={style.UserData}>
                            <section>
                                <Image src={Photo} className={style.ArtistPhoto} fluid/>
                                <span id={style.LocationTxt}><img src={Location} id={style.Location}/> COLOMBIA</span>
                            </section>
                            <section id={style.BtnOptions}>
                                <div id={style.Coins}>
                                    <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1297_2023)">
                                            <path d="M10.9941 1.37483C13.3289 1.37483 15.8049 3.34138 15.8049 4.80919V8.24497C15.8049 9.56738 15.2549 12.0974 13.7799 13.2589C13.5949 13.4045 13.4504 13.5952 13.3602 13.8127C13.2701 14.0301 13.2373 14.2671 13.2649 14.5009C13.3213 14.977 13.6214 15.3885 14.0566 15.5885L20.0399 18.4259C20.0867 18.4472 20.6133 18.5355 20.6133 19.2711L20.614 20.6131L1.37498 20.6142V19.2189C1.37498 18.6723 1.78507 18.5008 1.94904 18.4252L7.98665 15.5758C8.41977 15.3771 8.71851 14.9674 8.7766 14.4947C8.83504 14.0221 8.64426 13.5528 8.27267 13.2548C6.84439 12.1081 6.17889 9.58734 6.17889 8.24497V4.80919C6.17921 3.37303 8.68001 1.37483 10.9941 1.37483ZM10.9941 -0.000213623C7.95814 -0.000213623 4.80391 2.53361 4.80391 4.80921V8.245C4.80391 9.74615 5.489 12.7835 7.41194 14.327L1.37397 17.1767C1.37397 17.1767 0 17.7889 0 18.551V20.6142C0 21.3735 0.615313 21.9885 1.37395 21.9885H20.6143C21.3737 21.9885 21.9886 21.3735 21.9886 20.6142V18.551C21.9886 17.7432 20.6143 17.1767 20.6143 17.1767L14.631 14.3393C16.5357 12.8402 17.1803 9.89532 17.1803 8.24497V4.80919C17.1803 2.53357 14.0298 -0.000192139 10.9941 -0.000192139V-0.000213623Z" fill="#373B56"/>
                                        </g>
                                        <rect x="13" y="15" width="10" height="10" rx="5" fill="#ECEDF2"/>
                                        <circle cx="18" cy="20" r="4.5" stroke="#373B56"/>
                                        <line x1="21.8829" y1="16.8244" x2="15.0198" y2="23.6875" stroke="#373B56"/>
                                        <defs>
                                            <clipPath id="clip0_1297_2023">
                                                <rect width="22" height="22" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>

                                </div>
                                <button id={style.msgBtn} onClick={handleShow}>
                                    Contáctame
                                </button>
                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header className={style.NewPostHeader}>
                                        <img src={Photo} className={style.photoModal}/>
                                        <Form.Select id={style.SelectView} defaultValue="" onChange={(e) => {
                                            setPostVisibility(e.target.value)
                                        }}>
                                            <option value="" disabled hidden>¿Quién puede ver?</option>
                                            <option value="public">Todos</option>
                                            <option value="premium">Solo Clientes Premium</option>
                                        </Form.Select>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <div className={style.NewPostBody}>
                                            <textarea placeholder='¿Qué deseas compartir hoy?...'
                                                      className={style.PostInput} onChange={(e) => {
                                                setPostText(e.target.value)
                                            }} name="" cols="30" rows="10"></textarea>
                                            <input type="file" ref={addImageButton} hidden multiple onChange={(e) => {
                                                setSelectedImage(URL.createObjectURL(e.target.files[0]));
                                                setPostImages(e.target.files)
                                            }}/>
                                            {selectedImage && <img src={selectedImage} alt="Imagen seleccionada"
                                                                   className={style.SelectedImage}/>}
                                            <img src={AddMedia} width={20} onClick={handleAddImage}/>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer id={style.modalFooter}>
                                        <p onClick={() => {
                                            handleCreatePost(), confirmPostShow()
                                        }}>Publicar</p>
                                        <span onClick={handleClose}>Cancelar</span>
                                    </Modal.Footer>
                                </Modal>
                                <Modal show={confirmPost} onHide={confirmPostClose}>
                                    <Modal.Body className={style.ConfirmModals}>
                                        <article>
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100"
                                                 height="100" viewBox="0 0 32 32">
                                                <path
                                                    d="M 16 3 C 8.8 3 3 8.8 3 16 C 3 23.2 8.8 29 16 29 C 23.2 29 29 23.2 29 16 C 29 14.6 28.800781 13.200391 28.300781 11.900391 L 26.699219 13.5 C 26.899219 14.3 27 15.1 27 16 C 27 22.1 22.1 27 16 27 C 9.9 27 5 22.1 5 16 C 5 9.9 9.9 5 16 5 C 19 5 21.599609 6.1996094 23.599609 8.0996094 L 25 6.6992188 C 22.7 4.3992188 19.5 3 16 3 z M 27.300781 7.5 L 16 18.800781 L 11.699219 14.5 L 10.300781 16 L 16 21.699219 L 28.699219 9 L 27.300781 7.5 z"></path>
                                            </svg>
                                            <h4>Se subio exitosamente tu publicacion</h4>
                                        </article>
                                    </Modal.Body>
                                </Modal>
                            </section>
                        </div>
                        <div className={style.porfilUser}>
                            <h5>Santiago Gonzalez{first_name + " " + lastname}</h5>
                            <span id={style.atSign}>@santigonzalezla{username}</span>
                            <span>Colombia{country}</span>
                            <span>TextoBiografía lorem ipsum{bio}</span>
                            <section id={style.Review}>
                                <span id={style.Subs}><span className={style.Nums}>53K</span> SUBSCRIPCIONES</span>
                                <span className={style.Nums}>4.3 <img src={Star} width={15} alt=""/><span
                                    id={style.Rev}><span> 52K</span> RESEÑAS</span></span>
                            </section>
                        </div>
                        <Modal show={editPost} onHide={editPostClose}>
                            <Modal.Header className={style.NewPostHeader}>
                                <img src={Photo} className={style.photoModal}/>
                                <Form.Select id={style.SelectView} defaultValue="" onChange={(e) => {
                                    setPostVisibility(e.target.value)
                                }}>
                                    <option value="" disabled hidden>¿Quién puede ver?</option>
                                    <option value="public">Todos</option>
                                    <option value="premium">Solo Clientes Premium</option>
                                </Form.Select>
                                <p>Eliminar Post</p>
                            </Modal.Header>
                            <Modal.Body>
                                <div className={style.NewPostBody}>
                                    <textarea placeholder='¿Qué deseas compartir hoy?...' className={style.PostInput}
                                              onChange={(e) => {
                                                  setPostText(e.target.value)
                                              }} name="" cols="30" rows="10"></textarea>
                                    <input type="file" ref={addImageButton} hidden multiple onChange={(e) => {
                                        setPostImages(e.target.files)
                                    }}/>
                                    <img src={AddMedia} width={20} onClick={handleAddImage}/>
                                </div>
                            </Modal.Body>
                            <Modal.Footer id={style.modalFooter}>
                                <p onClick={() => {
                                    handleCreatePost;
                                    confirmPostShow
                                }}>Publicar</p>
                                <span onClick={editPostClose}>Cancelar</span>
                            </Modal.Footer>
                        </Modal>
                        <Tabs id={style.Navies}>
                            <TabList>
                                <Tab className={style.Tab}>FEED</Tab>
                                <Tab className={style.Tab}>RESEÑAS</Tab>
                                <Tab className={style.RoomBtn}>ROOM ME</Tab>
                            </TabList>
                            <TabPanel>
                                <FeedArtist/>
                            </TabPanel>
                            <TabPanel eventKey="RESEÑAS" title="RESEÑAS">
                                <Row className={style.Premium}>
                                    <Col sm='3' className={style.Premium}>
                                        <img src={Premium} alt="" width={150}/>
                                    </Col>
                                    <Col sm='3' className={style.Premium}>
                                        <img src={Premium} alt="" width={150}/>
                                    </Col>
                                    <Col sm='3' className={style.Premium}>
                                        <img src={Premium} alt="" width={150}/>
                                    </Col>
                                    <Col sm='3' className={style.Premium}>
                                        <img src={Premium} alt="" width={150}/>
                                    </Col>
                                </Row>
                            </TabPanel>
                            <TabPanel id={style.RoomBtn} eventKey="ROOM ME" title="ROOM ME">
                                <div className={style.TopServiceRowCard}>
                                    <Card className={style.ServiceCardsTop}>
                                        <Card.Body className={style.ServiceCardTopBody}>
                                            <svg width="120" height="120" viewBox="0 0 95 95" fill="none">
                                                <path d="M60.0855 40.3616L42.4085 28.5769C42.1866 28.4289 41.9287 28.3439 41.6623 28.331C41.3958 28.318 41.1309 28.3777 40.8957 28.5036C40.6605 28.6295 40.464 28.8169 40.327 29.0458C40.19 29.2747 40.1177 29.5365 40.1179 29.8033V53.3726C40.1176 53.6393 40.1897 53.9011 40.3265 54.1301C40.4634 54.359 40.6599 54.5465 40.8949 54.6726C41.1302 54.7986 41.3953 54.8583 41.6619 54.8453C41.9285 54.8323 42.1866 54.7472 42.4085 54.5989L60.0855 42.8143C60.2876 42.6798 60.4533 42.4975 60.5679 42.2835C60.6825 42.0696 60.7425 41.8306 60.7425 41.5879C60.7425 41.3452 60.6825 41.1063 60.5679 40.8923C60.4533 40.6784 60.2876 40.496 60.0855 40.3616ZM43.064 50.6216V32.5542L56.6127 41.5879L43.064 50.6216ZM79.8911 16.5455H15.0755C13.9034 16.5455 12.7794 17.0111 11.9506 17.8399C11.1218 18.6687 10.6562 19.7927 10.6562 20.9648V62.2111C10.6562 63.3831 11.1218 64.5072 11.9506 65.3359C12.7794 66.1647 13.9034 66.6303 15.0755 66.6303H79.8911C81.0631 66.6303 82.1872 66.1647 83.016 65.3359C83.8447 64.5072 84.3103 63.3831 84.3103 62.2111V20.9648C84.3103 19.7927 83.8447 18.6687 83.016 17.8399C82.1872 17.0111 81.0631 16.5455 79.8911 16.5455ZM81.3642 62.2111C81.3642 62.6017 81.209 62.9764 80.9327 63.2527C80.6565 63.5289 80.2818 63.6841 79.8911 63.6841H15.0755C14.6848 63.6841 14.3101 63.5289 14.0339 63.2527C13.7576 62.9764 13.6024 62.6017 13.6024 62.2111V20.9648C13.6024 20.5741 13.7576 20.1994 14.0339 19.9232C14.3101 19.6469 14.6848 19.4917 15.0755 19.4917H79.8911C80.2818 19.4917 80.6565 19.6469 80.9327 19.9232C81.209 20.1994 81.3642 20.5741 81.3642 20.9648V62.2111ZM84.3103 76.9419C84.3103 77.3326 84.1551 77.7073 83.8789 77.9835C83.6026 78.2598 83.2279 78.415 82.8373 78.415H12.1293C11.7386 78.415 11.364 78.2598 11.0877 77.9835C10.8114 77.7073 10.6562 77.3326 10.6562 76.9419C10.6562 76.5512 10.8114 76.1765 11.0877 75.9003C11.364 75.624 11.7386 75.4688 12.1293 75.4688H82.8373C83.2279 75.4688 83.6026 75.624 83.8789 75.9003C84.1551 76.1765 84.3103 76.5512 84.3103 76.9419Z" fill="#373B56"/>
                                            </svg>
                                            <Card.Text className={style.ServiceCardsText}>
                                                Contenido Digital
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className={style.ServiceCardsTop}>
                                        <Card.Body className={style.ServiceCardTopBody}>
                                            <svg width="120" height="120" viewBox="0 0 93 93" fill="none">
                                                <path d="M42.1517 78.528C42.0718 78.8376 41.8911 79.1118 41.6381 79.3074C41.3852 79.503 41.0743 79.6089 40.7546 79.6083C40.6332 79.6088 40.5123 79.5943 40.3945 79.5651L28.8717 76.6844C28.7114 76.6447 28.5592 76.5777 28.4216 76.4864L19.7795 70.725C19.6221 70.62 19.4868 70.485 19.3815 70.3278C19.2762 70.1705 19.2029 69.9941 19.1658 69.8085C19.1287 69.6229 19.1285 69.4319 19.1652 69.2462C19.2019 69.0606 19.2749 68.884 19.3798 68.7265C19.5919 68.4085 19.9215 68.1877 20.2963 68.1127C20.4819 68.0756 20.6729 68.0754 20.8586 68.1122C21.0443 68.1489 21.2209 68.2218 21.3783 68.3268L29.8115 73.9513L41.1146 76.7708C41.2983 76.8178 41.4708 76.9006 41.6224 77.0144C41.774 77.1283 41.9016 77.2709 41.998 77.4341C42.0943 77.5974 42.1575 77.778 42.1839 77.9658C42.2103 78.1535 42.1993 78.3446 42.1517 78.528ZM89.9603 43.6897C89.7834 44.228 89.5013 44.7258 89.1305 45.1541C88.7596 45.5825 88.3073 45.9329 87.7998 46.1851L79.0641 50.5565L59.0649 70.5557C58.8871 70.7284 58.6678 70.8523 58.428 70.9154C58.1883 70.9785 57.9364 70.9786 57.6966 70.9158L34.6511 65.1544C34.4745 65.1117 34.3081 65.0346 34.1614 64.9276L14.083 50.5997L5.23925 46.1743C4.73159 45.9206 4.27887 45.5694 3.90694 45.1408C3.53502 44.7121 3.25117 44.2144 3.07161 43.6761C2.89204 43.1377 2.82029 42.5693 2.86044 42.0032C2.90058 41.4371 3.05185 40.8845 3.30559 40.3769L12.2501 22.4878C12.5038 21.9801 12.855 21.5274 13.2836 21.1554C13.7122 20.7835 14.21 20.4997 14.7483 20.3201C15.2867 20.1405 15.8551 20.0688 16.4212 20.1089C16.9873 20.1491 17.5399 20.3003 18.0475 20.5541L26.4951 24.7779L46.1198 19.1678C46.379 19.0958 46.6529 19.0958 46.912 19.1678L66.5367 24.7779L74.9844 20.5541C75.492 20.3003 76.0446 20.1491 76.6107 20.1089C77.1768 20.0688 77.7452 20.1405 78.2836 20.3201C78.8219 20.4997 79.3196 20.7835 79.7483 21.1554C80.1769 21.5274 80.5281 21.9801 80.7817 22.4878L89.7263 40.3805C89.9818 40.8873 90.1341 41.4399 90.1743 42.0062C90.2145 42.5724 90.1417 43.141 89.9603 43.6789V43.6897ZM6.52476 43.5996L14.1838 47.4274L24.4174 26.96L16.762 23.1323C16.593 23.0474 16.4088 22.9967 16.2202 22.9829C16.0315 22.9692 15.842 22.9927 15.6624 23.0523C15.4829 23.1118 15.3168 23.2061 15.1737 23.3298C15.0306 23.4535 14.9132 23.6042 14.8284 23.7733L5.88381 41.666C5.79891 41.835 5.74815 42.0191 5.73441 42.2078C5.72068 42.3965 5.74424 42.586 5.80376 42.7656C5.86328 42.9451 5.95759 43.1112 6.0813 43.2543C6.20501 43.3974 6.3557 43.5148 6.52476 43.5996ZM70.2816 55.2412L58.1179 45.4973C51.4455 51.5323 42.7134 52.5226 35.5549 47.9495C35.0079 47.6027 34.5459 47.1374 34.2029 46.5879C33.86 46.0385 33.645 45.419 33.5738 44.7752C33.5026 44.1315 33.577 43.48 33.7915 42.8688C34.006 42.2577 34.3552 41.7027 34.8131 41.2447L51.2691 25.282C51.5391 25.0199 51.901 24.8738 52.2773 24.8751H56.3967L46.5159 22.0521L27.3558 27.5254L16.6684 48.9037L35.6089 62.4322L57.5958 67.9307L70.2816 55.2412ZM76.4463 49.0766L65.7914 27.7558H52.8607L36.8404 43.2972C36.6912 43.4467 36.5778 43.628 36.5086 43.8275C36.4394 44.0271 36.4162 44.2397 36.4407 44.4494C36.4637 44.6679 36.5355 44.8784 36.6508 45.0654C36.7661 45.2524 36.922 45.4111 37.1069 45.5297C42.1301 48.7381 49.998 49.6491 57.0161 42.577C57.2667 42.3248 57.6018 42.1743 57.9568 42.1544C58.3118 42.1344 58.6616 42.2465 58.9389 42.469L72.3377 53.1996L76.4463 49.0766ZM87.1445 41.666L78.2035 23.7733C78.1187 23.6042 78.0013 23.4535 77.8582 23.3298C77.7151 23.2061 77.549 23.1118 77.3695 23.0523C77.1899 22.9927 77.0004 22.9692 76.8117 22.9829C76.623 22.9967 76.4389 23.0474 76.2699 23.1323L68.6144 26.96L78.8481 47.4274L86.5071 43.5996C86.6762 43.5148 86.8269 43.3974 86.9506 43.2543C87.0743 43.1112 87.1686 42.9451 87.2281 42.7656C87.2876 42.586 87.3112 42.3965 87.2975 42.2078C87.2837 42.0191 87.233 41.835 87.1481 41.666H87.1445Z" fill="#373B56"/>
                                            </svg>
                                            <Card.Text className={style.ServiceCardsText}>
                                                Contrátame
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </Col>
                    <Col xs="12" sm="3" md="3" lg="3" className={style.SuggetionsBar}>
                        <SuggetionsArtist/>
                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default ArtistPorfile;