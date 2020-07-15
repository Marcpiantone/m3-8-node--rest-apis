const { words } = require("../data/words");

const getWordsById = (id) => {
  return words.find((word) => word.id === id);
};

const handleTestWord = (req, res) => {
  const id = req.params.id;

  res.status(200).json({ status: "200", data: getWordsById(id) });
};

const handleRandomWord = (req, res) => {
  const randomWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };
  const data = () => {
    const word = randomWord();
    return { id: word.id, letterCount: word.letterCount };
  };
  res.status(200).json({ status: "200", data: data() });
};

const handleGuessLetter1stImplem = (req, res) => {
  const id = req.params.id;
  const letter = req.params.letter.toLowerCase();
  const word = getWordsById(id);

  const wordIncludes = (word, letter) => {
    return word.word.includes(letter);
  };

  if (!!wordIncludes(word, letter) === true) {
    res.status(200).json({
      status: "200",
      message: `This word includes ${letter.toUpperCase()}`,
    });
  } else {
    res.status(404).json({
      status: "404",
      message: `Letter ${letter.toUpperCase()} not found`,
    });
  }
};

const handleGuessLetter2ndImplem = (req, res) => {
  const id = req.params.id;
  const letter = req.params.letter.toLowerCase();
  const word = getWordsById(id);

  const wordIncludes2 = (word, letter) => {
    const wordText = word.word;
    return [...wordText].map((character) => character === letter);
  };

  res.status(200).json({ status: "200", data: wordIncludes2(word, letter) });
};

module.exports = {
  handleTestWord,
  handleRandomWord,
  handleGuessLetter1stImplem,
  handleGuessLetter2ndImplem,
};
