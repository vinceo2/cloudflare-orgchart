export type employee = {
	name: string;
	department: string;
	salary: number;
	office: string;
	isManager: boolean;
	skills: string[];
	hidden?: boolean
};
export type department = {
	name: string;
	managerName: string;
	employees: employee[];
};
export type organization = {
	organization: {
		departments: department[];
	};
};
