import React from 'react';
import defaultTheme from 'utils/token';

import ThemeProvider from 'Atoms/ThemeProvider';

class RenderInRtl extends React.PureComponent<any> {
  html = document.querySelector('html');

  componentDidMount() {
    if (this.html) {
      this.html.setAttribute('dir', 'rtl');
    }
  }

  componentWillUnmount() {
    if (this.html) {
      this.html.removeAttribute('dir');
    }
  }

  render() {
    return <ThemeProvider theme={defaultTheme}>{this.props.children}</ThemeProvider>;
  }
}

export default RenderInRtl;
