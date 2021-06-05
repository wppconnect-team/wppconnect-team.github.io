import React from 'react';
import {CircleComponent, Container, Layout, RepeaterWeDo, SmallTitle, Subtitle, Title} from "./styles";
import {GitHub, Home, Settings, User, Users, Youtube} from "react-feather";
import SmileEmoji from "../../../assets/smile-emoji.png";

const ApoiarContainer = () => {
    return (
        <Layout>
            <Container>
                <SmallTitle>
                    <img src={SmileEmoji}/>
                </SmallTitle>
                <Title>
                    Apoie-nos
                </Title>
                <Subtitle>
                    Você sabia que pode nos apoiar de diversas formas? Veja abaixo como!
                </Subtitle>

                <RepeaterWeDo>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#6ab158"}>
                            <Home/>
                        </CircleComponent>
                        <h1>
                            Apoia-se
                        </h1>
                        <p>
                            Nós utilizamos a plataforma <b>Apoia-se</b> para gerar uma receita para incentivas os
                            desenvolvedores do WPPConnect
                        </p>

                        <a href={"https://apoia.se/wppconnect"} target={"_blank"} rel={"noreferrer"}>
                            Quero Apoiar
                        </a>
                    </li>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#993939"}>
                            <Youtube/>
                        </CircleComponent>
                        <h1>
                            Youtube
                        </h1>
                        <p>
                            Nós temos um canal no Youtube onde fazemos alguns tutoriais de como usar nossa
                            biblioteca/servidor/frontend e muito mais...
                        </p>

                        <a href={"https://www.youtube.com/channel/UCD7J9LG08PmGQrF5IS7Yv9A"} target={"_blank"} rel={"noreferrer"}>
                            Seguir Canal
                        </a>
                    </li>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#262626"}>
                            <GitHub/>
                        </CircleComponent>
                        <h1>
                            Github
                        </h1>
                        <p>
                            Você também pode dar uma estrela em nosso repositório. <br/><br/>Isso nos ajuda a crescer dentro da
                            rede!
                        </p>

                        <a href={"https://github.com/wppconnect-team/wppconnect"} target={"_blank"} rel={"noreferrer"}>
                            Ir até o Github
                        </a>
                    </li>
                </RepeaterWeDo>
            </Container>
        </Layout>
    );
};

export default ApoiarContainer;