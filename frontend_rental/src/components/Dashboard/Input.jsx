import React, { useId } from "react";

const Input = ({
  type = "text",
  placeholder,
  className = "",
  label,
  ...props
}) => {
  const id = useId();
  return (
    <div className="py-3">
      {label && (
        <label className="inline-block text-xl mb-1 pl-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`py-4 px-3 rounded-md text-md border-teal-500 border border-1 ${className} `}
        id={id}
        {...props}
      />
    </div>
  );
};

export default Input;
