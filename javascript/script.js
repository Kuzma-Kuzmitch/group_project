$(document).ready(function(){

  var synth = new Tone.AMSynth().toMaster()
  var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster()

  var noteArray = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5',
  'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5']

  var chordArray = ["Major", "Minor", "7th", "Minor7th", "Major7th"]

  var chordTypeArray = ["", "m", "7", "m7", "maj7"]

  var actualChordArray = []

  var functionArray = [majorChord, minorChord, seventh, minorSeventh, majorSeventh]

  var functionSequence = []

  var chordSequence = []

  var arrayOfColor = []

  var holdInterval = null

  var chordLength = 1

  var bpm = 1000

  var keyboard = {
    a : "C4",
    w : "C#4",
    s : "D4",
    e : "D#4",
    d : "E4",
    f : "F4",
    t : "F#4",
    g : "G4",
    y : "G#4",
    h : "A4",
    u : "A#4",
    j : "B4",
    k : "C5",
    o : "C#5",
    l : "D5",
    p : "D#5",
  }



  function mkbut (x, y){
    $("#chordContainer").empty()
    for (var i = 0; i < chordArray.length; i++) {
      var a = $("<div>")
      a.addClass("chordButton btn mr-1")
      a.attr("value", y)
      a.attr("data", i)
      a.attr("root", x)
      a.text(x + chordArray[i])
      $("#chordContainer").append(a)
    }
  }

  function majorChord(a) {
    var root = noteArray.indexOf(a)
    var third = root + 4
    var fifth = root + 7
    polySynth.triggerAttackRelease(noteArray[root], chordLength)
    polySynth.triggerAttackRelease(noteArray[third], chordLength)
    polySynth.triggerAttackRelease(noteArray[fifth], chordLength)
  }

  function minorChord(a) {
    var root = noteArray.indexOf(a)
    var third = root + 3
    var fifth = root + 7
    polySynth.triggerAttackRelease(noteArray[root], chordLength)
    polySynth.triggerAttackRelease(noteArray[third], chordLength)
    polySynth.triggerAttackRelease(noteArray[fifth], chordLength)
  }

  function seventh(a) {
    var root = noteArray.indexOf(a)
    var third = root + 4
    var fifth = root + 7
    var seventh = root + 10
    polySynth.triggerAttackRelease(noteArray[root], chordLength)
    polySynth.triggerAttackRelease(noteArray[third], chordLength)
    polySynth.triggerAttackRelease(noteArray[fifth], chordLength)
    polySynth.triggerAttackRelease(noteArray[seventh], chordLength)
  }

  function minorSeventh(a) {
    var root = noteArray.indexOf(a)
    var third = root + 3
    var fifth = root + 7
    var seventh = root + 10
    polySynth.triggerAttackRelease(noteArray[root], chordLength)
    polySynth.triggerAttackRelease(noteArray[third], chordLength)
    polySynth.triggerAttackRelease(noteArray[fifth], chordLength)
    polySynth.triggerAttackRelease(noteArray[seventh], chordLength)
  }

  function majorSeventh(a) {
    var root = noteArray.indexOf(a)
    var third = root + 4
    var fifth = root + 7
    var seventh = root + 11
    polySynth.triggerAttackRelease(noteArray[root], chordLength)
    polySynth.triggerAttackRelease(noteArray[third], chordLength)
    polySynth.triggerAttackRelease(noteArray[fifth], chordLength)
    polySynth.triggerAttackRelease(noteArray[seventh], chordLength)
  }

  function playNote() {
    $(document).keypress(function(event) {
      console.log(event.key)
      var note = event.key
      var piano = keyboard[note]
      console.log(keyboard[note])
      synth.triggerAttackRelease(piano, 0.5)
    })
  }



    $(".musicButton").on("click", function(){
      mkbut($(this).attr("value"), $(this).attr("data"))
    })

    $(document).on("click", ".chordButton", function(){
      chordType = $(this).attr("data")
      rootNote = $(this).attr("value")
      rootNormal = $(this).attr("root")
      functionSequence.push(chordType)
      chordSequence.push(rootNote)
      actualChordArray.push(rootNormal + chordTypeArray[chordType])
      $("#displaySequence").append(rootNormal + chordTypeArray[chordType] + ", ")
      functionArray[chordType](rootNote)
      console.log(functionSequence)
      console.log(chordSequence)
      console.log(" this is actualChordArray "+ actualChordArray)
    })

    $("#playSong").on("click", function(){
      for (var i = 0; i < chordSequence.length; i++) {
        var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);})
        arrayOfColor.push(randomColor)
      }
      var counter = 0;
      holdInterval = setInterval(  () => {
       if (counter === chordSequence.length ) {
           counter = 0;
       }
       console.log(counter)
       $("body").css("background-color", arrayOfColor[counter])
       functionArray[functionSequence[counter]](chordSequence[counter])
       counter += 1;
    }, bpm)
    $(".lengthButton").prop('disabled', true)
    $(".bpmButton").prop('disabled', true)
    $("#playSong").prop('disabled', true)
    $("#chordContainer").empty()
    playNote()
    })

    $("#clearSong").on("click", function() {
      functionSequence = []
      chordSequence = []
      arrayOfColor = []
      chordLength = 1
      bpm = 1000
      $("body").css("background-color", "white")
      clearInterval(holdInterval)
      $(".lengthButton").prop('disabled', false)
      $(".bpmButton").prop('disabled', false)
      $("#playSong").prop('disabled', false)
      $("#displaySequence").empty()
      $("#chordContainer").empty()
      $(document).off("keypress")
    })

    $("#resetSong").on("click", function() {
      $("body").css("background-color", "white")
      clearInterval(holdInterval)
      chordLength = 1
      bpm = 1000
      $(".lengthButton").prop('disabled', false)
      $(".bpmButton").prop('disabled', false)
      $("#playSong").prop('disabled', false)
      $(document).off("keypress")
    })

    $(".lengthButton").on ("click", function() {
      chordLength = $(this).attr("value")
      console.log("The chord length is " + chordLength + " seconds")
    })

    $(".bpmButton").on ("click", function() {
      bpm = $(this).attr("value")
      console.log("The bpm is " + chordLength + " miliseconds")
    })

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
     console.log("chordArray is recongnized")
     if(matchExists === true) {
         console.log ("you sequence matches a sequence")
     }
     else (console.log ("you testsequence failed matching with scrapedTest perfectly"))
 }

 $("#searchSong").on("click", function() {

   segmentMatch(actualChordArray, objarr["radioheadCreep"])
 })






})
