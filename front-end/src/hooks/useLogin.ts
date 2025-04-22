import { useState } from "react";

type InputField = {
  name: string;
  value: string;
};

type UseLoginProps = {
  data: InputField[];
};

export const useLogin = ({ data }: UseLoginProps) => {
  const [values, setValues] = useState<InputField[]>(data);

  const imprimeValores = () => {
    console.log(values);
  };
  return { imprimeValores };
};
