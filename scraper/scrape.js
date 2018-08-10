const ugs = require('ultimate-guitar-scraper')

let tabUrl = 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ver2_crd.htm'
ugs.get(tabUrl, (error, tab) => {
  if (error) {
    console.log(error)
  } else {
    console.log(tab)
  }
})
//write to a file
//function extractChords(chordsDoc)
{
    var rx = /[[[ch](.*?)[[/ch]]/gm;
    var arr = rx.exec(chordsDoc);
    //loop return arr contents
}
[[[ch](.*?)[[/ch]]
