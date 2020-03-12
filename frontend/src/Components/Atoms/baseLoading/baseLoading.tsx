import React from 'react';
import css from 'styled-jsx/css';

const styles = css`
  .loading {
    position: fixed;
    width: 100px;
    height: 100px;
    top: 50%;
    right: 50%;
    z-index: 100;
    border-radius: 50%;
    border: 14px solid transparent;
    border-top: 14px solid red;
    border-bottom: 14px solid red;
    animation: spin 600ms linear infinite;
    box-sizing: border-box;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
const BaseLoading = (props: { status: boolean; className: string }) => {
  return (
    <>
      <style jsx>{styles}</style>
      {props.status && <div className={props.className} />}
    </>
  );
};
export default BaseLoading;
