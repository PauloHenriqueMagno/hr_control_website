import { DivBtn, DivForm, EnterBtn, FormBox, LoginBox, TitleLogin } from "./style";
import {LoginIcon, MailIcon, LockClosedIcon} from "@heroicons/react/solid"

const LoginForm = () => {
    return (
        <LoginBox>
            <DivForm>
                <TitleLogin>Login</TitleLogin>
                <FormBox>
                    <label>
                        <MailIcon />
                        E-mail:
                    </label>
                    <input type="text" />
                    <label>
                        <LockClosedIcon />
                        Senha:
                    </label>
                    <input type="password" />
                </FormBox>
                <DivBtn>
                    <EnterBtn>
                        <LoginIcon />
                        Entrar
                    </EnterBtn>
                </DivBtn>
            </DivForm>
        </LoginBox>
    )
}

export default LoginForm;