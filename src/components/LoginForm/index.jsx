import { DivBtn, DivForm, EnterBtn, FormBox, LoginBox, TitleLogin } from "./style";
import {LoginIcon, MailIcon, LockClosedIcon} from "@heroicons/react/solid"
// import { useAccount } from "../../providers/Account";
// import { useForm } from "react-hook-form";

const LoginForm = () => {
    // const {login} = useAccount();
    // const {register, handleSubmit} = useForm

    // const onSubmit = (data) => {
    //     login(data);
    //     console.log(data)
    // }

    return (
        <LoginBox>
            <DivForm>
                <TitleLogin>Login</TitleLogin>
                <FormBox
                //  onSubmit={handleSubmit(onSubmit)}
                 >
                    <label>
                        <MailIcon />
                        E-mail:
                    </label>
                    <input type="text"
                    // {...register("email")}
                    />
                    <label>
                        <LockClosedIcon />
                        Senha:
                    </label>
                    <input type="password"
                    // {...register("password")}
                    />
                </FormBox>
                <DivBtn>
                    <EnterBtn type="submit">
                        <LoginIcon />
                        Entrar
                    </EnterBtn>
                </DivBtn>
            </DivForm>
        </LoginBox>
    )
}

export default LoginForm;