import React from "react";
import ArticleLink from "./ArticleLink";
import axios from "axios";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount = () => {
    this.getPost();
  };

  async getPost() {
    const res = await axios.get("http://localhost:5000/posts/");
    this.setState({ posts: res.data });
  }

  render() {
    return (
      <div className="container">
        <div id="article-list">
          <h2>Recently Published</h2>
          {this.state.posts.map((post) => {
            return <ArticleLink key={post._id} data={post} />;
          })}
        </div>
      </div>
    );
  }
}

export default Main;
