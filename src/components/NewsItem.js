import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
        <div style={{position:"absolute", right:"0"}} className="fs-5">
          <span
            className="badge rounded-pill bg-danger"
          >
            {source}
          </span>
        </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://s.yimg.com/uu/api/res/1.2/Vl4.H7C1.1EY.s3C50gUPg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/reuters-finance.com/2e220d866203936d2166e11339063984"
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target={"_blank"}
              rel="noreferrer"
              className="btn btn-sm btn-dark fs-6"
            >
              Read More
            </a>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
