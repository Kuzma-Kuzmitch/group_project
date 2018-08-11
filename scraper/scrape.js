var fs = require('fs')

const ugs = require('ultimate-guitar-scraper')

var myRegEx = /[^ch\]]+(?=\[\/)/g;



//tab url is the song the song that is being scraped

let tabUrl = 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ver2_crd.htm'

ugs.get(tabUrl, (error, tab) => {

  if (error) {

    console.log(error)

  } else {

    //writes to txt file

    var tabArr = JSON.stringify(tab.content)

    var testArr = tabArr.match(myRegEx)

    fs.writeFile('song.txt' , testArr , function(error){

      if (error) {

        console.log(error)

      }

    })



  }

});


//---------------------------older version of code, has errors----------
// const ugs = require('ultimate-guitar-scraper')

// let tabUrl = 'https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ver2_crd.htm'
// ugs.get(tabUrl, (error, tab) => {
//   if (error) {
//     console.log(error)
//   } else {
//     console.log(tab)
//   }
// })
// //write to a file
// //function extractChords(chordsDoc)
// {
//     var rx = /[[[ch](.*?)[[/ch]]/gm;
//     var arr = rx.exec(chordsDoc);
//     //loop return arr contents
// }
// [[[ch](.*?)[[/ch]]