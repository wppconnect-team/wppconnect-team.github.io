import React from 'react';
import {Container, HeroButton, Layout, LeftContainer, RightContainer, SmallTitle, Subtitle, Title} from "./styles";
import {ArrowRight} from "react-feather";
import Translate from '@docusaurus/Translate';

const ServidorContainer = () => {
    return (
        <Layout>
            <Container>
                <LeftContainer>
                    <div className={"text"}>
                        <SmallTitle>
                            <Translate id="server">Server</Translate>
                        </SmallTitle>
                        <Title>
                        <Translate id="server.robust">Robust Server</Translate>
                        </Title>
                        <Subtitle>
                        <Translate id="server.robust.desc">A simple and robust server made in NodeJS, with all the functions that WPPConnect offers.</Translate>
                        </Subtitle>

                        <HeroButton href={"https://github.com/wppconnect-team/wppconnect-server"} target={"_blank"} rel={"noreferrer"}>
                            <Translate id="view">View</Translate> <ArrowRight/>
                        </HeroButton>
                    </div>
                </LeftContainer>

                <RightContainer/>
            </Container>
        </Layout>
    );
};

export default ServidorContainer;