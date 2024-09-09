import React from 'react';
import {CircleComponent, Container, Layout, RepeaterWeDo, SmallTitle, Subtitle, Title} from "./styles";
import {GitHub, Home, Settings, User, Users, Youtube} from "react-feather";
import SmileEmoji from "../../../assets/smile-emoji.png";
import Translate from '@docusaurus/Translate';

const ApoiarContainer = () => {
    return (
        <Layout>
            <Container>
                <SmallTitle>
                    <img src={SmileEmoji}/>
                </SmallTitle>
                <Title>
                    <Translate id="sponsor">Sponsor-us</Translate>
                </Title>
                <Subtitle>
                   <Translate id="sponsor.desc">Did you know that you can support us in several ways? See below how!</Translate> 
                </Subtitle>

                <RepeaterWeDo>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#6ab158"}>
                            <Home/>
                        </CircleComponent>
                        <h1>
                            OpenCollective
                        </h1>
                        <p>
                            <Translate id="sponsor.weplatform">We use the platform </Translate><b>OpenCollective</b> <Translate id="sponsor.receipt">to generate revenue to incentivize WPPConnect developers</Translate>
                        </p>
                    </li>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#993939"}>
                            <Youtube/>
                        </CircleComponent>
                        <h1>
                            Youtube
                        </h1>
                        <p>
                            <Translate id="sponsor.youtube">We have a YouTube channel where we make some tutorials on how to use our
                            library/server/frontend and much more...</Translate> 
                        </p>

                        <a href={"https://www.youtube.com/channel/UCD7J9LG08PmGQrF5IS7Yv9A"} target={"_blank"} rel={"noreferrer"}>
                            <Translate id="followChannel">Follow Channel</Translate>
                        </a>
                    </li>
                    <li>
                        <CircleComponent className={"circle"} bgColor={"#262626"}>
                            <GitHub/>
                        </CircleComponent>
                        <h1>
                            Github
                        </h1>
                        <p>
                            <Translate id="sponsor.giveastar">You can also give a star in our repository.</Translate><br/><br/><Translate id="sponsor.stardesc">This helps us a lot in bringing new developers to the project.</Translate>
                        </p>

                        <a href={"https://github.com/wppconnect-team/wppconnect"} target={"_blank"} rel={"noreferrer"}>
                            <Translate id="sponsor.gogithub">Go to the Github</Translate>
                        </a>
                    </li>
                </RepeaterWeDo>
            </Container>
        </Layout>
    );
};

export default ApoiarContainer;