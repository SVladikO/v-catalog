import React, {useState} from 'react';
import './popup.style.css'

function Popup({
        isCloseButton = true,
        switchPopup = () => {},
        children,
}) {

    return (
        <div className="f_popup_container">
            <div className="f_popup_wallpaper"></div>
            <div className="f_popup_content_container">
                {
                    isCloseButton
                        ? <div className="f_popup_close_button" onClick={switchPopup}><span>&#10005;</span></div>
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