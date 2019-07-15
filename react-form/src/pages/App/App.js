import React from 'react';
import './App.css';
import { FormInput } from "../../components/controlled/FormInput/formInput";
import { FormRadio } from "../../components/controlled/FormRadio/formRadio";
import { FormCheckbox } from "../../components/controlled/FormCheckbox/formCheckbox";
import { FormSelect } from "../../components/controlled/FormSelect/formSelect";
import { NameForm } from "../../components/uncontrolled/NameForm/nameForm";

function App() {
  return (
    <div className="App">
      <FormInput />
      <FormRadio />
      <FormCheckbox />
      <FormSelect />
      <NameForm />
    </div>
  );
}

export default App;
