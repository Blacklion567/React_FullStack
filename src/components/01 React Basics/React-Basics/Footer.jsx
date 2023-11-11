import { Component } from 'react';

class Footer extends Component {
  render() {

    const { footerText } = this.props;

    return (
      <footer>
        {footerText}
      </footer>
    );
  }
}


export default Footer;
