import styled from "styled-components";


export const LoginBox = styled.main`
    width: 100%;
`;

export const DivForm = styled.div`
    margin: 5em auto;
    width: 70%;
    display: flex;
    flex-direction: column;
`;

export const TitleLogin = styled.span`
    margin: .5em;
`;
export const FormBox = styled.form`
    display: flex;
    flex-direction: column;
    padding: 3em;
    line-height: 2em;
    label{
        display: flex;
    }
    svg{
        width: 1.5em;
        margin: 2px;
    }
`;
export const DivBtn = styled.div`
    display: flex;
    align-self: flex-end;
    padding: 3em;
`;
export const EnterBtn = styled.button`
    background-color: #85C38B;
    border-radius: 5px;
    padding: .5em;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    svg{
        width: 2em;
    }
`;