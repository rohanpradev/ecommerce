import { useState } from 'react';

const useForm = (initialState) => {
  const [fields, setValue] = useState(initialState);

  const handleChange = (evt) => {
    setValue({
      ...fields,
      [evt.target.name]: evt.target.value,
    });
  };
  return [fields, handleChange];
};

export default useForm;
