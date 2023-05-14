import * as React from 'react'

const UseForm = (initVal: any) => {
  const [form, setForm] = React.useState(initVal);
  return [
    form,
    (formType: string, formValue: any) => {
      if (formType === 'reset') {
        return setForm(initVal);
      }
      return setForm({...form, [formType]: formValue});
    },
  ];
};

export default UseForm;