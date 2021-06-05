import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {Container, HeaderItem, Layout, SocialContainer} from "./style";
import {X} from "react-feather";
import DiscordImage from "../../../assets/DiscordIcon.png";
import WhatsAppImage from "../../../assets/WhatsAppIcon.png";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        border: 0,
        outline: 0,
        boxShadow: theme.shadows[5],
    },
}));

export default function ModalSupport({open, handleClose}) {
    const classes = useStyles();

    return (
        <div>
            <Modal
                className={classes.modal}
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Layout className={classes.paper}>
                    <HeaderItem>
                        <div/>
                        <X onClick={() => handleClose()}/>
                    </HeaderItem>

                    <Container>
                        <h1>
                            Escolha uma das opções
                        </h1>
                        <p>
                            Você pode escolher qual comunidade quer fazer parte, caso o WhatsApp estiver cheio você pode
                            escolher o Discord!
                        </p>

                        <SocialContainer>
                            <a href={"https://chat.whatsapp.com/C1ChjyShl5cA7KvmtecF3L"} rel={"noreferrer"} target={"_blank"}>
                                <img src={WhatsAppImage} alt={"WhatsApp"}/>
                            </a>
                            <a href={"https://discord.gg/fJe76FvR"} rel={"noreferrer"} target={"_blank"}>
                                <img src={DiscordImage} alt={"Discord"}/>
                            </a>
                        </SocialContainer>
                    </Container>
                </Layout>
            </Modal>
        </div>
    );
}