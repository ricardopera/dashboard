import React, { useEffect } from 'react';
import { Stitch, UserPasswordCredential } from 'mongodb-stitch-browser-sdk';
import { Form, Container } from "./styles";
import Logo from "../../logo-itajai-2019-cortado.ico"

function Login(props) {
    useEffect(() => {
        document.title = "Login";
    });
    return (
        <Container>
            <Form onSubmit={console.log('oi')}>
                <img src={Logo} alt="Logo Itajaí" />
                {/* {this.state.error && <p>{this.state.error}</p>} */}
                <input
                    type="email"
                    placeholder="Endereço de e-mail"
                // onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                    type="password"
                    placeholder="Senha"
                // onChange={e => this.setState({ password: e.target.value })}
                />
                <button type="submit">Entrar</button>
                <hr />
                {/* <Link to="/signup">Criar conta grátis</Link> */}
            </Form>
        </Container>
    );
}

export default Login;