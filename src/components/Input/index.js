import { InputStyled } from "./style";

const InputComponent = ({ register, type, placeholder }) => {
  return <InputStyled {...register} type={type} placeholder={placeholder} />;
};

export default InputComponent;
