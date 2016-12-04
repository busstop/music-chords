import React, { Component } from 'react';
import './App.css';

var instrumentName = 'guitar',
	numberOfFrets = 20,
	tune = ['E', 'B', 'G', 'D', 'A', 'E'];

var flatSign = '\u266d',
	notes = ['A', 'B' + flatSign, 'B', 'C', 'C#', 'D', 'E' + flatSign, 'E', 'F', 'F#', 'G', 'G#'];

var instrumentNotes = function() {
	var arr = [];
	for (var i = 0; i < tune.length; i++) {
		var stringNotes = [];
		for (var j = 0; j <= numberOfFrets; j++) {
			var noteNumber = notes.indexOf(tune[i]) + j;
			while(noteNumber >= notes.length) {
				noteNumber -= notes.length;
			}
			stringNotes.push(notes[noteNumber]);
		}

		arr.push( stringNotes );
	}

	return arr;
}

var keyNotes = function(key) {
	var arr = [ notes[notes.indexOf(key)] ];
	var formulaNumbers = [2,4,5,7,9,11];

	for (var i = 0; i < formulaNumbers.length; i++) {
		if (typeof notes[notes.indexOf(key) + formulaNumbers[i]] !== 'undefined') {
			arr.push( notes[notes.indexOf(key) + formulaNumbers[i]] )
		} else {
			arr.push( notes[notes.indexOf(key) + (formulaNumbers[i]-notes.length)] )
		}
	}

	return arr;
}

var keyChords = function(key) {
	var chords = [],
		formulaNumbers = [2,4],
		keyNotesArr = keyNotes(key),
		chordTypeFormula = [
			{ type: 'major', note: '' },
			{ type: 'minor', note: 'm' },
			{ type: 'minor', note: 'm' },
			{ type: 'major', note: '' },
			{ type: 'major', note: '' },
			{ type: 'minor', note: 'm' },
			{ type: 'diminished', note: 'dim' }
		];

	for (var i = 0; i < keyNotesArr.length; i++) {
		var chord = { 
			type: chordTypeFormula[i].type,
			notes: [keyNotesArr[i]],
			name: keyNotesArr[i] + chordTypeFormula[i].note
		};

		for (var j = 0; j < formulaNumbers.length; j++) {
			if (typeof keyNotesArr[keyNotesArr.indexOf(key) + i + formulaNumbers[j]] !== 'undefined') {
				chord.notes.push( keyNotesArr[keyNotesArr.indexOf(key) + i + formulaNumbers[j]] )
			} else {
				chord.notes.push( keyNotesArr[keyNotesArr.indexOf(key) + i + (formulaNumbers[j]-keyNotesArr.length)] )
			}
		}

		chords.push(chord);
	}

	return chords;
}

var getChordInstancesByNotes = function(notes) {
	var instances = [];

	var fretFrame = 4;
	var allNotes = instrumentNotes();
	var firstNote = notes[0];

	console.log(allNotes);

	for (var i = 0; i < allNotes.length; i++) {
		allNotes[i]
	}

	

	// for (var i = 0; i < allNotes.length; i++) {
	// 	var stringNote = allNotes[i].indexOf(firstNote);
	// 	if (stringNote > -1) {
	// 		var usedStrings = [i];
	// 		for (var j = 0; j < allNotes.length; j++) {
	// 			if (usedStrings.indexOf(j) === -1) {

	// 			}

	// 			usedStrings.push(j);
	// 		};
			

	// 		for (var j = 0; j < allNotes[i].length; j++) {
	// 			var noteName = allNotes[i][j];
	// 			if (noteName) {
	// 				var note = {

	// 				};

	// 				break;
	// 			}
	// 		};
	// 	}
	// };
}

class App extends Component {
	render() {
		var notesToDisplay = [];

		console.log(getChordInstancesByNotes(['A', 'B', 'C']));

		for (var i = 0; i < notes.length; i++) {
			notesToDisplay.push(
				<div key={i}>
					<span>{notes[i]}</span><br />
				</div>
			);
		}
		
		return (
			<div>
				{notesToDisplay}
			</div>
		);
	}
}

export default App;

// -----------------------------------------------------------------

// class App extends Component {
//   render() {
// 	return (
// 	  <div className="App">
// 		<div className="App-header">
// 		  <img src={logo} className="App-logo" alt="logo" />
// 		  <h2>Welcome to React</h2>
// 		</div>
// 		<p className="App-intro">
// 		  To get started, edit <code>src/App.js</code> and save to reload.
// 		</p>
// 	  </div>
// 	);
//   }
// }
