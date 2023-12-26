interface Env {
	organization: KVNamespace;
    ORGANIZATION_KV_KEY: string
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const kvKey = context.env.ORGANIZATION_KV_KEY
    console.log(kvKey)
	const value = await context.env.organization.get(kvKey);
    console.log(value.substring(0, 30))
 	return new Response(value);
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
	const value = await context.env.organization.get('example');
 	return new Response(value);
}