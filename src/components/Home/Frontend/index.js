import React from 'react';
import {Container, HeroButton, Layout, LeftContainer, RightContainer, SmallTitle, Subtitle, Title} from "./styles";
import {ArrowRight} from "react-feather";
import BoyImage from "../../../assets/boy-image.png"

const FrontendContainer = () => {
    return (
        <Layout>
            <Container>
                <LeftContainer>
                    <div className={"text"}>
                        <SmallTitle>
                            Cliente
                        </SmallTitle>
                        <Title>
                            FrontEnd Completo
                        </Title>
                        <Subtitle>
                            Nosso FrontEnd foi feito em ReactJS. Com ele você consegue utilizar múltiplas contas
                            e enviar mensagens/arquivos/aúdio.
                        </Subtitle>

                        <HeroButton href={"https://github.com/wppconnect-team/wppconnect-frontend"} target={"_blank"}
                                    rel={"noreferrer"}>
                            Visualizar <ArrowRight/>
                        </HeroButton>
                    </div>
                </LeftContainer>

                <RightContainer>
                    <img src={BoyImage}/>
                </RightContainer>
            </Container>
        </Layout>
    );
};

export default FrontendContainer;