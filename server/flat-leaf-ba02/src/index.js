

export default {
	async fetch(request, env, ctx) {

		const { pathname } = new URL(request.url);

		if (pathname === "/api/students1") {
			const { results } = await env.DB.prepare(
				"SELECT * FROM students WHERE id < 7"
			)
				.bind()
				.all();
			return Response.json(results);
		} else if (pathname === "/api/students2") {
			const { results } = await env.DB.prepare(
				"SELECT * FROM students WHERE id > 4"
			)
				.bind()
				.all();
			return Response.json(results);
		}

		return new Response('Invalid Endpoint');
	},
};
