import React, { useState } from "react";

function Assignments(props) {
  const [assignment, setAssignment] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!assignment) {
      return;
    }

    console.log({ assignment });
  };

  return (
    <>
      <h1>Assignment Submission</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Assignment:
          <input
            type="file"
            onChange={(e) => setAssignment(e.target.files[0])}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Assignments;
