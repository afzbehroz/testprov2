import { useState } from "react";

function Q2() {
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(email);

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSave() {
    setEmail(input);
    setIsEditing(false);
  }

  return (
    <div>
      {isEditing ? (
        <div>
          <input value={input} onChange={(e) => setInput(e.target.value)} />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>{email}</p>
          <button onClick={handleEdit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Q2;
