import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  renderArticleLink = (title = true, desc = true, date = true) => {
    return (
      <div className="article-link">
        <img
          className="article-link-image"
          src="https://placeimg.com/1000/563/any"
        />
        {this.renderArticleLinkDetails(title, desc, date)}
      </div>
    );
  };

  renderArticleLinkDetails = (
    title = true,
    description = true,
    date = true
  ) => {
    return (
      <div className="article-link-details">
        {title ? <h3>Rebuilding the clone army in 7 days. A devlog.</h3> : ""}
        {description ? (
          <p className="article-sneakpeek">
            This comprehensive guide shows how to use CSS transitions! A
            back-to-basics look at the fundamental building blocks we need to
            create microinteractions and other animations.
          </p>
        ) : (
          ""
        )}
        {date ? <p className="article-date">2 days ago</p> : ""}
      </div>
    );
  };

  renderFilter = () => {
    return (
      <div id="index-filter">
        <div id="index-filter-category">
          <a href="#" className="active">
            All
          </a>
          <a href="#">Thoughts</a>
          <a href="#">Reviews</a>
          <a href="#">Devlogs</a>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div id="main">
          <aside>
            <div id="post-slider-auto-items">
              <h2>Popular Right Now</h2>
              <div id="post-slider-auto-items-list">
                {this.renderArticleLinkDetails(true, false, true)}
                {this.renderArticleLinkDetails(true, false, true)}
                {this.renderArticleLinkDetails(true, false, true)}
                {this.renderArticleLinkDetails(true, false, true)}
                {this.renderArticleLinkDetails(true, false, true)}
                {this.renderArticleLinkDetails(true, false, true)}
              </div>
            </div>
          </aside>
          <div id="article-list">
            <h2>Recently Published</h2>
            {this.renderArticleLink()}
            {this.renderArticleLink()}
            {this.renderArticleLink()}
            {this.renderArticleLink()}
            {this.renderArticleLink()}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
