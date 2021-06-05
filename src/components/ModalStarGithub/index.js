import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {Container, HeaderItem, Layout} from "./style";
import {X} from "react-feather";
import HeyImage from "../../assets/flamenco-waiting.png";

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
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function ModalStarGithub({open, handleClose}) {
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
                        <img src={HeyImage} alt={"Attention"} draggable={"false"}/>

                        <h1>
                            Ei, pera lá!
                        </h1>
                        <p>
                            Você já deixou sua ⭐ lá no github?
                        </p>

                        <p style={{marginTop: 5}}>
                            <b>Não???</b> Como não, pô? Isso ajuda a gente demais!
                        </p>

                        <iframe
                            src="https://ghbtns.com/github-btn.html?user=wppconnect-team&repo=wppconnect&type=star&count=true&size=large"
                            frameBorder="0" scrolling="0" title="GitHub"/>
                    </Container>
                </Layout>
            </Modal>
        </div>
    );
}