import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const post = useLoaderData();
  const { userId, id, title, body } = post;

  const [comments, setComments] = useState([]);

  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setAuthor(data));
  }, [id]);

  const postComments = comments.filter((comment) => comment.postId === id);

  return (
    <div className="mt-3 px-10">
      <h1 className="text-5xl font-bold text-center mb-10 text-purple-900 ">
        Posts Details
      </h1>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            src="data:image/jpeg;base64,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"
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{body}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Author: {author.name}</button>
          </div>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-center m-10 text-purple-500 ">
        Comments
      </h1>

      <div className="">
        {postComments.map((comment) => (
          <p className="mb-3" key={comment.id}>
            <div className="card lg:card-side bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-cyan-700	">{comment.body}</h2>
                <p className="text-cyan-500">{comment.email}</p>
              </div>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
};

export default CardDetails;
