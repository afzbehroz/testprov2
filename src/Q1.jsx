import { useState } from "react";

function Q1() {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  function addComment() {
    if (input === "") return;
    setComments([...comments, input]);
    setInput("");
  }

  function removeComment(index) {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  }

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addComment}>Add</button>

      {comments.map((comment, index) => (
        <div key={index}>
          {comment}
          <button onClick={() => removeComment(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Q1;
