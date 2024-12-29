//your JS code here. If required.
// List of articles
const articles = [
  'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Words to ignore during sorting
const ignoreWords = ["a", "an", "the"];

// Function to sort articles while ignoring specific words
function sortArticles(articles) {
  return articles.slice().sort((a, b) => {
    const formatTitle = (title) => {
      const words = title.split(" ");
      return ignoreWords.includes(words[0].toLowerCase()) 
        ? words.slice(1).join(" ") 
        : title;
    };

    return formatTitle(a).localeCompare(formatTitle(b));
  });
}

// Display the sorted articles in the unordered list
function displaySortedArticles() {
  const ul = document.getElementById("band");
  const sortedArticles = sortArticles(articles);

  sortedArticles.forEach((article) => {
    const li = document.createElement("li");
    li.textContent = article;
    ul.appendChild(li);
  });
}

// Initialize the webpage
displaySortedArticles();