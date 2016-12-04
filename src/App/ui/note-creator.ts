import { 
	Component,
	Output,
	EventEmitter
} from '@angular/core';
@Component({
	selector: 'note-creator',
	styles: [`
		.note-creator {
	      padding: 20px;
	      background-color: white;
	      border-radius: 3px;
	    }
	    .title {
	      font-weight: bold;
	      color: rgba(0,0,0,0.8);
	    }
	    .full {
	      height: 100px;
	    }
		
	`],
	template: `
		<div class="note-creator shadow-2" [ngStyle]="{'background-color': newNote.color}">
	      <form class="row" (submit) ="onCreateNote()">
	        <input
	          type="text"
	          [(ngModel)] = "newNote.title"
	          name = "a"
	          placeholder="Title"
	          class="col-xs-10 title"
	          *ngIf = "fullForm"
	        >
	        <input
	          type="text"
	          (focus) = "toggle(true)"
	          [(ngModel)] = "newNote.value"
	          name = "newNoteValue"
	          placeholder="Take a note..."
	          class="col-xs-10"
	        >
	        <div class="actions col-xs-12 row between-xs" *ngIf="fullForm">
	        	<div class="col-xs-3">
	        		<color-picker
						[colors] = "colors"
						(selected) = "onSelectColor($event)"
	        		></color-picker>
	        	</div>
	          <button
	            type="submit"
	            class="btn-light"
	           >
	            Done
	          </button>
	        </div>
	      </form>
	    </div>
	`
})

export class NoteCreator {
	@Output() createNote = new EventEmitter();

	newNote = {
		title: '',
		value: '',
		color: 'lightgrey'
	};

	colors:string[] = ["darkred", "blue", "green", "yellow"]

	fullForm = false;

	onCreateNote(){
		const { title, value, color } = this.newNote;

		if(title && value){
			this.createNote.next({title, value, color});
		}

		this.reset();
		this.toggle(false);
	}

	reset(){
		this.newNote = {
			title: '',
			value: '',
			color: 'lightgrey'
		}
	}

	toggle(value){
		this.fullForm = value;
	}

	onSelectColor(color){
		console.log(color);
		this.newNote.color= color;
	}
}; 