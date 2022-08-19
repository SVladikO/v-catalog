import React, {useState} from 'react';
import './popup.style.css'

function Popup(props) {

    const {

        isCloseButton = true,
        hidePopup = () => {
        },
        children,
    } = props;

    return (
        <div className="f_popup_container">
            <div className="f_popup_wallpaper"></div>
            <div className="f_popup_content_container">
                {
                    isCloseButton
                        ? <div className="f_popup_close_button" onClick={hidePopup}><span>&#10005;</span></div>
                        : null
                }
                <div className="f_popup_content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Popup;