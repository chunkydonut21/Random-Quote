import React from "react";
import { connect } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { randomNumber: null };
  }
  componentWillMount() {
    this.setState({ randomNumber: Math.floor(Math.random() * 6) });
  }
  render() {
    return (
      <div id="wrapper">
        <div className="header">
          <h1>Random Quote Machine</h1>
        </div>
        <div id="quote-box" style={{ backgroundColor: this.props.color[this.state.randomNumber], height: '100%' }}>
          <h2 id="text">{this.props.random[this.state.randomNumber].title}</h2>
          <blockquote id="author"><em>-- {this.props.random[this.state.randomNumber].name}</em></blockquote>
          <div id="inner-wrapper">
            <div id="buttonOne">
              <button id="new-quote" onClick={() => this.setState({ randomNumber: Math.floor(Math.random() * 6) })}>Next</button>
            </div>
            <div id="buttonTwo">
              <a href="twitter.com/intent/tweet" id="tweet-quote">Share</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    random: state.random,
    color: state.color
  };
};

export default connect(mapStateToProps)(App);