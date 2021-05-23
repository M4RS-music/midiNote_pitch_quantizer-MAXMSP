//COPYRIGHT 2021 M4RS, Martin Janda

autowatch = 1;
inlets = 2;
outlets = 1;

var ionian=[], dorian=[], phrygian=[], lydian=[], mixolydian=[], aeolian=[], locrian=[], currentScale=[], modes=[];

//
//2 = whole note, 1 = half note
ionian = [2,2,1,2,2,2,1];
dorian = [2,1,2,2,2,1,2];
phrygian = [1,2,2,2,1,2,2];
lydian = [2,2,2,1,2,2,1];
mixolydian = [2,2,1,2,2,1,2];
aeolian = [2,1,2,2,1,2,2];
locrian = [1,2,2,1,2,2,2];
modes = [ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian];




function setScale(root, modeI){ //interface function called by max, will set root and mode
//param root should be an integer 1-12, param mode should be an integer 1-6 (index of position in array mode[])
  calculateScale(root, modeI);
}

function calculateScale(root, modeI){
  var mode = modes[modeI];
  var x = 0;
  var it = 0;
  for(var i=0; i<128; i++){
    if(x==0){currentScale[i] = root + it*12} else{
      currentScale[i] = currentScale[i-1]+mode[x-1];
    }
    if(x==6){x=0; it++} else{x++}
  }
//  post(currentScale);//DEBUG
}

setScale(1, 1);
//post(currentScale);//DEBUG



function midiToScale(n){
  //takes midi note n, and quantizes it to currentScale
  const needle = n;

  const closest = currentScale.reduce(function(a,b){
    return Math.abs(b - needle) < Math.abs(a - needle) ? b : a;
  });

  outlet(0, closest);
}
