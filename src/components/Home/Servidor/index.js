import React from 'react';
import {Container, HeroButton, Layout, LeftContainer, RightContainer, SmallTitle, Subtitle, Title} from "./styles";
import {ArrowRight} from "react-feather";

const ServidorContainer = () => {
    return (
        <Layout>
            <Container>
                <LeftContainer>
                    <div className={"text"}>
                        <SmallTitle>
                            Servidor
                        </SmallTitle>
                        <Title>
                            Servidor Robusto
                        </Title>
                        <Subtitle>
                            Um servidor simples e robusto feito em NodeJS, com todas as funções que o WPPConnect oferece.
                        </Subtitle>

                        <HeroButton href={"https://github.com/wppconnect-team/wppconnect-server"} target={"_blank"} rel={"noreferrer"}>
                            Visualizar <ArrowRight/>
                        </HeroButton>
                    </div>
                </LeftContainer>

                <RightContainer/>
            </Container>
        </Layout>
    );
};

export default ServidorContainer;