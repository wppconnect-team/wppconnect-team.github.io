import React, {useEffect} from 'react';
import {Layout} from "./styles";
import Logo from "../../assets/logo-wpp.png";

const SplashScreen = () => {
    return (
        <Layout>
            <div className={"content"}>
                <img src={Logo} alt={"WPPConnect"}/>
                <span className={"progress"}/>
            </div>
        </Layout>
    );
};

export default SplashScreen;
