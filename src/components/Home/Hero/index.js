import React from 'react';
import {Container, GrayTop, HeroButton, ImageHero, Layout, Subtitle, Title} from "./styles";
import {ArrowRight} from "react-feather";
import NotebookImage from "../../../assets/image-notebook-hero.png";
import Translate from '@docusaurus/Translate';

const HeroContainer = () => {
    return (
        <Layout>
            <Container>
                <GrayTop>
                    <Title>
                    <Translate id="ifyoucanimagine.title" description="If you can imagine">
                        If you can imagine
                    </Translate><br/>
                    <Translate id="wecando.title" description="We can do">
                        we can do
                    </Translate><br/>
                    </Title>
                    <Subtitle>
                        
                    <Translate id="bestsolucion.title" description="Nós somos a melhor solução para whatsapp">We are the </Translate><b><Translate id="home.best">best</Translate></b> <Translate id="home.sulutionautomation">sulution automation you were looking for Whatsapp.</Translate>
                    </Subtitle>
                    <HeroButton href={"https://github.com/wppconnect-team/wppconnect"} target={"_blank"}
                                rel={"noreferrer"}>
                        <Translate id="home.seelib">See lib</Translate> <ArrowRight/>
                    </HeroButton>

                    <ImageHero>
                        <img src={NotebookImage}/>
                    </ImageHero>
                </GrayTop>
            </Container>
        </Layout>
    );
};

export default HeroContainer;