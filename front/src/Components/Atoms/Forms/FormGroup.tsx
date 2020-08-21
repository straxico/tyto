import React, { FunctionComponent } from 'react';
import css from 'styled-jsx/css';

const styles = css`
  :global(.form-group) {
    position: relative;
    margin-bottom: 1rem;
  }
`;

const FormGroup = props => (
  <>
    <style jsx>{styles}</style>
    <div className="form-group">{props.children}</div>
  </>
);

export default FormGroup;
