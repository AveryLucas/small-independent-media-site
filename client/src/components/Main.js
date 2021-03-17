import React from "react";
import ArticleLink from "./ArticleLink";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  generateRandomData = (ammount = 5) => {
    let titleList = [
      "Rebuilding the clone army in 7 days. A devlog.",
      "Ni no Kuni Wrath of the White Witch™ Remastered Review",
      "Ni no Kuni™ II: Revenant Kingdom Review",
      "How to trick your players into long grinds",
      "Loop Hero: Indie Spotlight",
      "I've decided to start doing Indie Spotlights",
      "Zero to slightly more in 30 days with Blender",
      "Magical chess in 4 days",
      "Being bored is the spice of life",
    ];
  };

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

  betterRender = () => {
    return (
      <div className="article-link" style={{ position: "relative" }}>
        <div
          className="article-arrow-container"
          style={{ position: "absolute", top: 0, left: "-28px" }}
        >
          {this.renderRightArrow()}
        </div>
        <h3>Rebuilding the clone army in 7 days. A devlog.</h3>
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

  renderRightArrow = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-arrow-narrow-right"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        stroke-width="1.3"
        stroke="#4433FF"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="7.5" y1="12" x2="19" y2="12" />
        <line x1="15" y1="16" x2="19" y2="12" />
        <line x1="15" y1="8" x2="19" y2="12" />
      </svg>
    );
  };

  render() {
    return (
      <div>
        {/* {this.renderRightArrow()} */}
        <div id="main">
          <aside>
            <div id="post-slider-auto-items">
              <h2>Popular Right Now</h2>
              <div id="post-slider-auto-items-list">
                {new Array(4).fill(null).map(() => {
                  return <ArticleLink title={true} renderArrow={true} />;
                })}
              </div>
            </div>
            {this.renderplaceholderblock("174px")}
            {this.renderplaceholderblock()}
            {this.renderplaceholderblock("306px")}
          </aside>
          <div id="article-list">
            <h2>Recently Published</h2>
            {new Array(10).fill(null).map(() => {
              return (
                <ArticleLink
                  title={true}
                  subTitle={Math.random() > 0.5}
                  description={true}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
