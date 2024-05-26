import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Wotjd36() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setText("");
    navigate(`${text}`);
  };
  return (
    <div>
      Hi 재성!!
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력해봐"
          value={text}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
