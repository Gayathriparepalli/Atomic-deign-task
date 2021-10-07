import React from "react";
const InputField = ({ name, id }) => {
  return (
    <div class="col-md-6">
      <div class="form-group">
        <input
          type="text"
          id={id}
          class="form-control"
          placeholder={name}
          required="required"
        />
        <p class="help-block text-danger"></p>
      </div>
    </div>
  );
};
export default InputField;
