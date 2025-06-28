import React from "react";

function FormInput({ label, name, type }) {
  return (
    <fieldset className="fieldset w-full">
      <legend className="fieldset-legend  text-white">{label}</legend>
      <input
        type={type}
        name={name}
        className="input w-full font-bold"
        placeholder="Type here"
        required
      />
    </fieldset>
  );
}

export default FormInput;
