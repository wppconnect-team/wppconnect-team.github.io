import React from 'react';
import {Container, HeroButton, Layout, LeftContainer, RightContainer, SmallTitle, Subtitle, Title} from "./styles";
import {ArrowRight} from "react-feather";
import Translate from '@docusaurus/Translate';

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
                            <Translate id="docker.description">Seriously, we're even making Docker available. Check it out by clicking the button below</Translate>
                        </Subtitle>

                        <HeroButton href={"https://github.com/wppconnect-team/wpp-docker"} target={"_blank"} rel={"noreferrer"}>
                            <Translate id="view">Visualizar</Translate> <ArrowRight/>
                        </HeroButton>
                    </div>
                </LeftContainer>

                <RightContainer/>
            </Container>
        </Layout>
    );
};

export default DockerContainer;