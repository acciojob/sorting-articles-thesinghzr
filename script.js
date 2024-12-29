const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to strip the articles from the names
function stripArticle(name) {
  return name.replace(/^(a |an |the )/i, '').trim();
}

// Sort the bands array ignoring articles
const sortedBands = bands.sort((a, b) => (stripArticle(a) > stripArticle(b) ? 1 : -1));

// Add sorted items to the UI
const bandsList = document.getElementById('bands');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  bandsList.appendChild(li);
});