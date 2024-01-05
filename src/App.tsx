import React, { useState, useContext } from 'react';
import {ReactComponent as Logo} from './assets/logo.svg'
import {ReactComponent as DarkMode} from './assets/dark-mode.svg'
import {ReactComponent as LightMode} from './assets/light-mode.svg'
import {ReactComponent as Close} from './assets/close.svg'
import { ThemeContext } from './ThemeContext';
import { initDepartments, buildDepartmentTables, sumEmployees } from './util/departments';
import { lightBackground1, h1Style, lightBackground2, h2Style, themeRed } from './util/styles';

function App() {
  const [departments, setDepartments] = useState(initDepartments())
  const departmentTables = buildDepartmentTables(departments)
  const [isModalHidden, setModalHidden] = useState(true)
  const [filterNameRegex, setFilterNameRegex] = useState('')
  const [filterOfficeRegex, setFilterOfficeRegex] = useState('')
  const [filterSkill, setFilterSkill] = useState('')
  const [theme, setTheme] = useState('light')

  function handleModalExitClick() {
    setModalHidden(true)
  }

  function handleFilterButtonClick() {
    setModalHidden(false)
  }

  function handleFilterUpdate() {
    // update departments, Close modal
    filterDepartments()
    setModalHidden(true)

    function filterDepartments() {
      setDepartments(oldDepartments => {
        for (const department of oldDepartments) {
          for (const employee of department.employees) {
            employee.hidden = false
            
            if (filterNameRegex.length !== 0 && !employee.name.match(filterNameRegex)) {
              employee.hidden = true
              continue
            }
            
            if (filterOfficeRegex.length !== 0 && !employee.office.match(filterOfficeRegex)) {
              employee.hidden = true
              continue
            }
            
            if (filterSkill.length !== 0 && !employee.skills.includes(filterSkill)) {
              employee.hidden = true
              continue
            }
          }
        }
      return departments
      });
    }
  }

  return (
    <ThemeContext.Provider value={theme}>
      <>
      <div style={{display:'flex', padding:'20px 10px 15px 10px'}} className={theme + '-background-1'}>
        <div style={{flex:1, display:'flex', alignItems:'center'}}>
          <Logo style={{}}/>
        </div>
        <div style={{flex:4, display:'flex', justifyContent:'center', alignItems:'center'}}>
          <h1 style={h1Style} className={theme + '-color'}>Cloudflare Orgchart</h1>
        </div>
        <div style={{flex:1, display:'flex', justifyContent:'flex-end', alignItems:'center'}}>
          {theme === 'light' ? 
            <DarkMode onClick={() => setTheme('dark')} style={{width:52, height:52, marginRight:30}} className='clickable'/> :
            <LightMode onClick={() => setTheme('light')} style={{width:52, height:52, marginRight:30}} className='clickable'/>
          }
          <Logo />
        </div>
      </div>
      <div style={{display:'flex', flexDirection:'column', padding:'30px 10%',}} className={theme + '-background-2'}>
        <h2 style={{...h2Style, ...{textAlign:'center'}}} className={theme + '-color'}>
          Features
        </h2>
        <ul style={{fontSize:'16pt', fontFamily:'Arial', lineHeight:'26pt', marginTop:20}} className={theme + '-color'}>
          <li>Collapsible Tables displaying the departments and employees of the orgchart</li>
          <li>Filter employees by name or office using regular expressions, or by skill</li>
          <li>Toggle between dark mode and light mode</li>
        </ul>
      </div>
      <div style={{display:'flex', flexDirection:'column', padding:'30px 30px',}} className={theme + '-background-1'}>
        <button onClick={handleFilterButtonClick}  style={{width:'100px', padding:'10px 0', border: 'none', backgroundColor:themeRed, fontWeight:'bold', fontSize:'14px', alignSelf:'flex-end'}} className='clickable'>
          Filter
        </button>
        {departmentTables}
      </div>
      
    {!isModalHidden && <div style={{backgroundColor:'rgba(0,0,0,0.5)', zIndex:1, position:'fixed', width:'100%', height:'100%', top:0}}>
      <div style={{width:'60%', margin:'10% auto'}} className={theme + '-background-1'}>
        <div style={{display:'flex', alignItems:'center', padding:'15px 0'}}>
          <Close style={{flex:.5}} onClick={handleModalExitClick} className='clickable'/>
          <h2 style={{...h2Style, flex:6, textAlign:'center'}} className={theme + '-color'}>Filter Employees By...</h2>
          <div style={{flex:.5}}/>
        </div>
        <div style={{display:'flex', flexDirection:'column', padding:'0 20px'}}>
          <div style={{display:'flex', margin:'20px 0'}}>
            <p style={{flex:1, display:'inline-block', fontSize:'16pt', fontFamily:'Arial'}} className={theme + '-color'}>Name:</p>
            <input value={filterNameRegex} onInput={(event) => setFilterNameRegex((event.target as HTMLInputElement).value)} style={{flex:3, display:'inline-block', border:'1px solid gray', font: '16pt Arial'}}></input>
          </div>
          <div style={{display:'flex', margin:'20px 0'}}>
            <p style={{flex:1, display:'inline-block', fontSize:'16pt', fontFamily:'Arial'}} className={theme + '-color'}>Office:</p>
            <input value={filterOfficeRegex} onInput={(event) => setFilterOfficeRegex((event.target as HTMLInputElement).value)} style={{flex:3, display:'inline-block', border:'1px solid gray', font: '16pt Arial'}}></input>
          </div>
          <div style={{display:'flex', margin:'20px 0'}}>
            <p style={{flex:1, display:'inline-block', fontSize:'16pt', fontFamily:'Arial'}} className={theme + '-color'}>Skill:</p>
            <input value={filterSkill} onInput={(event) => setFilterSkill((event.target as HTMLInputElement).value)} style={{flex:3, display:'inline-block', border:'1px solid gray', font: '16pt Arial'}}></input>
          </div>
          <button onClick={handleFilterUpdate} style={{width:'100px', padding:'10px 0', border: 'none', backgroundColor:themeRed, fontWeight:'bold', fontSize:'14px', alignSelf:'flex-end', margin:'20px 0'}} className='clickable'>
            Apply
          </button>
        </div>
      </div>
    </div>}
      </>
    </ThemeContext.Provider>
  );
}

export default App;
