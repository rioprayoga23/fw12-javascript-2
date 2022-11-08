const searchName = (key, length, callback) => {
  const name = [
    "Abigail",
    "Alexandra",
    "Alison",
    "Amanda",
    "Angela",
    "Bela",
    "Carol",
    "Caroline",
    "Carolyn",
    "Deirdre",
    "Diana",
    "Elizabeth",
    "Ella",
    "Faith",
    "Olivia",
    "Penelope",
  ];

  const toLower = name.map((element) => element.toLowerCase());

  const filtered = toLower.filter((element) =>
    element.includes(key.toLowerCase())
  );

  let arrayLength = filtered.length;

  arrayLength > length
    ? callback(filtered.slice(0, length))
    : callback(filtered);
};

const getFiltered = (filtered) => {
  console.log(filtered);
};

searchName("An", 3, getFiltered);
