import { organization, department, employee } from "./types";

/*
The response you receive should be in this format:

{ "organization" : { "departments": [{...}, {...}]}

Departments is a list of Department objects in this form:

{ "name" : string, "managerName", string, "employees": [{...}, {...}]}

And Employees is a list of Employee objects in this form:

{ "name" : string, "department": string, "salary": number, "office": string, isManager: boolean, "skills": [string, string, ...]}
*/
/**
 * Iter over entries:
 * 	Convert to employee object
 * 	If employee.department not in a key in departmentName-departmentObject map: add pair to map
 * 	if employee.isManager: update department in map
 *  Add employee to employees list in corresponding department in map
 * Create organization obj & add departments
 */
/**
 * Converts a string in the CSV format specified at {@link https://hiringassignment-545.pages.dev/general_data.csv} to a JS object
 */
export default function csvToObject(csvString: string): organization {
	type departmentName = string;

	const lines = csvString.split('\n');
	const departmentMap: Map<departmentName, department> = new Map();

	for (let i = 1; i < lines.length; i++) {
		let line = lines[i];
		let employee = csvLineToEmployee(line);

		if (!departmentMap.has(employee.department)) {
			let newDepartment = { name: employee.department, managerName: "", employees: [] };
			departmentMap.set(employee.department, newDepartment);
		}

		let department = departmentMap.get(employee.department);

		if (employee.isManager && department) {
			department.managerName = employee.name;
		}

		department?.employees.push(employee);
	}

	return {
		organization: {
			departments: Array.from(departmentMap.values())
		}
	};
}
/**
 * Converts an input CSV line to an {@link employee} object
 */
function csvLineToEmployee(line: string): employee {
	const props = line.split(',');
	return {
		name: props[0],
		department: props[1],
		salary: parseInt(props[2]),
		office: props[3],
		isManager: props[4] === "TRUE" ? true : false,
		skills: [props[5], props[6], props[7]],
	};
}

