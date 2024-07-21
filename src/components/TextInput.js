import React from 'react';

const TextInput = ({ text, setText, onEnter }) => {
  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {  
      if (onEnter) {  // Calls the 'onEnter' function if it's provided as a prop.
        onEnter();
      }
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type the name of the song and the artist, and hit `Enter`."
        rows="4"
        cols="50"
      />
    </div>
  );
};

export default TextInput;
