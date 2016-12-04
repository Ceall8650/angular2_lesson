import { Component } from '@angular/core';

@Component({
	selector: 'notes-container',
	styles:[`
		.notes {
		  padding-top: 50px;
		}
		.creator {
		  margin-bottom: 40px; 
		}
	`],
	template:`
	<div class="row center-xs notes">
      <div class="col-xs-6 creator">
		<note-creator (createNote) = "onCreateNote($event)"></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row betweene-xs">
          <note-card
            class="col-xs-4"
            [inputNote]="note"
            *ngFor="let note of notes; let i = index "
            (checked) = "onNoteChecked(i, $event)"
          >
          </note-card>
        </div>
      </div>
    </div>
	`


})

export class NotesContainer {
	notes = [
		{title: 'Food', value: 'eat some food',color: 'lightblue'},
		{title: 'Livings', value: 'moving to LA',color: 'lightred'},
		{title: 'Activities', value: 'Have a party',color: 'lightgreen'}
	]

	onNoteChecked(i: number, e){
		console.log(i, e);
		this.notes.splice(i, 1);
	}

	onCreateNote(note){
		this.notes.push(note);
	}
};