$(document).ready(function(){

  var synth = new Tone.AMSynth().toMaster()
  var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster()

  var noteArray = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5',
  'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5']

  var chordArray = ["Major", "Minor", "7th", "Minor7th", "Major7th"]

  var functionArray = [majorChord, minorChord, seventh, minorSeventh, majorSeventh]

  var functionSequence = []

  var chordSequence = []







  function mkbut (x, y){
    $("#chordContainer").empty()
    for (var i = 0; i < chordArray.length; i++) {
      var a = $("<button>")
      a.addClass("chordButton btn btn-primary mr-1")
      a.attr("value", y)
      a.attr("data", i)
      a.text(x + chordArray[i])
      $("#chordContainer").append(a)
    }
  }

  function majorChord(a) {
    var root = noteArray.indexOf(a)
    var third = root + 4
    var fifth = root + 7
    polySynth.triggerAttackRelease(noteArray[root], 1)
    polySynth.triggerAttackRelease(noteArray[third], 1)
    polySynth.triggerAttackRelease(noteArray[fifth], 1)
  }

  function minorChord(a) {
    var root = noteArray.indexOf(a)
    var third = root + 3
    var fifth = root + 7
    polySynth.triggerAttackRelease(noteArray[root], 1)
    polySynth.triggerAttackRelease(noteArray[third], 1)
    polySynth.triggerAttackRelease(noteArray[fifth], 1)
  }

  function seventh(a) {
    var root = noteArray.indexOf(a)
    var third = root + 4
    var fifth = root + 7
    var seventh = root + 10
    polySynth.triggerAttackRelease(noteArray[root], 1)
    polySynth.triggerAttackRelease(noteArray[third], 1)
    polySynth.triggerAttackRelease(noteArray[fifth], 1)
    polySynth.triggerAttackRelease(noteArray[seventh], 1)
  }

  function minorSeventh(a) {
    var root = noteArray.indexOf(a)
    var third = root + 3
    var fifth = root + 7
    var seventh = root + 10
    polySynth.triggerAttackRelease(noteArray[root], 1)
    polySynth.triggerAttackRelease(noteArray[third], 1)
    polySynth.triggerAttackRelease(noteArray[fifth], 1)
    polySynth.triggerAttackRelease(noteArray[seventh], 1)
  }

  function majorSeventh(a) {
    var root = noteArray.indexOf(a)
    var third = root + 4
    var fifth = root + 7
    var seventh = root + 11
    polySynth.triggerAttackRelease(noteArray[root], 1)
    polySynth.triggerAttackRelease(noteArray[third], 1)
    polySynth.triggerAttackRelease(noteArray[fifth], 1)
    polySynth.triggerAttackRelease(noteArray[seventh], 1)
  }

  function dummy() {
    console.log("hello")

  }

    $(".musicButton").on("click", function(){
      mkbut($(this).attr("value"), $(this).attr("data"))
    })

    $(document).on("click", ".chordButton", function(){
      chordType = $(this).attr("data")
      rootNote = $(this).attr("value")
      var obj = {
        type : chordType,
        root : rootNote,
      }
      functionArray[chordType](rootNote)
      functionSequence.push(obj)
      console.log(functionSequence)
    })

    $("#playSong").on("click", function(){
      //This is where I want to play the song via the functionSequence array
    })

    $("#clearSong").on("click", function() {
      songSequence = []
    })






})
