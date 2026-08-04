function serializeString(string, type) {
  if (type == "dash") {
    return String(string)
      .replace(".", "")
      .trim()
      .toLowerCase()
      .split(" ")
      .filter(Boolean)
      .join("-");
  }
}

function toCamelCase(str) {
  // Logger.log(str);
  const words = str
    .replace(".", "")
    .replace(" ", "-")
    .split("-")
    .filter(Boolean);
  const cahrsArray = words.map((word, index) =>
    index === 0
      ? word.toLowerCase()
      : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  // Logger.log(cahrsArray);
  return cahrsArray.join("");
}

function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
