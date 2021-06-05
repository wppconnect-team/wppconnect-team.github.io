import React from 'react';
import {Buttons, Container, Layout, Link, LogoWPP} from "./style";
import {GitHub, Menu} from "react-feather";

const Header = () => {
    return (
        <Layout>
            <Container>
                <LogoWPP>
                    WPP<b>Connect</b>
                </LogoWPP>

                <Buttons>
                    <ul className="secondary-nav">
                        <li>
                            <Link
                                href="https://wppconnect-team.github.io/wppconnect/"
                                target={"_blank"}
                            >
                                Documentação
                            </Link>
                        </li>

                        <li className={"donate"}>
                            <Link
                                href="https://apoia.se/wppconnect"
                                target={"_blank"}
                            >
                                Apoie-nos
                            </Link>
                        </li>
                    </ul>
                </Buttons>

                <div className={"menu-mobile"}>
                    <Menu/>
                </div>
            </Container>
        </Layout>
    );
};

export default Header;