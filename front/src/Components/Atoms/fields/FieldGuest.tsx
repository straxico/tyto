import React from 'react';
import { FormattedMessage } from 'react-intl';
import ButtonCircle from 'Atoms/buttonold/buttonCircle';

import css from 'styled-jsx/css';

const styles = css`
  .search_field > i {
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    font-size: 18px;
    line-height: 14px;
    color: #767676;
    top: 50%;
    right: 5px;
  }

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
    color: #484848;

    .gs_num {
      margin-left: 2px;
      width: 16px;
      text-align: left;
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

const FieldGuest = (Props: { guestNum: number; setGuestNum: any }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="search_input guest">
        <div className="search_field guestnum_div">
          <i className="icon icon_group" />
          <div className="gsnum_field">
            <span className="gs_txt">
              <span className="gs_num">{Props.guestNum}</span>
              <FormattedMessage id="header.nav.search.person" />
            </span>
            <div className="gs_action">
              <ButtonCircle className="up" onClick={() => Props.setGuestNum(Props.guestNum + 1)} />
              <ButtonCircle
                className="down"
                onClick={() =>
                  Props.guestNum > 1
                    ? Props.setGuestNum(Props.guestNum - 1)
                    : Props.setGuestNum(Props.guestNum)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FieldGuest;
