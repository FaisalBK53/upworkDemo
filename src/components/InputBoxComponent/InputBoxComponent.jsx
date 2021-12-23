import { React } from 'react';

export const InputBoxComponent = ({ handleChange, onBlur, onFocus }) => {
  return (
    <input
      onBlur={onBlur}
      onFocus={onFocus}
      onChange={handleChange}
      placeholder="Search Users..."
    />
  );
};
