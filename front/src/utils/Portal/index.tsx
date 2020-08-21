import * as React from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends React.Component<PortalProps> {
  node: HTMLElement | null;

  el: HTMLElement | null;

  constructor(props: PortalProps) {
    super(props);
    if (typeof window !== 'undefined') {
      this.node =
        this.props.element && document.getElementById(this.props.element)
          ? document.getElementById(this.props.element)
          : document.body;
      this.el = document.createElement('div');
    }
  }

  componentDidMount() {
    if (this.node && this.el) {
      this.node.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (this.node && this.el) {
      this.node.removeChild(this.el);
    }
  }

  render() {
    const { children } = this.props;
    if (typeof window !== 'undefined' && this.el) {
      return ReactDOM.createPortal(children, this.el);
    }
    return null;
  }
}
