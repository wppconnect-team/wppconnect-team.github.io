import React from 'react';
import {Container, HeroButton, Layout, LeftContainer, RightContainer, SmallTitle, Subtitle, Title} from "./styles";
import {ArrowRight} from "react-feather";
import BoyImage from "../../../assets/boy-image.png"
import Translate from '@docusaurus/Translate';

const FrontendContainer = () => {
    return (
        <Layout>
            <Container>
                <LeftContainer>
                    <div className={"text"}>
                        <SmallTitle>
                            <Translate id="extension">Extension Maker</Translate>
                        </SmallTitle>
                        <Title>
                            <Translate id="extension.whatsapp.func">WhatsApp functions</Translate>
                        </Title>
                        <Subtitle>
                            <Translate id="extension.desc">WAJS is an open-source library designed for easy integration and automation of WhatsApp Web, allowing developers to create extensions and use it directly in the browser console.</Translate> 
                        </Subtitle>

                        <HeroButton href={"https://github.com/wppconnect-team/wa-js"} target={"_blank"}
                                    rel={"noreferrer"}>
                            <Translate id="view">View</Translate> <ArrowRight/>
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