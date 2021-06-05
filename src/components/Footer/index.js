import React from 'react';
import {Container, Layout} from "./style";
import {GitHub, MessageCircle, Youtube} from "react-feather";

const Footer = () => {
    return (
        <Layout>
            <Container>
                <h2>
                    WPPConnect
                </h2>

                <div className={"main"}>
                    <div>
                        <h3>Recursos</h3>
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
                                    Servidor
                                </a>
                            </li>

                            <li>
                                <a href={"https://github.com/wppconnect-team/wppconnect-frontend"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    FrontEnd
                                </a>
                            </li>
                        </nav>
                    </div>

                    <div>
                        <h3>
                            Links Úteis
                        </h3>
                        <nav>
                            <li>
                                <a href={"https://discord.gg/fJe76FvR"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    Discord
                                </a>
                            </li>

                            <li>
                                <a href={"https://chat.whatsapp.com/C1ChjyShl5cA7KvmtecF3L"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    Grupo WhatsApp
                                </a>
                            </li>

                            <li>
                                <a href={"https://apoia.se/wppconnect"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    Apoia-se
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
                                <a href={"https://www.youtube.com/channel/UCD7J9LG08PmGQrF5IS7Yv9A"} rel={"noreferrer"}
                                   target={"_blank"}>
                                    <Youtube/>
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
