import React, {useState} from "react";

import Text from "../text/text.component";

import {ReactComponent as CopyIcon} from "../../image/copy.svg";
import {ReactComponent as SuccessIcon} from "../../image/success.svg";

import {Button, TooltipContainer, ContentContainer, Input, Tooltip, Triangle} from "./clipboard-item.styles";

const isClipboardExist = "clipboard" in navigator; /* navigator gives us possibilities to copy value */

function ClipboardItem({value}) {
  const [isClipboardClicked, switchClick] = useState(false);

  function copyValue() {
    navigator.clipboard.writeText(value)
  }

  const handleClick = () => {
    if (isClipboardClicked) {
      return;
    }

    copyValue();
    switchClick(true);
    setTimeout(() => switchClick(false), 2500);
  }

  return (
    <ContentContainer>
      {
        isClipboardExist
          ? <React.Fragment>
            <Input value={value} type="text" disabled/>
            <Button onClick={handleClick} isClipboardClicked={isClipboardClicked}>
              {!isClipboardClicked ? <CopyIcon/> : <SuccessIcon/>}
              <TooltipContainer>
                <Tooltip>
                  {
                    !isClipboardClicked ? "" :
                      <Text translationKey={"$CLIPBOARD.TOOLTIP.CLICKED.TITLE"}/>
                  }
                </Tooltip>
                <Triangle/>
              </TooltipContainer>
            </Button>
          </React.Fragment>
          : <div>{value}</div>
      }
    </ContentContainer>
  );
}

export default ClipboardItem;