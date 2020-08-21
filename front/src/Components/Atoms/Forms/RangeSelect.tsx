import React, { useEffect, useState } from 'react';
import nouislider from 'nouislider';

const Nouislider = ({
  animate = true,
  behaviour = 'tap',
  className = null,
  clickablePips = false,
  connect = false,
  direction = 'ltr',
  disabled = false,
  margin = null,
  limit = null,
  keyboardSupport = true,
  id = null,
  padding = 0,
  pips = null,
  snap = false,
  step = null,
  style = null,
  orientation = 'horizontal',
  tooltips = false,
  start,
  range,
  onChange = () => {},
  onEnd = () => {},
  onSet = () => {},
  onSlide = () => {},
  onStart = () => {},
  onUpdate = () => {},
}: NouisliderProps) => {
  const [slider, setSlider] = useState(null);
  const sliderContainer = React.createRef<any>();

  // functions

  const clickOnPip = (pip: { target: { getAttribute: (arg0: string) => void } }) => {
    const value = Number(pip.target.getAttribute('data-value'));
    slider.set(value);
  };
  const toggleDisable = (disable: any) => {
    const sliderHTML = sliderContainer.current;
    if (sliderHTML) {
      if (!disable) {
        sliderHTML.removeAttribute('disabled');
      } else {
        sliderHTML.setAttribute('disabled', 'true');
      }
    }
  };
  const updateRange = (rangeValue: any) => {
    const sliderHTML = sliderContainer.current;
    sliderHTML.noUiSlider.updateOptions({ rangeValue });
  };

  const createSlider = () => {
    const sliderComponent = nouislider.create(sliderContainer.current, {
      animate,
      behaviour,
      connect,
      direction,
      margin,
      limit,
      padding,
      pips,
      snap,
      step,
      orientation,
      tooltips,
      start,
      range,
    });
    if (onStart) sliderComponent.on('start', onStart);
    if (onSlide) sliderComponent.on('slide', onSlide);
    if (onUpdate) sliderComponent.on('update', onUpdate);
    if (onChange) sliderComponent.on('change', onChange);
    if (onSet) sliderComponent.on('set', onSet);
    if (onEnd) sliderComponent.on('end', onEnd);
    setSlider(sliderComponent);
  };

  useEffect(() => {
    const sliderHTML = sliderContainer.current;
    if (sliderHTML) {
      toggleDisable(disabled);
      createSlider();
    }
  }, []);

  useEffect(() => {
    if (clickablePips) {
      const sliderHTML = sliderContainer.current;
      sliderHTML
        .querySelectorAll('.noUi-value')
        .forEach(
          (pip: {
            style: { cursor: string };
            addEventListener: (arg0: string, arg1: (pip: any) => void) => void;
          }) => {
            // eslint-disable-next-line no-param-reassign
            pip.style.cursor = 'pointer';
            pip.addEventListener('click', clickOnPip);
          },
        );
    }
    return () => {
      const sliderHTML = sliderContainer.current;
      if (slider) slider.destroy();
      if (sliderHTML) {
        sliderHTML
          .querySelectorAll('.noUi-value')
          .forEach(
            (pip: { removeEventListener: (arg0: string, arg1: (pip: any) => void) => void }) => {
              pip.removeEventListener('click', clickOnPip);
            },
          );
      }
    };
  }, [slider]);

  useEffect(() => {
    updateRange(range);
    if (slider) {
      slider.set(start);
    }
    toggleDisable(disabled);
  }, [start, disabled, range]);

  const options: any = {};
  if (id) {
    options.id = id;
  }
  if (className) {
    options.className = className;
  }
  return (
    <>
      <style jsx global>
        {`
          .noUi-target,
          .noUi-target * {
            -webkit-touch-callout: none;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-user-select: none;
            -ms-touch-action: none;
            touch-action: none;
            -ms-user-select: none;
            -moz-user-select: none;
            user-select: none;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          .noUi-target {
            position: relative;
            direction: ltr;
          }
          .noUi-base,
          .noUi-connects {
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 1;
          }
          /* Wrapper for all connect elements.
 */
          .noUi-connects {
            overflow: hidden;
            z-index: 0;
          }
          .noUi-connect,
          .noUi-origin {
            will-change: transform;
            position: absolute;
            z-index: 1;
            top: 0;
            left: 0;
            -ms-transform-origin: 0 0;
            -webkit-transform-origin: 0 0;
            -webkit-transform-style: preserve-3d;
            transform-origin: 0 0;
            transform-style: flat;
          }
          .noUi-connect {
            height: 100%;
            width: 100%;
          }
          .noUi-origin {
            height: 10%;
            width: 10%;
          }
          /* Offset direction
 */
          html:not([dir='rtl']) .noUi-horizontal .noUi-origin {
            left: auto;
            right: 0;
          }
          /* Give origins 0 height/width so they don't interfere with clicking the
 * connect elements.
 */
          .noUi-vertical .noUi-origin {
            width: 0;
          }
          .noUi-horizontal .noUi-origin {
            height: 0;
          }
          .noUi-handle {
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            position: absolute;
          }
          .noUi-touch-area {
            height: 100%;
            width: 100%;
          }
          .noUi-state-tap .noUi-connect,
          .noUi-state-tap .noUi-origin {
            -webkit-transition: transform 0.3s;
            transition: transform 0.3s;
          }
          .noUi-state-drag * {
            cursor: inherit !important;
          }
          /* Slider size and handle placement;
 */
          .noUi-horizontal {
            height: 18px;
          }
          .noUi-horizontal .noUi-handle {
            width: 34px;
            height: 28px;
            left: -17px;
            top: -6px;
          }
          .noUi-vertical {
            width: 18px;
          }
          .noUi-vertical .noUi-handle {
            width: 28px;
            height: 34px;
            left: -6px;
            top: -17px;
          }
          html:not([dir='rtl']) .noUi-horizontal .noUi-handle {
            right: -17px;
            left: auto;
          }
          /* Styling;
 * Giving the connect element a border radius causes issues with using transform: scale
 */
          .noUi-target {
            background: #fafafa;
            border-radius: 4px;
            border: 1px solid #d3d3d3;
            box-shadow: inset 0 1px 1px #f0f0f0, 0 3px 6px -5px #bbb;
          }
          .noUi-connects {
            border-radius: 3px;
          }
          .noUi-connect {
            background: #3fb8af;
          }
          /* Handles and cursors;
 */
          .noUi-draggable {
            cursor: ew-resize;
          }
          .noUi-vertical .noUi-draggable {
            cursor: ns-resize;
          }
          .noUi-handle {
            border: 1px solid #d9d9d9;
            border-radius: 3px;
            background: #fff;
            cursor: default;
            box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ebebeb, 0 3px 6px -3px #bbb;
          }
          .noUi-active {
            box-shadow: inset 0 0 1px #fff, inset 0 1px 7px #ddd, 0 3px 6px -3px #bbb;
          }
          /* Handle stripes;
 */
          .noUi-handle:before,
          .noUi-handle:after {
            content: '';
            display: block;
            position: absolute;
            height: 14px;
            width: 1px;
            background: #e8e7e6;
            left: 14px;
            top: 6px;
          }
          .noUi-handle:after {
            left: 17px;
          }
          .noUi-vertical .noUi-handle:before,
          .noUi-vertical .noUi-handle:after {
            width: 14px;
            height: 1px;
            left: 6px;
            top: 14px;
          }
          .noUi-vertical .noUi-handle:after {
            top: 17px;
          }
          /* Disabled state;
 */
          [disabled] .noUi-connect {
            background: #b8b8b8;
          }
          [disabled].noUi-target,
          [disabled].noUi-handle,
          [disabled] .noUi-handle {
            cursor: not-allowed;
          }
          /* Base;
 *
 */
          .noUi-pips,
          .noUi-pips * {
            -moz-box-sizing: border-box;
            box-sizing: border-box;
          }
          .noUi-pips {
            position: absolute;
            color: #999;
          }
          /* Values;
 *
 */
          .noUi-value {
            position: absolute;
            white-space: nowrap;
            text-align: center;
          }
          .noUi-value-sub {
            color: #ccc;
            font-size: 10px;
          }
          /* Markings;
 *
 */
          .noUi-marker {
            position: absolute;
            background: #ccc;
          }
          .noUi-marker-sub {
            background: #aaa;
          }
          .noUi-marker-large {
            background: #aaa;
          }
          /* Horizontal layout;
 *
 */
          .noUi-pips-horizontal {
            padding: 10px 0;
            height: 80px;
            top: 100%;
            left: 0;
            width: 100%;
          }
          .noUi-value-horizontal {
            -webkit-transform: translate(-50%, 50%);
            transform: translate(-50%, 50%);
          }
          .noUi-rtl .noUi-value-horizontal {
            -webkit-transform: translate(50%, 50%);
            transform: translate(50%, 50%);
          }
          .noUi-marker-horizontal.noUi-marker {
            margin-left: -1px;
            width: 2px;
            height: 5px;
          }
          .noUi-marker-horizontal.noUi-marker-sub {
            height: 10px;
          }
          .noUi-marker-horizontal.noUi-marker-large {
            height: 15px;
          }
          /* Vertical layout;
 *
 */
          .noUi-pips-vertical {
            padding: 0 10px;
            height: 100%;
            top: 0;
            left: 100%;
          }
          .noUi-value-vertical {
            -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%);
            padding-left: 25px;
          }
          .noUi-rtl .noUi-value-vertical {
            -webkit-transform: translate(0, 50%);
            transform: translate(0, 50%);
          }
          .noUi-marker-vertical.noUi-marker {
            width: 5px;
            height: 2px;
            margin-top: -1px;
          }
          .noUi-marker-vertical.noUi-marker-sub {
            width: 10px;
          }
          .noUi-marker-vertical.noUi-marker-large {
            width: 15px;
          }
          .noUi-tooltip {
            display: block;
            position: absolute;
            border: 1px solid #d9d9d9;
            border-radius: 3px;
            background: #fff;
            color: #000;
            padding: 5px;
            text-align: center;
            white-space: nowrap;
          }
          .noUi-horizontal .noUi-tooltip {
            -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0);
            left: 50%;
            bottom: 120%;
          }
          .noUi-vertical .noUi-tooltip {
            -webkit-transform: translate(0, -50%);
            transform: translate(0, -50%);
            top: 50%;
            right: 120%;
          }
        `}
      </style>
      <div {...options} ref={sliderContainer} style={style} />
    </>
  );
};

const sortObjectKeys = (obj: { [s: string]: unknown } | ArrayLike<unknown>) =>
  Object.entries(obj)
    .sort()
    .reduce((o, [k, v]) => ((o[k] = v), o), {});

const isEqual = (val1: string | number, val2: string | number) => {
  if (typeof val1 === 'number' && typeof val2 === 'number') return val1 === val2;
  if (typeof val1 === 'string' && typeof val2 === 'string') return val1 === val2;
  if (Array.isArray(val1) && Array.isArray(val2)) {
    return JSON.stringify(val1) === JSON.stringify(val2);
  }
  if (typeof val1 === 'object' && typeof val2 === 'object') {
    return JSON.stringify(sortObjectKeys(val1)) === JSON.stringify(sortObjectKeys(val2));
  }
  return false;
};

const areEqual = (
  prevProps: { start: any; disabled: any; range: any },
  nextProps: { start: any; disabled: any; range: any },
) => {
  const { start, disabled, range } = prevProps;
  return (
    isEqual(nextProps.start, start) &&
    nextProps.disabled === disabled &&
    isEqual(nextProps.range, range)
  );
};
export default React.memo(Nouislider, areEqual);
