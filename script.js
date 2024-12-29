
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

// Function to remove "a", "an", "the" from the beginning of a band name
function stripArticles(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort the band names while ignoring the articles
const sortedBands = bands.sort((a, b) => {
  return stripArticles(a).localeCompare(stripArticles(b));
});

// Populate the list on the webpage
const bandList = document.getElementById('band');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  bandList.appendChild(li);
});