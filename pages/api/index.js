export default (req, res) => {
	return new Promise((resolve) => {
		if (req.method !== "GET") {
			res.statusCode = 400; //Bad request
			res.json({ status: "ok", error: "Only 'GET' requests allowed." });
		} else {
			const fetchUrl = Object.keys(req.query)[0];
			const options = {
				headers: { "Content-Type": "application/json" },
			};

			if (!fetchUrl) res.json({ status: "ok", error: "No fetch url was provided" }, options);

			const fetchData = async () => {
				const response = await fetch(fetchUrl);
				const data = await response.json();
				res.statusCode = 200;
				res.json({ url: fetchUrl, data });
			};

			try {
				fetchData();
			} catch (error) {
				console.error(error);
				res.send(error);
			}
		}
		return resolve();
	});
};
