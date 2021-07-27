import React, { useEffect, useState } from 'react';
import { getRealmUserToken } from "@mongodb-js/charts-embed-dom";
import { Link, withRouter } from "react-router-dom";
import { Stitch, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';
import { Form, Container } from "./styles";
import Logo from "../../logo-itajai-2019-cortado.ico"
import { login, isAuthenticated, getToken } from "../../services/auth";

//engmec.ricardopereira@gmail.com

export const client = Stitch.initializeAppClient('saudecharts-eabok',);

async function tryLogin(email, password) {
    const credential = new UserPasswordCredential(email, password);
    client.auth.loginWithCredential(credential).then(() => {
        // login(JSON.stringify(getRealmUserToken(client)));
        console.log('TOKEN', getRealmUserToken(client));
        // console.log('TOKEN2', JSON.parse(getToken()));
    });
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
                tryLogin(email, password);
                // const credential = new UserPasswordCredential(email, password);
                // const client = Stitch.initializeAppClient('saudecharts-eabok',); // Optional: ~REPLACE~ with your Realm App ID
                // console.log('clent auth:', client.auth.loginWithCredential(credential).then());
                // console.log('token:', getRealmUserToken(client));
                // // const response = await api.post("/sessions", { email, password });
                // // login(response.data.token);
                props.history.push("/dashboard");
                // if (isAuthenticated()) {
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
                <Link to="/page-1">Criar conta grátis</Link>
            </Form>
        </Container>
    );
}

export default withRouter(Login);