import React from 'react';
import {useState, useEffect} from 'react';
import Timetable from 'timetable-f';
import Code from 'react_code_tag/index.js';

import {Wrapper, Row, Button} from './TimetableF.style.js';

function TimetableF() {
  const [text, setText] = useState('Text!');
  const [rootWidth, setRootWidth] = useState(300);
  const [rootHeight, setRootHeight] = useState(60);

  const [rootBackground, setRootBackground] = useState('#16300b');
  const [lampColorOn, setLampColorOn] = useState('#9dd143');
  const [lampColorOff, setLampColorOff] = useState('#1d5110');

  useEffect(() => {
    const option = {
      rootWidth,
      rootHeight,
      rootBackground,
      lampColorOn,
      lampColorOff
    }
    const timetable = new Timetable('#timetable', option);
    timetable.show(text);
    console.log(timetable)
  })

  const code = ` const option = {
    rootWidth: ${rootWidth},
    rootHeight: ${rootHeight},
    rootBackground: ${rootBackground},
    lampColorOn: ${lampColorOn},
    lampColorOff: ${lampColorOff}
  }
            
  const timetable = new Timetable('#root', option);
  timetable.show('${text}');
  `;

  return (
    <Wrapper>
      {/*npm i timetable-f*/}
      <div id='timetable'></div>
      <Wrapper>
          <Row>
            <input type="text" value={text} onChange={e => setText(e.target.value)}/>
            <Button onClick={() => setText('')}>Clear</Button>
          </Row>
          <Row>
            <input type="number" value={rootWidth} onChange={e => setRootWidth(e.target.value)}/> width
          </Row>
          <Row>
            <input type="number" value={rootHeight} onChange={e => setRootHeight(e.target.value)}/> height
          </Row>
          <Row>
            <input type="color" onChange={e => setRootBackground(e.target.value)} value={rootBackground}/> background table
          </Row>
          <Row>
            <input type="color" onChange={e => setLampColorOn(e.target.value)} value={lampColorOn}/> dot color on
          </Row>
          <Row>
            <input type="color" onChange={e => setLampColorOff(e.target.value)} value={lampColorOff}/> dot color off
          </Row>
      </Wrapper>
      <div>Result code is here: </div>
      <Code code={code}/>
    </Wrapper>
  );
}

export default TimetableF;
