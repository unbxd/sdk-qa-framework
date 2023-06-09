const express = require("express");
const AWS = require("aws-sdk");
const axios = require("axios");
const cors = require("cors");
const app = express();

require("aws-sdk/lib/maintenance_mode_message").suppress = true;

app.use(cors());
app.use(express.json());

const port = 5000;

AWS.config.update({
	accessKeyId: process.env.ASSETS_AWS_KEY_ID,
	secretAccessKey: process.env.ASSETS_AWS_SECRET_KEY,
});

// const readFromCDN = async (siteKey, configKey) => {
// 	console.log("Reading from CDN");
// 	AWS.config.setPromisesDependency();
// 	const s3 = new AWS.S3();
// 	const response = await s3
// 		.listObjectsV2({
// 			// Bucket: "unbxd-pim-ui",
// 			Bucket: "unbxd/search-sdk",
// 			Prefix: `qa-framework/${siteKey}`,
// 		})
// 		.promise();
// 	console.log("List of files:", response);
// 	if (response.includes(`/qa-framework/${siteKey}/${configKey}`)) {
// 		const file = await s3
// 			.getObject({
// 				Bucket: "unbxd/search-sdk",
// 				Key: `qa-framework/${siteKey}/${configKey}`,
// 			})
// 			.promise();
// 		console.log("ContentType:", file.ContentType, "\nBody:", file.Body);
// 	}
// };

app.get("/retrieve", (req, res) => {
	const { siteKey, configKey } = req.query;
	if (siteKey !== undefined && configKey !== undefined) {
		console.log("siteKey:", siteKey, "configKey:", configKey);
		axios
			.get(
				`https://libraries.unbxdapi.com/search-sdk/qa-framework/${siteKey}/${configKey}.json`
			)
			.then((response) => {
				let config = {};
				config = { ...response.data };
				res.send({
					status: "success",
					config: config,
				});
			})
			.catch((err) => {
				res.send({
					status: "error",
					error: err.message,
				});
			});
	}
});

const uploadToCDN = async (siteKey, configKey, config) => {
	const buf = Buffer.from(JSON.stringify(config, null, 4));
	console.log("Uploading to CDN...");
	const s3 = new AWS.S3();
	const params = {
		Bucket: "unbxd/search-sdk",
		Key: `qa-framework/${siteKey}/${configKey}.json`,
		Body: buf,
		ContentEncoding: "base64",
		ContentType: "application/json",
	};
	s3.upload(params, (err, data) => {
		if (err) {
			console.log("File upload unsuccessful.\n", err);
		} else {
			console.log(
				"File uploaded successfully:",
				`https://libraries.unbxdapi.com/search-sdk/qa-framework/${siteKey}/${configKey}.json`
			);
			return "https://libraries.unbxdapi.com/search-sdk/qa-framework/${siteKey}/${configKey}.json";
		}
	});
};
app.post("/upload", (req, res) => {
	const { config, siteKey, configKey } = req.body;
	const uploadLink = uploadToCDN(siteKey, configKey, config);
	res.send({ message: "Upload Successful", docLink: uploadLink });
});

app.get("/test", (req, res) => {
	res.send("Hit confirmed!");
});

app.listen(port, () => console.log(`Listening on port ${port}`));
