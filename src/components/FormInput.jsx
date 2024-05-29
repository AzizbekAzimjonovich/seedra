import React from "react";

function FormInput({ label, type, defaultValue, name }) {
  return (
    <div className="form-control">
      <label className="label">
        <soan className="label-text capitalize">{label}</soan>
      </label>
      <input
        type={type}
        defaultValue={defaultValue}
        name={name}
        className="input input-bordered"
      />
    </div>
  );
}

export default FormInput;
