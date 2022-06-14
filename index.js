require('dotenv').config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const multer = require('multer');
const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

const app = express();

app.use(express.json());
app.use(cors());

// for parsing multipart/form-data
const upload = multer({ dest: 'upload/' });
app.use(upload.single('file'));
app.use(express.static('public'));


async function main(file) {
  // create your `DocumentAnalysisClient` instance and `AzureKeyCredential` variable
  const client = new DocumentAnalysisClient(process.env.ENDPOINT, new AzureKeyCredential(process.env.KEY));
  const poller = await client.beginAnalyzeDocument(process.env.MODEL_ID, file);

  const output = await poller.pollUntilDone();

  const fields = output.documents[0].fields;

  if (Object.keys(fields).length === 0) {
    console.log("No key-value pairs were extracted from the document.");
  } else {
    for (const field in fields) {
      fields[field] = fields[field].value;
    }
  }
  return fields;
}

app.post("/upload", (req, res) => {
  if (req.file !== undefined) {
    fs.readFile(req.file.path, function (err, data) {
      main(data)
        .then((response) => {
          res.send(response);
        })
        .catch((error) => {
          console.error("An error occurred:", error);
          process.exit(1);
        });
    }
    );
  }
})

let port = process.env.port | 3001;

app.listen(port, () => {
  console.log("Server is running in port 3001");
});