import React, {useEffect, useState} from "react";
import {Container, Layout} from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalStarGithub from "../../components/ModalStarGithub";
import moment from "moment";
import HeroContainer from "../../components/Home/Hero";
import AboutContainer from "../../components/Home/AboutUs";
import ServidorContainer from "../../components/Home/Servidor";
import FrontendContainer from "../../components/Home/Frontend";
import SplashScreen from "../SplashScreen";
import SupportContainer from "../../components/Home/Support";
import DockerContainer from "../../components/Home/Docker";
import ApoiarContainer from "../../components/Home/Apoiar";
import ModalSupport from "../../components/Home/ModalSupport";

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [openSupport, setOpenSupport] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenSupport = () => {
        setOpenSupport(true);
    };

    const handleCloseSupport = () => {
        setOpenSupport(false);
    };

    useEffect(() => {
        setTimeout(() => {
            const modalStorage = localStorage.getItem("@WPPConnect-modal-wpp");
            if (!modalStorage) {
                localStorage.setItem("@WPPConnect-modal-wpp", JSON.stringify({timestamp: moment()}));
                handleOpen();
            } else {
                let today = moment(moment());
                let oldDate = moment(JSON.parse(localStorage.getItem("@WPPConnect-modal-wpp")).timestamp);
                if (today.diff(oldDate, "days") >= 3) {
                    localStorage.setItem("@WPPConnect-modal-wpp", JSON.stringify({timestamp: moment()}));
                    handleOpen();
                }
            }
        }, 3000);

        return () => {
            setOpen(false);
        };
    }, []);

    return (
        loading ? (
            <SplashScreen/>
        ) : (
            <Layout>
                <Header/>
                <ModalStarGithub open={open} handleClose={handleClose}/>
                <ModalSupport open={openSupport} handleClose={handleCloseSupport}/>

                <Container>
                    <HeroContainer/>
                    <AboutContainer/>
                    <ServidorContainer/>
                    <FrontendContainer/>
                    <DockerContainer/>
                    <ApoiarContainer/>
                    <SupportContainer handleOpenSupport={handleOpenSupport}/>
                    <Footer/>
                </Container>
            </Layout>
        )
    );
};

export default HomePage;