const dotenv = require('dotenv');
dotenv.config();
const path = require('path')
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors'); 

const app = express();
const port = process.env.PORT || 4100;

app.use(bodyParser.json());
app.use(cors()); 

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

mongoose.connect("mongodb+srv://premkarz111:XMKLzEXJrzexK3pg@effizient.bbtcitt.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
 
const db = mongoose.connection;

db.on("error", error => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("Connected to MongoDB"));

const submissionSchema = new mongoose.Schema({
  fullname: String,
  email: String,
  age: Number,
  country: String,
  educationlevel: String,
  highereducation: String,
  study: String,
  job: String,
  institute: String,
  program: String,
  country: String,
  goals: String,
  englishScoreListening: Number,
  englishScoreReading: Number,
  englishScoreSpeaking: Number,
  englishScoreWriting: Number,
  tutionfeepaid: String,
  tutionfee: Number,
  GIC: String,
  tutionfeeGIC: Number
});

const Submission = mongoose.model("Submission", submissionSchema);

app.post("/submissions", async (req, res) => {
  try {
    const submission = new Submission(req.body);
    await submission.save();
    res.status(201).send(submission);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/submissions", async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.send(submissions);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.delete('/submissions/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await Todo.findByIdAndDelete(id);
    res.json({ message: 'submission deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Could not delete todo' });
  }
});

app.use(express.static(path.join(__dirname, './Frontend/build')));
app.get('*', (req, res)=>{
  res.sendFile(path.resolve(__dirname, './Frontend/build/index.html'))
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
