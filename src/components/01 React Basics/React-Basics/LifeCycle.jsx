import { Component } from 'react';

class LifeCycle extends Component {
  constructor(props) {
    super(props);


    this.state = {
      name: 'Blacklion567'
    };
    console.log('1-Constructor');
  }

  static getDrivedStateFromProps(props, state) {
    console.log('2-getDrivedStateFromProps');
    if (state.name === 'Blacklion567') {
      return {
        name: 'Chrisimos'
      };
    }
    return null;
  }

  componentDidMount() {
    console.log('4-componentDidMount');
  }
  componentWillUnmount() {
    console.log('5-componentWillUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('x-shouldComponentUpdate');
    if (nextState.name === 'Blacklion567') {
      return false;
    }
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    let age = 20;
    return age;
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('x-componentDidUpdate');
    // console.log(prevProps);
    // console.log(this.state);
    // console.log(prevState);
    console.log(snapshot);
  }


  render() {
    console.log('3-render');
    return (
      <>
        <div>{this.state.name}</div>
        <div onClick={() => this.setState({ name: 'Bringcola' })}>
          Change Name
        </div>

      </>
    );
  }
}

export default LifeCycle;
