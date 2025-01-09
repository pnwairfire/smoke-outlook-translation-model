// ----- Setup -----------------------------------------------------------------

// Add local environment variables with secret keys
const dotenv = require("dotenv");
dotenv.config({
  path: __dirname + "/.env",
});

// ExpressJS + Mustache templates + OpenAI
const express = require("express");
const mustacheExpress = require("mustache-express");
const OpenAIApi = require("openai");

// OpenAI API (v4: https://github.com/openai/openai-node/discussions/217)
const openai = new OpenAIApi({
  apiKey: process.env.OPENAI_API_KEY,
});

// Create the ExpressJS app
const app = express();

// ----- Configure the app -----------------------------------------------------

// Use mustacheExpress to render templates
app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");

// Serve static files
app.use(express.static(__dirname + "/public"));

// Parse post data
app.use(express.urlencoded({ extended: true }));

// Set template directory
app.set("views", __dirname + "/views");

// ----- Begin routing ---------------------------------------------------------

app.get("/", (req, res) => {
  res.render("home", {
    userName: "Jonathan",
  });
});

app.post("/translate", async (req, res) => {
  content = req.body.prompt + "\n\n" + req.body.text;
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: content }],
    model: "gpt-4-turbo",
  });
  const translation = chatCompletion.choices[0].message.content;
  res.render("translation", {
    prompt: req.body.prompt || "No prompt provided",
    translation: translation,
  });
});

// ----- Listen on port 3000 ---------------------------------------------------

app.listen(3000);
