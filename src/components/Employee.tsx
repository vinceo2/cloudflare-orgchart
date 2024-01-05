import React, { useContext } from 'react';
import { ReactComponent as ProfilePicture } from '../assets/account.svg';
import { ReactComponent as ProfilePictureDark } from '../assets/account-dark.svg';
import { ThemeContext } from '../ThemeContext';

/**
 * Component for displaying employee information in the DepartmentTable components
 */

export function Employee(props: { name: string; isManager: boolean; office: string; skills: string[]; isHidden: boolean; }): JSX.Element {
  const theme = useContext(ThemeContext)

  if (props.isHidden) {
    return <></>;
  }
  return (
    <div style={{display: 'flex', width: '250px', alignItems: 'center' }} className={theme + '-background-3'}>
      {theme === 'light' ? <ProfilePicture style={{ flex: 1 }}/> : <ProfilePictureDark style={{flex:1}}/>}
      <div style={{ flex: 2 }}>
        <p style={{ display: 'block', fontSize: '14pt',  }} className={theme + '-color'}>{props.name}</p>
        {props.isManager && <p style={{ display: 'block', fontSize: '12pt',  }} className={theme + '-color'}>Manager</p>}
        <p style={{ display: 'block', fontSize: '12pt',color: 'gray' }}>{props.office}</p>
        <p style={{ display: 'block', fontSize: '12pt', color: 'gray', fontStyle: 'italic' }}>{props.skills.join(", ")}</p>
      </div>
    </div>
  );
}
