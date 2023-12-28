export const onRequestGet: PagesFunction<any> = async (context) => {
    const indexUrl = 'http://localhost:8788';
 	return Response.redirect(indexUrl);
}