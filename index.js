var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var facts = []

function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []
  for (var i = 0; i < musicians.length; i++) { 
  emptyArray.push(musicians[i] + ' plays ' + instruments[i])
  
}  
return emptyArray  
  
}

function johnLennonFacts(Facts)