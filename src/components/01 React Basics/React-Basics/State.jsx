import React from "react";

class State extends React.Component {
  state = {
    name: 'blacklion567',
    title: 'The One',
    keyword: '',
    count: 0,
  };

  inputChangeHandler = (event) => {
    this.setState({
      keyword: event.target.value
    });
  };

  handleIncrement() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  handledecrement() {
    this.setState((state,) => ({
      count: state.count - 1
    }));
  }


  render() {

    return (
      <header>
        <div>Logo</div>
        <input type="text"
          onChange={this.inputChangeHandler}
        />
        <div>
          {this.state.title}
        </div>
        <div>{this.state.keyword}</div>
        <br />
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={() => this.handleIncrement()}>Increment</button>
          <button onClick={() => this.handledecrement()}>Decrement
          </button>

        </div>


      </header>
    );
  }
}



export default State;
