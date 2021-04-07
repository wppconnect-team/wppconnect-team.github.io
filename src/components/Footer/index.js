import React from 'react';
import {Container, Layout} from "./style";
import {GitHub, MessageCircle} from "react-feather";

const Footer = () => {
    return (
        <Layout>
            <Container>
                <h2>
                    WPPConnect
                </h2>

                <div className={"main"}>
                    <div>
                        <h3>Resources</h3>
                        <nav>
                            <li>
                                <a href={"https://github.com/wppconnect-team/wppconnect"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    WhatsApp Lib
                                </a>
                            </li>

                            <li>
                                <a href={"https://github.com/wppconnect-team/wppconnect-server"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    Server Code
                                </a>
                            </li>

                            <li>
                                <a href={"https://github.com/wppconnect-team/wppconnect-frontend"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    Front End Code
                                </a>
                            </li>
                        </nav>
                    </div>

                    <div>
                        <h3>
                            Company
                        </h3>
                        <nav>
                            <li>
                                <a href={"https://github.com/wppconnect-team/wppconnect"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    License
                                </a>
                            </li>

                            <li>
                                <a href={"https://chat.whatsapp.com/C1ChjyShl5cA7KvmtecF3L"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    Contact
                                </a>
                            </li>
                        </nav>
                    </div>

                    <div>
                        <h3>
                            Social
                        </h3>
                        <nav>
                            <li>
                                <a href={"https://github.com/wppconnect-team"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    <GitHub/>
                                </a>
                            </li>

                            <li>
                                <a href={"https://chat.whatsapp.com/C1ChjyShl5cA7KvmtecF3L"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    <MessageCircle/>
                                </a>
                            </li>
                        </nav>
                    </div>
                </div>
            </Container>
        </Layout>
    );
};

export default Footer;
