import React from 'react';
import { department, organization } from './types';
import orgchart from '../orgchart';
import { DepartmentTable } from '../components/DepartmentTable';
import { Employee } from '../components/Employee';

/**
 * @returns A list of departments from the orgchart to be converted into components
 */
export function initDepartments(): department[] {
  const json: organization = orgchart;

  // init employee.hidden to false for every employee since not a field on server
  for (const department of json.organization.departments) {
    for (const employee of department.employees) {
      employee.hidden = false;
    }
  }
  return json.organization.departments;
}
/**
 * Converts a list of departments to a list of DepartmentTable components
 */
export function buildDepartmentTables(departments: department[]) {
  const departmentTables: React.JSX.Element[] = [];

  for (const department of departments) {
    let manager: React.ReactNode = null;
    let isManagerHidden: boolean = false;
    const employees: React.JSX.Element[] = [];

    for (const employee of department.employees) {
      if (employee.isManager) {
        manager = <Employee name={employee.name} isManager office={employee.office} skills={employee.skills} isHidden={employee.hidden ?? true} />;
        isManagerHidden = employee.hidden ?? true;
      } else {
        employees.push(<Employee name={employee.name} isManager={false} office={employee.office} skills={employee.skills} isHidden={employee.hidden ?? true} />);
      }
    }

    departmentTables.push(<DepartmentTable isManagerHidden={isManagerHidden} manager={manager} departmentName={department.name} children={employees} />);
  }

  return (<>{departmentTables}</>);
}
