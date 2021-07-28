import React, { useEffect, useState } from 'react';
import { getRealmUserToken } from "@mongodb-js/charts-embed-dom";
import { Link, withRouter } from "react-router-dom";
import { Stitch, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';
import { Form, Container } from "./styles";
import Logo from "../../logo-itajai-2019-cortado.ico";
import { login, isAuthenticated, getToken } from "../../services/auth";

//engmec.ricardopereira@gmail.com

export const client = Stitch.initializeAppClient('saudecharts-eabok',);
export var logged = false;

async function tryLogin(email, password, props) {
    const credential = new UserPasswordCredential(email, password);
    console.log('AUTH 1 ==>>', client.auth.isLoggedIn);
    client.auth.loginWithCredential(credential).then(() => {
        console.log('AUTH 2 ==>>', client.auth.isLoggedIn);
        logged = true;
        // login(JSON.stringify(getRealmUserToken(client)));
        console.log('TOKEN', getRealmUserToken(client));
        login("client.auth.isLoggedIn");
        console.log("LOGGED:", isAuthenticated());
        props.history.push("/dashboard");
        // console.log('TOKEN2', JSON.parse(getToken()));
    });
    console.log('AUTH 3 ==>>', client.auth.isLoggedIn);
};

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        document.title = "Login";
    });

    const handleSignIn = async e => {
        e.preventDefault();
        // const { email, password } = this.state;
        if (!email || !password) {
            setError("Preencha e-mail e senha para continuar!");
        } else {
            console.log('Email and Password', email, password);
            try {
                tryLogin(email, password, props);
                // const credential = new UserPasswordCredential(email, password);
                // const client = Stitch.initializeAppClient('saudecharts-eabok',); // Optional: ~REPLACE~ with your Realm App ID
                // console.log('client auth:', client.auth.loginWithCredential(credential).then());
                // console.log('token:', getRealmUserToken(client));
                // logged = true;
                // props.history.push("/dashboard");
                // const response = await api.post("/sessions", { email, password });
                // // login(response.data.token);
                // if (getRealmUserToken(client)){//(isAuthenticated()) {
                //     console.log('debug 1');
                // }
                // else {
                //     console.log('debug: NÃO ESTÁ AUTENTICADO');
                // }
            } catch (err) {
                setError("Houve um problema com o login, verifique suas credenciais. T.T");
            }
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSignIn}>
                <img src={Logo} alt="Logo Itajaí" />
                {error && <p>{error}</p>}
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={e => setPassword(e.target.value)}
                />
                <button type="submit">Entrar</button>
                <hr />
                <Link to="/page-1">Page1</Link>
            </Form>
        </Container>
    );
}

export default withRouter(Login);