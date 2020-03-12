import React from 'react';
import './popUp.css';

const PopUp = props => {
  console.log('Atoms Pop up');
  return (
    <>
      <div className="popup_container">
        <div className="popup_innerContainer">
          <div className="popup_wrapper">
            <div className="popup_content">
              <div className="popup_close_div">
                <button
                  type="button"
                  className="popup_close"
                  onClick={() => props.setShowPopUp(false)}>
                  <svg viewBox="0 0 24 24" role="img" aria-label="Close" focusable="false">
                    <path
                      fillRule="evenodd"
                      d="M23.25 24a.744.744 0 0 1-.53-.22L12 13.062 1.28 23.782a.75.75 0 0 1-1.06-1.06L10.94 12 .22 1.28A.75.75 0 1 1 1.28.22L12 10.94 22.72.22a.749.749 0 1 1 1.06 1.06L13.062 12l10.72 10.72a.749.749 0 0 1-.53 1.28"
                    />
                  </svg>
                </button>
              </div>
              <div className="popup_body">{props.children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopUp;
