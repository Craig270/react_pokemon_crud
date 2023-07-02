import React, { useState, useEffect } from "react";
import "./UseEffectPractice.scss";

const UseEffectPractice = () => {
  const [resourceType, setResourceType] = useState("post");

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1 className="firstClass">{resourceType}</h1>
    </>
  );
};

export default UseEffectPractice;
