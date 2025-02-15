import React from "react";
import { Link } from "react-router-dom";
import data from './data'

function Posts() {
  return (
    <div className="home">
      <ul className="case_list">
      {Object.entries(data).map(([postSlug, {heading, description}]) => (
        <li key={postSlug}>
        <Link to={`/portfol/blog/${postSlug}`}>
          <h3>{heading}</h3>
          <p><h6>{description}</h6></p>
          <p><h7>Let’s kick off our journey by understanding how the internet is like a giant puzzle, connecting different pieces to create a seamless experience.</h7></p>
          <p><span>Read More {">>"}</span></p>
          <br/>
        </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default Posts;