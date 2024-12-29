//your JS code here. If required.
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

    // Function to remove articles ('a', 'an', 'the') from the beginning of a string
    function stripArticle(bandName) {
      return bandName.replace(/^(a |an |the )/i, '').trim();
    }

    // Sort the bands ignoring articles
    const sortedBands = bands.sort((a, b) => {
      const nameA = stripArticle(a).toLowerCase();
      const nameB = stripArticle(b).toLowerCase();
      return nameA.localeCompare(nameB);
    });

    // Add sorted bands to the unordered list
    const bandList = document.getElementById('band');
    sortedBands.forEach(band => {
      const listItem = document.createElement('li');
      listItem.textContent = band;
      bandList.appendChild(listItem);
    });