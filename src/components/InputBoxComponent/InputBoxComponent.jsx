import { React } from 'react';

export const InputBoxComponent = ({
  handleChange,
  onBlur,
  onFocus,
  className,
  placeholder,
}) => {
  return (
    <input
      onBlur={onBlur}
      onFocus={onFocus}
      className={className}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};
