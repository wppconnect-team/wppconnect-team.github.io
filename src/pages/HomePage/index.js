import React, {useEffect, useState} from "react";
import {
    CollaborativeContainer,
    Container,
    Divisor,
    HeroContainer,
    Layout,
    PresentingContainer,
    WhyUsContainer
} from "./style";
import BusinessMan from "../../assets/business-3d-15.png";
import Header from "../../components/Header";
import CollaborativeImage from "../../assets/collaboration-hands-cursor.webp";
import Footer from "../../components/Footer";
import ModalStarGithub from "../../components/ModalStarGithub";
import moment from "moment";

const HomePage = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        setTimeout(() => {
            const modalStorage = localStorage.getItem("@WPPConnect-modal-wpp");
            if (!modalStorage) {
                localStorage.setItem("@WPPConnect-modal-wpp", JSON.stringify({timestamp: moment()}));
                handleOpen();
            } else {
                let today = moment(moment());
                let oldDate = moment(JSON.parse(localStorage.getItem("@WPPConnect-modal-wpp")).timestamp);
                if (today.diff(oldDate, "days") >= 3) {
                    localStorage.setItem("@WPPConnect-modal-wpp", JSON.stringify({timestamp: moment()}));
                    handleOpen();
                }
            }
        }, 3000);

        return () => {
            setOpen(false);
        };
    }, []);

    return (
        <Layout>
            <Header/>
            <ModalStarGithub open={open} handleClose={handleClose}/>

            <Container>
                <HeroContainer>
                    <div className={"hero-text"}>
                        <h2>
                            Eleve a sua comunicação
                            para outro nível.
                        </h2>

                        <p>
                            <b>WPPConnect</b> é a melhor solução para você automatizar o seu WhatsApp. Com soluções
                            prontas para o seu negócio.
                        </p>

                        <div className={"hero-buttons"}>
                            <a href={"https://github.com/wppconnect-team/wppconnect"} rel={"noreferrer"}
                               target={"_blank"}>
                                Acessar Biblioteca
                            </a>

                            <a href={"https://chat.whatsapp.com/C1ChjyShl5cA7KvmtecF3L"} target={"_blank"}
                               rel={"noreferrer"}>
                                Grupo do WhatsApp
                            </a>
                        </div>
                    </div>

                    <img src={BusinessMan} alt={"Business Man Illustration"} draggable={"false"}
                         onDragStart={(e) => e.preventDefault()}/>
                </HeroContainer>

                <Divisor style={{marginTop: "-.7em"}}/>

                <PresentingContainer>
                    <h2>
                        A <span>primeira</span> biblioteca que
                        te oferece tudo sem complicações
                    </h2>

                    {/*<img src={HandSmartphone} alt={"Smartphone"} draggable={"false"}*/}
                    {/*     onDragStart={(e) => e.preventDefault()}/>*/}

                    <ul>
                        <li>
                            <a href={"https://github.com/wppconnect-team/wppconnect-frontend"} target={"_blank"}
                               rel={"noreferrer"}>
                                <h2>
                                    FrontEnd
                                </h2>
                                <p>
                                    Desenvolvido em ReactJS
                                </p>
                                <p>
                                    Chat
                                </p>
                                <p>
                                    MultiSessões
                                </p>
                                <p>
                                    Acesso a contatos
                                </p>
                                <p>
                                    Design Moderno
                                </p>
                            </a>
                        </li>

                        <li>
                            <a href={"https://github.com/wppconnect-team/wppconnect-server"} target={"_blank"}
                               rel={"noreferrer"}>
                                <h2>
                                    BackEnd
                                </h2>
                                <p>
                                    Desenvolvido em NodeJS
                                </p>
                                <p>
                                    Padrão Rest
                                </p>
                                <p>
                                    Proteção da API (Token)
                                </p>
                                <p>
                                    Padrão ES6
                                </p>
                                <p>
                                    Apoio da Comunidade
                                </p>
                            </a>
                        </li>
                    </ul>

                </PresentingContainer>

                <WhyUsContainer>
                    <h2 className={"title"}>
                        Porque utilizar o <b>WPPConnect?</b>
                    </h2>

                    <div className={"info-presestion"}>
                        <p>
                            Nosso projeto deu início através de um Fork do VenomBot, que também era um Fork
                            do <b>Sulla</b>. A nossa ideia é sempre melhorar e inovar para manter a lib ativa. O nosso
                            diferencial está justamente no que oferecemos, como muitas pessoas que não entendem muito de
                            programação mas querem ter um projeto desses, nós resolvemos disponibilizar um BackEnd e
                            FrontEnd pré moldados.
                        </p>
                    </div>
                </WhyUsContainer>

                <CollaborativeContainer>
                    <div>
                        <h2>
                            Colaboração como nunca visto antes
                        </h2>

                        <p>
                            Colaboração é a chave para todo OpenSource dar certo. A nossa comunidade é bem ativa quando
                            se trata de auxiliar o projeto, seja de maneira monetária ou contribuição no código.
                        </p>
                    </div>

                    <img src={CollaborativeImage} alt={"Collaborative"} draggable={"false"}
                         onDragStart={(e) => e.preventDefault()}/>
                </CollaborativeContainer>

                <Footer/>
            </Container>
        </Layout>
    );
};

export default HomePage;