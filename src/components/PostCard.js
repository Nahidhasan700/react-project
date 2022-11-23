import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post, handleDelete }) => {
  const { userId, id, title, body } = post;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Z00mQQmKQrqtgMxAMZnlA6FgO7wnS3cX_1JwMAGrTH8Fbste3hXCimMeuvj8ijK4rAw&usqp=CAU"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <Link
            to={`/carddetail/${id}`}
            className="hover:text-sky-600 card-title text-center"
          >
            {title.slice(0, 20)} . . .
          </Link>
          <p>{body.slice(0, 100)} . . . </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleDelete(id)}
              className="btn btn-error text-white text-bold hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
