import React from 'react';
import {Container, Layout, RepeaterWeDo, SmallTitle, Subtitle, Title} from "./styles";
import {Home, Users} from "react-feather";
import ThinkingFace from "../../../assets/thinking-face.png"
import Hello from "../../../assets/waving-hand-sign.png"

const SupportContainer = ({handleOpenSupport}) => {
    return (
        <Layout>
            <Container>
                <SmallTitle>
                    Suporte
                </SmallTitle>
                <Title>
                    Você está pronto?
                </Title>
                <Subtitle>
                    Somos profissionais com vasto conhecimento que colaboram em uma biblioteca OpenSource.
                </Subtitle>

                <RepeaterWeDo>
                    <li>
                        <img draggable={"false"} src={Hello} alt={"Emoji Hello"}/>
                        <div>
                            <h1>
                                Diga olá!
                            </h1>
                            <p>
                                Nós temos uma comunidade incrível no WhatsApp e no Discord!
                            </p>

                            <button onClick={() => handleOpenSupport()}>
                                Acessar Comunidade
                            </button>
                        </div>
                    </li>
                    <li>
                        <img draggable={"false"} src={ThinkingFace} alt={"Emoji Thinking"}/>
                        <div>
                            <h1>
                                Ficou com dúvidas?
                            </h1>
                            <p>
                                Talvez você tenha ficado com alguma dúvida, mas fique tranquilo, você pode nos contatar
                                facilmente
                            </p>

                            <button onClick={() => handleOpenSupport()}>
                                Falar com Suporte
                            </button>
                        </div>
                    </li>
                </RepeaterWeDo>
            </Container>
        </Layout>
    );
};

export default SupportContainer;