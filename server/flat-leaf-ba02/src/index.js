

export default {
	async fetch(request, env, ctx) {

		const { pathname } = new URL(request.url);

		const responseHeaders = {
			"Access-Control-Allow-Headers": "*",
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
			"Access-Control-Max-Age": "86400",
		}

		if (pathname === "/api/students1") {
			const { results } = await env.DB.prepare(
				"SELECT * FROM students WHERE id < 7"
			)
				.bind()
				.all();

			return Response.json(results,
				{
					status: 200,
					headers: responseHeaders
				});

		} else if (pathname === "/api/students2") {
			const { results } = await env.DB.prepare(
				"SELECT * FROM students WHERE id > 4"
			)
				.bind()
				.all();

			return Response.json(results,
				{
					status: 200,
					headers: responseHeaders
				});
		}

		return new Response(
			"Error: invalid endpoint",
			{
				status: 400,
				headers: responseHeaders
			}
		);
	},
};
