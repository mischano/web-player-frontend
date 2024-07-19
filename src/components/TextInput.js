import React from 'react';

const TextInput = ({ text, setText }) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        rows="4"
        cols="50"
      />
    </div>
  );
};

export default TextInput;
