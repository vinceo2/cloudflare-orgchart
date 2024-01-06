import csvToObject from "./util/csv";

interface Env {
	organization: KVNamespace;
    ORGANIZATION_KV_KEY: string
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const kvKey = context.env.ORGANIZATION_KV_KEY
    console.log('context:' + JSON.stringify(context))
    console.log('context.env:' + JSON.stringify(context.env))
	const organization = await context.env.organization.get(kvKey);
 	return new Response(organization);
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    type orgData = {organizationData: string}

    const data = await context.request.json() as orgData
    const csv = JSON.stringify(csvToObject(data.organizationData))
 	return new Response(csv);
}