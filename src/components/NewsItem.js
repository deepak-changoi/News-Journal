import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ backgroundColor: "rgb(21 , 21 , 21)" }}>
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}....</h5>
          <p className="card-text">{description}....</p>
          <p className="card-text">
            <small className="text-muted">
              by {author ? author : "unknown author"} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-secondary"
            style={{ color: "white" }}
            style={{ backgroundColor: "rgb(21 , 21 , 21)" }}
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
