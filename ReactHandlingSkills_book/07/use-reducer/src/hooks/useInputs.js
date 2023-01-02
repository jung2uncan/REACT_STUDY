import React, { useCallback, useState } from "react";

function useInputs(initailForm) {
  const [form, setForm] = useState(initailForm);

  //chage
  const onChange = useCallback((e) => {
    const [name, value] = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);

  const reset = useCallback(() => setForm(initailForm), [initailForm]);
  return [form, onChange, reset];
}

export default useInputs;
