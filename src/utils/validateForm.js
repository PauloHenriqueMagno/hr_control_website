import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

/**
* This function will receive an schema to validate a form.
*
* It will return { register, handleSubmit, errors }
*/

const validateForm = (schema) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm({
    resolver: yupResolver(schema),
  });

  return { register, handleSubmit, errors };
};

export default validateForm;
