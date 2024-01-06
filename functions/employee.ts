import csvToObject from './util/csv'
import { employee, organization } from './util/types';

interface Env {
	organization: KVNamespace;
    ORGANIZATION_KV_KEY: string
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
	type criteria = {
		name?: string
		department?: string
		minSalary?: number
		maxSalary?: number
		office?: string
		skill?: string
	}
	const kvKey = context.env.ORGANIZATION_KV_KEY
	const org = JSON.parse(await context.env.organization.get(kvKey)) as organization
	const query = await context.request.json() as criteria
	const matchedEmployees: employee[] = []

	for (const department of org.organization.departments) {
		for (const employee of department.employees) {
			if (query.name && employee.name.match(query.name) === null) {
				continue
			}
			if (query.department && employee.department.match(query.department) === null) {
				continue
			}
			if (query.minSalary && query.minSalary > employee.salary) {
				continue
			}
			if (query.maxSalary && query.maxSalary < employee.salary) {
				continue
			}
			if (query.office && employee.office.match(query.office) === null) {
				continue
			}
			if (query.skill && !employee.skills.includes(query.skill)) {
				continue
			}
			matchedEmployees.push(employee)
		}
	}

	return new Response(JSON.stringify(matchedEmployees))
}