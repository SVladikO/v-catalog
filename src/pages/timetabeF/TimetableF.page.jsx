import {useState, useEffect} from 'react';
import Timetable from 'timetable-f';
import styled from 'styled-components';

// import Code from './components/Code/Code.component'

const Wrapper = styled.div`
  padding: 10px;
`;


function TimetableF() {
  const [text, setText] = useState('Your text!');
  const [rootWidth, setRootWidth] = useState(300);
  const [rootHeight, setRootHeight] = useState(40);

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
      <div id='timetable'></div>
      <div>
        <input type="text" value={text} onChange={e => setText(e.target.value)}/>
        <button onClick={() => setText('')}>Clear</button>
      </div>
      <div>
        <input type="number" value={rootWidth} onChange={e => setRootWidth(e.target.value)}/> width
      </div>
      <div>
        <input type="number" value={rootHeight} onChange={e => setRootHeight(e.target.value)}/> height
      </div>
      <div>
        <input type="color" onChange={e => setRootBackground(e.target.value)} value={rootBackground}/> table background
      </div>
      <div>
        <input type="color" onChange={e => setLampColorOn(e.target.value)} value={lampColorOn}/> dot color on
      </div>
      <div>
        <input type="color" onChange={e => setLampColorOff(e.target.value)} value={lampColorOff}/> dot color off
      </div>
      <br/>
      <div>Result code is here: </div>
      {/*<Code code={code}/>*/}
    </Wrapper>
  );
}

export default TimetableF;
