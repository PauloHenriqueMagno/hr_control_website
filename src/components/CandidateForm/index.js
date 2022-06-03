import * as yup from "yup";

import { toast } from 'react-toastify';

import InputComponent from "../Input";

import {
  ButtonSubmitStyled,
  FormStyled,
  HSecondStyled,
  PStyled,
} from "./style";

import validateForm from "../../utils/validateForm";

import api from "../../services/api";

const CandidateForm = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Insira um e-mail valido")
      .required("E-mail é necessario"),

    name: yup.string().required("Nome é necessario"),

    pdf_file: yup.mixed()
      .test("Arquivo selecionado", "Arquivo pdf é necessario",
        (value) => !!value[0]
      )
      .test("Arquivo extensão", "Arquivo deve ser um pdf",
        (value) => !!value[0]? value[0].name.includes(".pdf") : false
      )
  });

  const { register, handleSubmit, errors } = validateForm(schema);

  const submit = (data) => {
    let newData = new FormData();

    newData.append('email', data["email"]);
    newData.append('name', data["name"]);
    newData.append('pdf_file', data["pdf_file"][0] );

    api
      .post('/candidates/', newData, {
        headers: { 
          "Content-Type": "multipart/form-data"
        },
      })
      .then((response) => {
        toast.success("Currículo enviado")
      })
      .catch((error) => {
        if (!!error.response.data.email) {
          toast.info("Email já em uso")
        } else {
          toast("Falha ao enviar")
        }
      })
  };

  return (
    <FormStyled onSubmit={handleSubmit(submit)}>
      <HSecondStyled>Candidate-se</HSecondStyled>

      <PStyled>E-mail:</PStyled>
      <InputComponent register={register("email")} type="text" />
      {errors.email?.message}

      <PStyled>Nome:</PStyled>
      <InputComponent register={register("name")} type="text" />
      {errors.name?.message}

      <div className="input">
        <PStyled>Curriculo:</PStyled>
        <InputComponent register={register("pdf_file")} type="file" />
      </div>
      {errors.pdf_file?.message}

      <ButtonSubmitStyled type="submit">Enviar</ButtonSubmitStyled>
    </FormStyled>
  );
};

export default CandidateForm;
