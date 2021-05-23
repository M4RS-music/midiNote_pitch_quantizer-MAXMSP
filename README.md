# midi2Scale
# midiNote_pitch_quantizer-MAXMSP
A javascript (jsui) object that quantizes the pitch of a midi note to an 8 step scale

# HOW TO USE IT
Create a jsui object in a Max For Live or Max MSP patcher. \n
Select midi2Scale.js as the javascript file in the inspector of the jsui object, this object will now be refered to as midi2Scale.
On inlet 0 of midi2Scale connect the message "midiToScale $1" using a patch cord.
To inlet 0 of the message "midiToScale $1" send an integer value that represents the pitch of a midi note.
On inlet 1 of midi2Scale connect the message "setScale $1 $2" using a patch cord.
To inlet 0 of the message "midiToScale $1" connect a dial that sends an integer value between 1-12, this dial will set the root note of the scale.
To inlet 0 of the message "midiToScale $1" use a UI object of your choice that sends a value between 0-6. This will set the mode that the scale is calculated with.
    The values 0-6 will correspond to the following modes [ionian, dorian, phrygian, lydian, mixolydian, aeolian, locrian]
From outlet 0 of midi2Scale you will recieve midi pitch integers that fit within the scale you select.
