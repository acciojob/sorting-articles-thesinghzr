//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// const bands = ['The Plot in You', 'The Devil Wears Prada',
//      'Pierce the Veil', 'Norma Jean', 'The Bled', 
//      'Say Anything', 'The Midway State', 'We Came as Romans ',
//       'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 
//       'Anywhere But Here', 'An Old Dog'];

let sortedSpots = touristSpots.sort((a,b)=>{
    return strip(a).localeCompare(strip(b))
});

function strip(name){
    return name.replace(/^(a |an |the )/i,'').trim();                              
}

const unorderedList = document.querySelector('ul');
unorderedList.setAttribute("id","bands");
unorderedList.setAttribute("id","band");


sortedSpots.forEach((spot)=>{
    const list = document.createElement('li');
    list.textContent = spot;
    unorderedList.appendChild(list);
})

console.log(sortedSpots);