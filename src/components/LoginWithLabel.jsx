import React, { forwardRef, useId } from "react";

const LoginWithLabel = forwardRef(({ title, error, ...props }, ref) => {
  const id = useId();

  return (
    <div className="input_box">
      <label className="input_label" htmlFor={id}>
        {title}
      </label>
      <input className="input" id={id} {...props} ref={ref} />
      {error && <span className="input_error">{error}</span>}
    </div>
  );
});

export default LoginWithLabel;
