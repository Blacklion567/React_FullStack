import { Component } from "react";
import JSON from '../../db.json';
import Props from "./React-Basics/Props";
// import NewsList from "./React-Basics/new_list";
import Footer from "./React-Basics/Footer";
import '../../css/01 React Basics/style.css';
import LifeCycle from "./React-Basics/LifeCycle";

class ReactBasics extends Component {

  state = {
    news: JSON,
    filtered: JSON,
    footerText: 'Blacklion567 Footer',
    active: true
  };
  getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.tittle.indexOf(keywords) > -1;
    });

    this.setState({
      filtered
    });
  };

  render() {

    const { filtered, footerText } = this.state;

    return (
      <>
        <Props keywords={this.getKeywords} />
        {/* <NewsList
          news={filtered}>
          <br />
          <h1>I am a Child</h1>

        </NewsList> */}
        {this.state.active ?
          <LifeCycle />
          : null}
        <button onClick={() => this.setState({ active: !this.state.active })}>
          Action
        </button>


        <Footer footerText={footerText} />




      </>
    );
  }
}

export default ReactBasics;
