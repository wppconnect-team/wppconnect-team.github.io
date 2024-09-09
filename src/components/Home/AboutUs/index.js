import React from 'react';
import {CircleComponent, Container, Layout, RepeaterWeDo, SmallTitle, Title} from "./styles";
import {Home, Settings, Users} from "react-feather";

const AboutContainer = () => {
    return (
        <Layout>
            <Container>
                <SmallTitle>
                    <Translate id="aboutus">About us</Translate>
                </SmallTitle>
                <Title>
                    <Translate id="about.desc">We are much more than just a library</Translate> 
                </Title>

                <RepeaterWeDo>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#2b44ff"}>
                            <Home/>
                        </CircleComponent>
                        <h1>
                            <Translate id="whoweare">Who we are</Translate>
                        </h1>
                        <p>
                        <Translate id="about.weareateam">We are a team that started an OpenSource project that performs automation on WhatsApp</Translate>
                        </p>
                    </li>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#0BC75B"}>
                            <Settings/>
                        </CircleComponent>
                        <h1>
                            <Translate id="about.wedo">What we do?</Translate>
                        </h1>
                        <p>
                            <Translate id="about.wedo.desc">The WPPConnect Team creates open-source tools for automating and integrating with WhatsApp Web, enabling efficient communication and bot development</Translate> 
                        </p>
                    </li>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#3C82FA"}>
                            <Users/>
                        </CircleComponent>
                        <h1>
                            <Translate id="about.ourteam">Our Team</Translate>
                        </h1>
                        <p>
                            <Translate id="about.ourteam.desc">A team of professionals who perform maintenance and provide improvements for all the
                        solutions we offer</Translate>
                        </p>
                    </li>
                </RepeaterWeDo>
            </Container>
        </Layout>
    );
};

export default AboutContainer;