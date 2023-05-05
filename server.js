const express = require("express");
const AWS = require("aws-sdk");
const fs = require("fs");
const axios = require("axios");
const cors = require("cors");
const { config } = require("webpack");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

// console.log(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY);

AWS.config.update({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

// console.log("aws config:", AWS.config);

const readFromCDN = async (siteKey, configKey) => {
	console.log("Reading from CDN");
	AWS.config.setPromisesDependency();
	const s3 = new AWS.S3();
	const response = await s3
		.listObjectsV2({
			// Bucket: "unbxd-pim-ui",
			Bucket: "unbxd/search-sdk",
			Prefix: `qa-framework/${siteKey}`,
		})
		.promise();
	console.log("List of files:", response);
	if (response.includes(`/qa-framework/${siteKey}/${configKey}`)) {
		const file = await s3
			.getObject({
				Bucket: "unbxd/search-sdk",
				Key: `qa-framework/${siteKey}/${configKey}`,
			})
			.promise();
		console.log("ContentType:", file.ContentType, "\nBody:", file.Body);
	}
};

app.get("/retrieve", (req, res) => {
	const { siteKey, configKey } = req.query;
	if (siteKey !== undefined && configKey !== undefined) {
		console.log("siteKey:", siteKey, "configKey:", configKey);
		// readFromCDN(siteKey, configKey).catch((err) => console.log("Error:", err));
		axios
			.get(
				`https://libraries.unbxdapi.com/search-sdk/qa-framework/${siteKey}/${configKey}.json`
			)
			.then((response) => {
				let config = {};
				config = { ...response.data };
				// console.log(config);
				res.send({
					status: "success",
					config: config,
				});
			})
			.catch((err) =>
				res.send({
					status: "error",
					error: err.message,
				})
			);
	}
	console.log(config);
});

const uploadToCDN = async (siteKey, configKey, config) => {
	const buf = Buffer.from(JSON.stringify(config));
	// var dir = "./tmp";
	// if (!fs.existsSync(dir)) {
	// 	fs.mkdirSync(dir);
	// }
	// fs.writeFile(
	// 	"./tmp/custConfig.json",
	// 	JSON.stringify(config, null, 4),
	// 	(err) => {
	// 		if (err) {
	// 			console.log("Error:", err);
	// 		} else {
	// 			console.log("Write successful");
	// 		}
	// 	}
	// );
	// const fileContent = fs.readFileSync("./tmp/custConfig.json");
	console.log("Uploading to CDN...");
	const s3 = new AWS.S3();
	const params = {
		Bucket: "unbxd/search-sdk",
		// Bucket: "unbxd-pim-ui",
		Key: `qa-framework/${siteKey}/${configKey}.json`,
		// Key: `qa-framework/${siteKey}/${configKey}.json`,
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
	// console.log(`*****\n/qa-framework/${siteKey}/${configKey}.json\n****`);
	const uploadLink = uploadToCDN(siteKey, configKey, config);
	// res.send({ message: "Upload Successful" });
	res.send({ message: "Upload Successful", docLink: uploadLink });
});

// boto3 for upload

// app.get("/upload/:id", (req, res) => {
// 	const id = req.params.id;

// 	axios
// 		.get(
// 			"https://libraries.unbxdapi.com/search-sdk/qa-framework/demo-unbxd700181503576558-09ec1.json"
// 		)
// 		.then((response) => {
// 			res.send(response.data);
// 		});
// });

app.listen(port, () => console.log(`Listening on port ${port}`));
