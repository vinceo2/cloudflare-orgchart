import React, { useState } from 'react';
import { ReactComponent as Collapse } from '../assets/collapse.svg';
import { ReactComponent as Expand } from '../assets/expand.svg';
import { themeRed, lightBackground2 } from '../util/styles';

/**
 * Component for displaying a department's employees
 */

export function DepartmentTable(props: { manager: React.ReactNode; isManagerHidden: boolean; departmentName: string; children?: React.ReactNode; }): React.JSX.Element {
  const [isExpanded, setExpanded] = useState(true);

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
      {isExpanded && <div style={{ backgroundColor: lightBackground2, paddingTop: 5 }}>
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
