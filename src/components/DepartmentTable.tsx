import React, { useContext, useState } from 'react';
import { ReactComponent as Collapse } from '../assets/collapse.svg';
import { ReactComponent as Expand } from '../assets/expand.svg';
import { themeRed, lightBackground2 } from '../util/styles';
import { ThemeContext } from '../ThemeContext';

/**
 * Component for displaying a department's employees
 */

export function DepartmentTable(props: { manager: React.ReactNode; isManagerHidden: boolean; departmentName: string; children?: React.ReactNode; }): React.JSX.Element {
  const [isExpanded, setExpanded] = useState(true);
  const theme = useContext(ThemeContext)

  function handleClick() {
    setExpanded((old) => !old);
  }

  const headerIcon = isExpanded ? <Collapse style={{ flex: 0.5 }} onClick={handleClick} /> : <Expand style={{ flex: 0.5 }} onClick={handleClick} />;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0', }}>
      <div style={{ display: 'flex', backgroundColor: themeRed, padding: '10px 0px' }}>
        {headerIcon}
        <p style={{ flex: 9, fontWeight: 'bold', font: 'Arial', fontSize: '16pt', color: 'white', textAlign: 'center' }}>
          {props.departmentName}
        </p>
        <div style={{ flex: 0.5 }}></div>
      </div>
      {isExpanded && <div style={{paddingTop: 5 }} className={theme + '-background-2'}>
        {!props.isManagerHidden && <div style={{ display: 'flex', justifyContent: 'center', margin: '5px 0' }}>
          {props.manager}
        </div>}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center', padding: '5px 0px 10px 0px' }}>
          {props.children}
        </div>
      </div>}
    </div>
  );
}
