const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;

app.get("/upload", (req, res) => {
	res.send({ upload: "THIS IS THE DEFAULT UPLOAD ROUTE" });
});

// boto3 for upload

app.get("/upload/:id", (req, res) => {
	const id = req.params.id;

	axios
		.get(
			"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558-09ec1.json"
		)
		.then((response) => {
			res.send(response.data);
		});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
