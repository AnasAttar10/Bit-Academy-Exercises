const express = require("express");
const router = express.Router();

const wordCounter = {
  osed: 2,
  anas: 14,
  ahmad: 1,
  khaled: 10,
  muhammad: 15,
  lotem: 3,
  ameer: 17,
};

router.get("/sanity", (req, res) => {
  res.send("Hi Anas");
});

router.get("/word/:text", (req, res) => {
  let word = req.params.text;
  if (wordCounter[word]) {
    res.send({ count: wordCounter[word] });
  } else {
    res.send({ count: 0 });
  }
});

router.post("/word", (req, res) => {
  let word = req.body.word;
  if (word in wordCounter) {
    wordCounter[word]++;
  } else {
    wordCounter[word] = 1;
  }
  let count = wordCounter[word];
  res.send({
    text: `Added ${word}`,
    currentCount: { count },
  });
});

router.post("/words", (req, res) => {
  let words = { ...req.body };
  console.log(words);
  words = words.sentence.split(" ");
  let numNewWords = words.length;
  for (const word of words) {
    if (word in wordCounter) numNewWords--;
  }
  let numOldWords = Object.keys(wordCounter).length;
  res.send({
    text: `Added ${numNewWords} words, ${numOldWords} already existed`,
    currentCount: -1,
  });
});
router.delete("/words", (req, res) => {
  try {
    let word = { ...req.body }.word;
    console.log(word);
    delete wordCounter[word];
    res.send(wordCounter);
  } catch (err) {
    console.log(err);
  }
});
router.get("/popular", (req, res) => {
  let count = 0;
  let word = "";
  for (const [key, value] of Object.entries(wordCounter)) {
    if (value > count) {
      count = value;
      word = key;
    }
  }
  res.send({ text: { word }, count: { count } });
});

router.get("/ranking", (req, res) => {
  let ranking = [];
  for (const [key, value] of Object.entries(wordCounter)) {
    ranking.push({ key, value });
  }
  ranking.sort(function (a, b) {
    return a.value - b.value;
  });
  let newrankeimg = ranking.slice(-5);
  res.send(newrankeimg);
});
module.exports = router;
