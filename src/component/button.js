import React from "react";

function ListItem(props) {
  const { post } = props;
  return (
    <li>
      {post.title}
      <br />
      {post.content}
    </li>
  );
}

class Toogle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      posts: [
        { id: 1, title: "Hello World", content: "Welcome to learning React!" },
        {
          id: 2,
          title: "Installation",
          content: "You can install React from npm."
        }
      ]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  handleNewClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  render() {
    const { isToggleOn, posts } = this.state;
    return (
      <React.Fragment>
        <button onClick={this.handleClick}>
          Using bind() <br />
          {isToggleOn ? "ON" : "OFF"}
        </button>
        <button onClick={() => this.handleClick()}>
          Call function in arrow syntax <br />
          {isToggleOn ? "ON" : "OFF"}
        </button>
        <button onClick={this.handleClick}>
          Define function in arrow syntax <br />
          {isToggleOn ? "ON" : "OFF"}
        </button>
        {posts.map((post, index) => {
          return <ListItem key={post.id.toString()} post={post} />;
        })}
      </React.Fragment>
    );
  }
}

export default Toogle;
