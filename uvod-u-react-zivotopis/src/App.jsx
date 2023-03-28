import React from 'react';
import { InfoArea } from './components/InfoArea';
import { TextInfo } from './components/TextInfo';
import { SliderInfo } from './components/SliderInfo';
import './index.css';

function App() {
  return (
    <div>
      <h1 className='title'>My CV</h1>
      <div className="info">
        <InfoArea title="About me" description="I am a student of the Faculty of Electrical Engineering and Computing in Zagreb. I am currently in the third year of my studies. I am interested in web development and I am currently learning React." >
          <TextInfo category="Name" information="Ivan" />
          <TextInfo category="Surname" information="Kovačević" />
          <TextInfo category="Date of birth" information="10.10.2000." />
          <TextInfo category="Place of birth" information="Zagreb" />
          <TextInfo category="Address" information="Zagreb" />
          <TextInfo category="Phone" information="+385 99 123 4567" />
          <TextInfo category="E-mail" information="ivan.kovacevic@gmail.com" />
        </InfoArea>
        <InfoArea title="Education" description="I am currently studying at the Faculty of Electrical Engineering and Computing in Zagreb. I am in the third year of my studies.">
          <TextInfo category="Faculty" information="FER" />
          <TextInfo category="Department" information="ETf" />
          <TextInfo category="Year of study" information="3" />
          <TextInfo category="Field of study" information="Computer Science" />
          <TextInfo category="Average grade" information="4.5" />
        </InfoArea>
        <InfoArea title="Skills" description="I am currently learning React.">
          <SliderInfo title="HTML" percentage="90" />
          <SliderInfo title="CSS" percentage="80" />
          <SliderInfo title="JavaScript" percentage="70" />
          <SliderInfo title="React" percentage="60" />
        </InfoArea>

      </div>
    </div>

  );
}

export default App;
