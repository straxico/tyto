import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import InputControl from 'Atoms/Forms/InputControl';
import ButtonCircle from 'Atoms/buttonold/buttonCircle';

import css from 'styled-jsx/css';

const styles = css`
  .gsnum_field {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .gs_action {
    width: 62px;
    height: 26px;
    margin-top: -13px;
    position: absolute;
    top: 50%;
    left: 6px;
  }

  .gs_txt {
    position: absolute;
    top: 50%;
    right: 0px;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    margin-top: -10px;
    color: #757575;

    .gs_num {
      margin-left: 2px;
      min-width: 1em;
      text-align: right;
      display: inline-block;
    }
  }

  :global(.up) {
    left: 0;
  }
  :global(.down) {
    right: 0;
  }
`;

type Props = {
  guestNum: number;
  setGuestNum: any;
  size?: 'lg' | 'sm';
  icon?: string;
};

const GuestControl = ({ guestNum = 1, setGuestNum, size, icon }: Props) => {
  return (
    <>
      <style jsx>{styles}</style>
      <InputControl size={size} icon="group">
        {/* <div className="search_field guestnum_div"> */}
        <div className="gsnum_field">
          <span className="gs_txt">
            <span className="gs_num">{guestNum}</span>
            نفر
          </span>
          <div className="gs_action">
            <ButtonCircle className="up" onClick={() => setGuestNum(guestNum + 1)} />
            <ButtonCircle
              className="down"
              onClick={() => (guestNum > 1 ? setGuestNum(guestNum - 1) : setGuestNum(guestNum))}
            />
          </div>
        </div>
        {/* </div> */}
      </InputControl>
    </>
  );
};

export default GuestControl;
