import React from 'react';
import {ReactComponent as Logo} from './assets/logo.svg'
import {ReactComponent as DarkMode} from './assets/dark-mode.svg'

function App() {
  const h1Style = { fontFamily: 'Arial', fontWeight: '500', fontSize: '34pt' };
  const h2Style = { fontFamily: 'Arial', fontWeight: '500', fontSize: '28pt' };
  const lightBackground1 = '#f2f2f2';
  const lightBackground2 = '#bfbfbf';
  const themeRed = '#EA4D3D'
  return (
    <>
      <div style={{display:'flex', padding:'20px 10px 15px 10px', backgroundColor:lightBackground1}}>
        <div style={{flex:1, display:'flex', alignItems:'center'}}>
          <Logo style={{}}/>
        </div>
        <div style={{flex:4, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <h1 style={h1Style}>Cloudflair Orgchart</h1>
        </div>
        <div style={{flex:1, display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
          <DarkMode style={{width:52, height:52, marginRight:30}}/>
          <Logo />
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'column', padding:'30px 10%',backgroundColor:lightBackground2}}>
        <h2 style={{...h2Style, ...{textAlign:'center'}}}>
          Features
        </h2>
        <ul style={{fontSize:'16pt', fontFamily:'Arial', lineHeight:'26pt', marginTop:20}}>
          <li>Text showcasing feature 1</li>
          <li>Text showcasing feature 2</li>
          <li>Text showcasing feature 3</li>
          <li>Text showcasing feature 4</li>
          <li>Text showcasing feature 5</li>
        </ul>
      </div>
      <div style={{display:'flex', flexDirection:'column', padding:'30px 30px',backgroundColor:lightBackground1}}>
        <h2 style={{...h2Style, ...{textAlign:'center'}}}>
          Displaying XX departments and XX employees
        </h2>
        <button style={{width:'100px', padding:'10px 0', border: 'none', backgroundColor:themeRed, fontWeight:'bold', fontSize:'14px', alignSelf:'flex-end'}}>
          (Edit) Filter
        </button>
      </div>

    </>
  );
}

export default App;
