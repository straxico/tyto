import React, { Component } from 'react';
import Slide from './Slide';
import Arrow from './Arrow';

// https://medium.com/@renatorib/tackling-responsive-elements-in-react-and-why-ive-created-react-sizes-f7c87e3f9e64
//
//
//

class SimpleSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showPrevArrow: false,
      showNextArrow: true,
      currentIndex: 1,
      slideWidth: `calc(100% / ${this.props.settings.slidesToShow})`,
      translateValue: 0,
    };

    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.clickIndicator = this.clickIndicator.bind(this);
    this.checkStatus = this.checkStatus.bind(this);
  }

  componentDidMount() {
    this.props.settings.totalSlides = this.props.children.length;
    this.setState({ currentIndex: 1 });
    this.setState({
      slideWidth:
        window.document.querySelector('.slides-wrapper').clientWidth /
        this.props.settings.slidesToShow,
    });
  }

  goToPrevSlide() {
    this.setState(
      (prevState, prevProps) => ({
        currentIndex: prevState.currentIndex - prevProps.settings.slidesToScroll,
        translateValue:
          prevState.translateValue - prevState.slideWidth * prevProps.settings.slidesToScroll,
      }),
      () => {
        this.checkStatus();
      },
    );

    // if (this.state.currentIndex === 1) {
    //   this.setState(prevState => ({
    //     currentIndex: prevState.currentIndex + prevState.items.length - 1,
    //     translateValue: prevState.right - prevState.slider.width * (prevState.items.length - 1),
    //   }));
    // }
  }

  checkStatus() {
    if (this.state.currentIndex === 1) {
      this.setState({ showPrevArrow: false });
    } else if (
      this.state.currentIndex + this.props.settings.slidesToShow - 1 ===
      this.props.settings.totalSlides
    ) {
      this.setState({ showNextArrow: false });
    } else {
      this.setState({
        showPrevArrow: true,
        showNextArrow: true,
      });
    }
  }

  goToNextSlide() {
    this.setState(
      (prevState, prevProps) => ({
        currentIndex: prevState.currentIndex + prevProps.settings.slidesToScroll,
        // right: prevState.right - prevState.slider.width,
        translateValue:
          prevState.translateValue + prevState.slideWidth * prevProps.settings.slidesToScroll,
      }),
      () => {
        this.checkStatus();
      },
    );

    console.log(`before: ${this.state.currentIndex}`);
    console.log(`after: ${this.state.currentIndex + this.props.settings.slidesToScroll}`);

    // if (this.state.currentIndex === this.props.settings.totalSlides) {
    //   console.log(this.state.currentIndex);
    //   this.setState(prevState => ({
    //     currentIndex: prevState.currentIndex - this.props.settings.totalSlides + 1,
    //     translateValue: 0,
    //   }));
    // }
  }

  clickIndicator(e) {
    alert('indi');
    this.setState({
      currentIndex: parseInt(e.target.textContent, 10),
      right: this.slider.width - parseInt(e.target.textContent, 10) * this.slider.width,
    });
  }

  render() {
    return (
      <div className="slider">
        <div className="slides-wrapper">
          <div
            className="slides"
            style={{
              width: this.state.slideWidth * this.props.settings.totalSlides,
              transform: `translateX(${this.state.translateValue}px)`,
            }}>
            {this.props.children.map((item, index) => (
              <Slide style={{ width: this.state.slideWidth }} key={index}>
                {item}
              </Slide>
            ))}
          </div>
        </div>
        {/* <div className="arrows-wrapper"> */}
        <Arrow type="prev" show={this.state.showPrevArrow} goTo={this.goToPrevSlide} />
        <Arrow type="next" show={this.state.showNextArrow} goTo={this.goToNextSlide} />
        {/* </div> */}
        {/* <div className="indicators-wrapper" style={{ display: 'none' }}>
          <ul className="indicators">
            {this.state.items.map(
              (item, index) => (
                <li key={item}>
                  <button
                    type="button"
                    className={index + 1 === this.state.currentIndex ? 'active-indicator' : ''}
                    onClick={this.clickIndicator}>
                    {index + 1}
                  </button>
                </li>
              ),
              this,
            )}
          </ul>
        </div> */}
        <style jsx>
          {`
            .slider {
              position: relative;
              display: block;
              box-sizing: border-box;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
              -webkit-touch-callout: none;
              -khtml-user-select: none;
              -ms-touch-action: pan-y;
              touch-action: pan-y;
              -webkit-tap-highlight-color: transparent;
            }
            .slides-wrapper {
              position: relative;
              display: block;
              overflow: hidden;
              margin: 0;
              padding: 0;
            }

            .slides {
              width: 100%;
              position: relative;
              top: 0;
              left: 0;
              display: block;
              margin-left: auto;
              margin-right: auto;
              transition: transform ease-out 0.45s;
            }
            .slides:after {
              clear: both;
            }

            .slides:before,
            .slides:after {
              display: table;
              content: '';
            }

            :global(.slide) {
              float: right;
            }

            .slider-item,
            .hide {
              float: right;
              position: relative;
              text-transform: uppercase;
              color: #fff;
              line-height: 250px;
              font-size: 20px;
              background: #383838;
              text-align: center;
              border-radius: 4px !important;
              transition: all 0.2s linear;
            }

            .arrows-wrapper {
              width: 100%;
              display: flex;
              justify-content: space-between;
              position: absolute;
              top: 50%;
              transform: translateY(-100%);
            }

            .slider :global(button) {
              background: #6378f1;
              border: #f5f5f5 5px solid;
              color: #fff;
              height: 44px;
              width: 44px;
              padding: 0;
              position: absolute;
              top: 50%;
              left: 0;
              margin: 0;
              border-radius: 50%;
              cursor: pointer;
              outline: none;
              transition: all 0.2s linear;
              transform: translateX(-30%) translateY(-100%);
            }

            .slider :global(button.hide) {
              visibility: hidden;
            }

            .slider :global(.prev-button) {
              left: auto;
              right: 0;
              transform: rotateY(180deg) translateX(-30%) translateY(-100%);
            }

            .slider :global(button svg) {
              width: 60%;
              vertical-align: middle;
              fill: white;
            }

            /* indicators */
            .indicators {
              width: 400px;
              position: absolute;
              bottom: -4px;
              z-index: 2 !important;
              text-align: center;
            }

            .indicators .container-item {
              display: inline-block;
              margin-right: 5px;
              width: 12px;
              height: 12px;
              font-size: 16px;
              line-height: 30px;
              border-radius: 100%;
              text-align: center;
              background-color: rgba(255, 255, 255, 0.8);
              color: #333;
              text-indent: -9999px;
              cursor: pointer;
              transition: all 0.2s linear;
            }

            .indicators .container-item:last-child {
              margin-right: 0;
            }

            .active-indicator {
              background: rgba(0, 0, 0, 0.3) !important;
              color: #fff !important;
            }
          `}
        </style>
      </div>
    );
  }
}

SimpleSlider.defaultProps = {
  settings: {
    slidesToShow: 4,
    slidesToScroll: 3,
  },
};

export default SimpleSlider;
