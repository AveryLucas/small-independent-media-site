import React from "react";
import axios from "axios";
import marked from "marked";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { post: null };
  }

  componentDidMount = () => {
    this.getPost();
    // let doop = marked()
  };

  async getPost() {
    const res = await axios.get(
      `http://localhost:5000/posts/${this.props.match.params.id}`
    );
    this.setState({ post: res.data });
  }

  render() {
    // console.log(this.state.post);
    if (this.state.post) {
      console.log(this.state.post);
      return (
        <div className="container">
          <h1>{this.state.post.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: marked(this.state.post.markdown),
            }}
          />
        </div>
      );
    } else {
      return <p>Fetching Data...</p>;
    }
  }
}

export default Main;
