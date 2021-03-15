import React from "react";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  renderArticleLink = (title = true, description = true, date = true) => {
    return (
      <div className="article-link">
        {title ? <h3>Rebuilding the clone army in 7 days. A devlog.</h3> : ""}
        {description ? (
          <p className="article-sneakpeek">
            It may not reach the sublime heights of its predecesso.
          </p>
        ) : (
          ""
        )}
      </div>
    );
  };

  renderplaceholderblock(height = "100px") {
    return (
      <div
        style={{
          width: "100%",
          height,
          borderRadius: "3px",
          background: "#C4C4C4",
          opacity: 0.8,
        }}
      ></div>
    );
  }

  render() {
    return (
      <div>
        <div id="main">
          <aside>
            <div id="post-slider-auto-items">
              <h2>Popular Right Now</h2>
              <div id="post-slider-auto-items-list">
                {this.renderArticleLink(true, false, false)}
                {this.renderArticleLink(true, false, false)}
                {this.renderArticleLink(true, false, false)}
                {this.renderArticleLink(true, false, false)}
                {this.renderArticleLink(true, false, false)}
                {this.renderArticleLink(true, false, false)}
              </div>
            </div>
            {this.renderplaceholderblock("174px")}
            {this.renderplaceholderblock()}
            {this.renderplaceholderblock("306px")}
          </aside>
          <div id="article-list">
            <h2>Recently Published</h2>
            {this.renderArticleLink(true, true, true)}
            {this.renderArticleLink(true, true, true)}
            {this.renderArticleLink(true, true, true)}
            {this.renderArticleLink(true, true, true)}
            {this.renderArticleLink(true, true, true)}
            {this.renderArticleLink(true, true, true)}
            {this.renderArticleLink(true, true, true)}
            {this.renderArticleLink(true, true, true)}
            {this.renderArticleLink(true, true, true)}
            {this.renderArticleLink(true, true, true)}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
