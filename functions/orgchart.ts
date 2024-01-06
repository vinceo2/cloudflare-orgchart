interface Env {
	CF_PAGES_URL: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const indexUrl = context.env.CF_PAGES_URL
 	return Response.redirect(indexUrl);
}