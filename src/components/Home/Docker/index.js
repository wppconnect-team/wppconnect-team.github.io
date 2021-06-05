import React from 'react';
import {Container, HeroButton, Layout, LeftContainer, RightContainer, SmallTitle, Subtitle, Title} from "./styles";
import {ArrowRight} from "react-feather";

const DockerContainer = () => {
    return (
        <Layout>
            <Container>
                <LeftContainer>
                    <div className={"text"}>
                        <SmallTitle>
                            Docker
                        </SmallTitle>
                        <Title>
                            Docker
                        </Title>
                        <Subtitle>
                            Sério, até Docker nós estamos disponibilizando. Dá uma olhada clicando no botão abaixo
                        </Subtitle>

                        <HeroButton href={"https://github.com/wppconnect-team/wpp-docker"} target={"_blank"} rel={"noreferrer"}>
                            Visualizar <ArrowRight/>
                        </HeroButton>
                    </div>
                </LeftContainer>

                <RightContainer/>
            </Container>
        </Layout>
    );
};

export default DockerContainer;