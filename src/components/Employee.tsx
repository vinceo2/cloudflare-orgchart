import React from 'react';
import { ReactComponent as ProfilePicture } from '../assets/account.svg';

/**
 * Component for displaying employee information in the DepartmentTable components
 */

export function Employee(props: { name: string; isManager: boolean; office: string; skills: string[]; isHidden: boolean; }): JSX.Element {
  if (props.isHidden) {
    return <></>;
  }
  return (
    <div style={{ backgroundColor: 'white', display: 'flex', width: '250px', alignItems: 'center' }}>
      <ProfilePicture style={{ flex: 1 }} />
      <div style={{ flex: 2 }}>
        <p style={{ display: 'block', fontSize: '14pt', font: 'Arial' }}>{props.name}</p>
        {props.isManager && <p style={{ display: 'block', fontSize: '12pt', font: 'Arial' }}>Manager</p>}
        <p style={{ display: 'block', fontSize: '12pt', font: 'Arial', color: 'gray' }}>{props.office}</p>
        <p style={{ display: 'block', font: 'Arial', fontSize: '12pt', color: 'gray', fontStyle: 'italic' }}>{props.skills.join(", ")}</p>
      </div>
    </div>
  );
}
