// this is code for testing regular expressions that can pull the correct chords from a scraped song

//test below has been manually entered to correct for formatting
var scrapedTest = "text[Intro]\n\n[ch]Fsus2[/ch]  [ch]Bbsus2[/ch]  [ch]Ab[/ch]  [ch]Db[/ch](x4)\n\n\n[Verse Intro]\n\n[ch]Fsus2[/ch]  [ch]Bbsus2[/ch]  [ch]Ab[/ch]  [ch]Db[/ch] (x2)\n\n\n[Verse]\n\n[ch]Fsus2[/ch]   [ch]Bbsus2[/ch]  [ch]Ab[/ch]\n Loadup on guns\n  [ch]Db[/ch]          [ch]Fsus2[/ch]\nBring your friends\n     [ch]Bbsus2[/ch] [ch]Ab[/ch]\nIt\'s fun to lose\n    [ch]Db[/ch]    [ch]Fsus2[/ch]\nAnd to pretend\n       [ch]Bbsus2[/ch] [ch]Ab[/ch]\nShe\'s over-   bored\n    [ch]Db[/ch]     [ch]Fsus2[/ch]\nand self-assured \n      [ch]Bbsus2[/ch] [ch]Ab[/ch]   [ch]Db[/ch]      \nI know I know a dirty word\n[ch]Fsus2[/ch]  [ch]Bbsus2[/ch] [ch]Ab[/ch]     [ch]Db[/ch]       \n Hello, hello, hello, how low (x4)\n\n\n[Chorus]\n\n         [ch]Fsus2[/ch]      [ch]Bbsus2[/ch]\nWith the lights out\n       [ch]Ab[/ch]        [ch]Db[/ch]\nIt\'s less dangerous\n        [ch]Fsus2[/ch]   [ch]Bbsus2[/ch]\nHere we are now\n     [ch]Ab[/ch]      [ch]Db[/ch]\nEntertain us\n       [ch]Fsus2[/ch]   [ch]Bbsus2[/ch]\nI feel stupid\n       [ch]Ab[/ch]      [ch]Db[/ch]\nAnd contagious\n        [ch]Fsus2[/ch]   [ch]Bbsus2[/ch]\nHere we are now\n     [ch]Ab[/ch]      [ch]Db[/ch]\nEntertain us\n     [ch]Fsus2[/ch] [ch]Bbsus2[/ch]\nA milato\n     [ch]Ab[/ch]      [ch]Db[/ch]\nAn albino\n     [ch]Fsus2[/ch] [ch]Bbsus2[/ch]\nA misquito\n     [ch]Ab[/ch]   [ch]Db[/ch]\nMy libido     Yeah\n\n[ch]F5[/ch]  [ch]Eb5[/ch] - [ch]F5[/ch] - [ch]Gb5[/ch]\n[ch]F5[/ch]  [ch]Eb5[/ch] - [ch]F5[/ch] - [ch]Bb5[/ch]  [ch]Ab5[/ch]\n[ch]F5[/ch]  [ch]Eb5[/ch] - [ch]F5[/ch] - [ch]Gb5[/ch]\n[ch]F5[/ch]  [ch]Eb5[/ch] - [ch]F5[/ch] - [ch]Bb5[/ch]  [ch]Ab5[/ch]\n\n\n[Verse]\n\nI\'m worse at what I do best\nAnd for this gift I feel blessed\nOur little group has always been\nAnd alwayswill until the end\n\nHello, hello, hello, how low?\nHello, hello, hello, how low?\nHello, hello, hello, how low?\nHello, hello, hello\n\n\n[Chorus]\n\n[ch]Fsus2[/ch]      [ch]Bbsus2[/ch]\nWith the lights out\n          [ch]Ab[/ch]       [ch]Db[/ch]\nIt\'s less dangerous\n        [ch]Fsus2[/ch]   [ch]Bbsus2[/ch]\nHere we are now\n     [ch]Ab[/ch]      [ch]Db[/ch]\nEntertain us\n       [ch]Fsus2[/ch]   [ch]Bbsus2[/ch]\nI feel stupid\n       [ch]Ab[/ch]      [ch]Db[/ch]\nAnd contagious\n        [ch]Fsus2[/ch]   [ch]Bbsus2[/ch]\nHere we are now\n   [ch]Ab[/ch]      [ch]Db[/ch]\nEntertain us\n     [ch]Fsus2[/ch] [ch]Bbsus2[/ch]\nA milato\n     [ch]Ab[/ch]      [ch]Db[/ch]\nAn albino\n      [ch]Fsus2[/ch] [ch]Bbsus2[/ch]\nA misquito\n     [ch]Ab[/ch]   [ch]Db[/ch]\nMy libido     Yeah, hey, yay\n\n\n[Verse]\n\nAnd I forget just why I taste\nOh yeah, I guess it makes me smile\nI found it hard, it\'s hard to find\nOh well, whatever, nevermind\n\nHello, hello, hello, how low?\nHello, hello, hello, how low?\nHello, hello,hello, how low?\nHello, hello, hello\n\n\n[Chorus]\n\n         [ch]Fsus2[/ch]  [ch]Bbsus2[/ch]\nWith the lights out\n          [ch]Ab[/ch]        [ch]Db[/ch]\nIt\'s less dangerous\n        [ch]Fsus2[/ch]   [ch]Bbsus2[/ch]\nHere we are now\n     [ch]Ab[/ch]      [ch]Db[/ch]\nEntertain us\n       [ch]Fsus2[/ch]   [ch]Bbsus2[/ch]\nI feel stupid\n       [ch]Ab[/ch]      [ch]Db[/ch]\nAnd contagious\n        [ch]Fsus2[/ch]   [ch]Bbsus2[/ch]\nHere we are now\n     [ch]Ab[/ch]  [ch]Db[/ch]\nEntertain us\n     [ch]Fsus2[/ch] [ch]Bbsus2[/ch]\nA milato\n [ch]Ab[/ch]      [ch]Db[/ch]\nAn albino\n      [ch]Fsus2[/ch] [ch]Bbsus2[/ch]\nA misquito\n     [ch]Ab[/ch]   [ch]Db[/ch]\nMy libido  \n\n\n[Outro]\n\nA denial, a denial\nA denial, a denial\nA denial, a denial\nA denial, a denial\nA denial";

// var test2 ="hello, [ch]boogie[/ch]";
// console.log(test2);

//This is the correct regular expression to pull from test
var myRegEx = /[^ch\]]+(?=\[\/)/g;
// this finds all matches in test and saves it as variable myArray
var myArray =  scrapedTest.match(myRegEx);
console.log("The format in which the regex stores chords in is ");
console.log(myArray)

//creating a dummy sequence with notation same as the scrape. Our notation differs from this.
var testSeq =["F5", "Gb5", "F5", "Eb5", "F5", "Bb5", "Ab5"];
var testSeq2 = ["F5", "Gb5", "F5", "Eb5", "F5", "Bb5", "Ab5", "crap"];


//Search function
function segmentMatch(seq, song) {
    //seq is the user sequence to be tested for - actualChordArray???
    //song is the array of chords in the scraped song we are testing against
    var thisLong = seq.length;
    var fullLong = song.length;
    var myvar = 0;
    var matchExists = false;

    for (var i = 0; i < fullLong - thisLong; i++) {
        myvar = 0;
        if (seq[0]==song[i]){
            for (var j =0; j < thisLong;  j++){
                if (seq[j]===song[i+j]){ 
                    myvar =myvar +1;
                }
            }
            if (myvar === thisLong){
               matchExists = true;
               break; 
            }
        }
    }
    if(matchExists === true) {
        console.log ("you testsequence matches the scrapedTest")
    }
    else (console.log ("you testsequence failed matching with scrapedTest perfectly"))
}

//testing this function out
// segmentMatch(testSeq2, myArray);
