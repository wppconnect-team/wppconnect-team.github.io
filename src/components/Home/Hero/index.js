import React from 'react';
import {Container, GrayTop, HeroButton, ImageHero, Layout, Subtitle, Title} from "./styles";
import {ArrowRight} from "react-feather";
import NotebookImage from "../../../assets/image-notebook-hero.png";

const HeroContainer = () => {
    return (
        <Layout>
            <Container>
                <GrayTop>
                    <Title>
                        Se você pode imaginar<br/>
                        nós podemos fazer
                    </Title>
                    <Subtitle>
                        Nós somos a <b>melhor</b> solução para automação WhatsApp que você estava procurando.
                    </Subtitle>
                    <HeroButton href={"https://github.com/wppconnect-team/wppconnect"} target={"_blank"}
                                rel={"noreferrer"}>
                        Ver biblioteca <ArrowRight/>
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