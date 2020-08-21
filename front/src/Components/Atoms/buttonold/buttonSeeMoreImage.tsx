import React from 'react';
import Link from 'next/link';
import css from 'styled-jsx/css';

const styles = css`
  .rounded_btn {
    position: absolute;
    bottom: 40px;
    right: 25px;
    padding: 6px 15px;
    cursor: pointer;
    font-size: 15px;
    line-height: 20px;
    min-width: 135px;
    text-align: right;
    border-radius: 20px;
    color: rgb(8, 3, 3);
    border: 2px solid #fff;
    background: rgba(0, 0, 0, 0.54);
    -webkit-box-shadow: 1px 1px 3px #6d6d6d;
    box-shadow: 1px 1px 3px #6d6d6d;
  }
  @media screen and (max-width: 530px) {
    .rounded_btn {
      bottom: 20px;
      min-width: 115px;
      font-size: 12px;
      line-height: normal;
    }
  }

  button {
    cursor: pointer;
    font-family: inherit;
  }
`;

const ButtonSeeMoreImage = props => (
  <>
    <style jsx>{styles}</style>
    <button type="button" className="rounded_btn show_gallery" onClick={props.onClick}>
      <i className="icon icon_camera" />
      <span>{props.children}</span>
    </button>
  </>
);

export default ButtonSeeMoreImage;
