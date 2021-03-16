import React from "react";
const generate = require("placeholder-generator");

class ArticleLink extends React.Component {
  constructor(props) {
    super(props);
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
        <line x1="9 " y1="12" x2="19" y2="12" />
        <line x1="15" y1="16" x2="19" y2="12" />
        <line x1="15" y1="8" x2="19" y2="12" />
      </svg>
    );
  };

  render() {
    return (
      <div className="article-link" style={{ position: "relative" }}>
        {/* <div className="article-image-preview" /> */}
        {(() => {
          if (this.props.renderArrow) {
            return (
              <div
                className="article-arrow-container"
                style={{ position: "absolute", top: 0, left: "-28px" }}
              >
                {this.renderRightArrow()}
              </div>
            );
          }
        })()}
        {(() => {
          if (this.props.title) {
            return (
              <h3 className="article-title">
                {generate(Math.round(Math.random() * 50 + 25))}
              </h3>
            );
          }
        })()}
        {(() => {
          if (this.props.subTitle) {
            return (
              <p className="article-sub-title">
                {generate(Math.round(Math.random() * 25 + 25))}
              </p>
            );
          }
        })()}
        {(() => {
          if (this.props.description) {
            return (
              <p className="article-description">
                {generate(Math.round(Math.random() * 100 + 25))}
              </p>
            );
          }
        })()}
      </div>
    );
  }
}

export default ArticleLink;
