import React from 'react';
import css from 'styled-jsx/css';

const styles = css`
  .up,
  .down {
    width: 24px;
    height: 24px;
    display: block;
    fill: #6d6d6d;
    position: absolute;
    top: 0;
    outline: none;
    background-color: #fff;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #6d6d6d;
    -webkit-transition: all 400ms;
    transition: all 400ms;
    padding: 0 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

const ButtonCircle = props => (
  <>
    <style jsx>{styles}</style>
    <span className={props.className} role="button" tabIndex={-1} onClick={props.onClick}>
      <svg
        version="1.1"
        id={props.className}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="100%"
        viewBox="0 0 357 357"
        xmlSpace="preserve">
        <g>
          <g>
            {props.className == 'down' ? (
              <path d="M357,204H0v-51h357V204z" />
            ) : (
              <path d="M357,204H204v153h-51V204H0v-51h153V0h51v153h153V204z" />
            )}
          </g>
        </g>
      </svg>
    </span>
  </>
);

export default ButtonCircle;
