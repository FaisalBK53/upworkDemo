import { React } from 'react';

export const InputBoxComponent = ({ handleChange }) => {
  return <input placeholder="Search Users..." onChange={handleChange} />;
};
