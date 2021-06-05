import React from 'react';
import {CircleComponent, Container, Layout, RepeaterWeDo, SmallTitle, Title} from "./styles";
import {Home, Settings, Users} from "react-feather";

const AboutContainer = () => {
    return (
        <Layout>
            <Container>
                <SmallTitle>
                    Sobre Nós
                </SmallTitle>
                <Title>
                    Nós somos muito mais do que <b>apenas</b> uma biblioteca
                </Title>

                <RepeaterWeDo>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#2b44ff"}>
                            <Home/>
                        </CircleComponent>
                        <h1>
                            Quem somos
                        </h1>
                        <p>
                            Somos uma equipe que iniciou um projeto OpenSource que realiza automação no WhatsApp
                        </p>
                    </li>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#0BC75B"}>
                            <Settings/>
                        </CircleComponent>
                        <h1>
                            O que fazemos
                        </h1>
                        <p>
                            Automatizamos o WhatsApp Web para você conseguir atender o seu cliente de diversas formas
                        </p>
                    </li>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#3C82FA"}>
                            <Users/>
                        </CircleComponent>
                        <h1>
                            Nosso time
                        </h1>
                        <p>
                            Uma equipe de profissionais que realizam manutenção e disponibilizam melhorias para todos as
                            soluções que oferecemos
                        </p>
                    </li>
                </RepeaterWeDo>
            </Container>
        </Layout>
    );
};

export default AboutContainer;