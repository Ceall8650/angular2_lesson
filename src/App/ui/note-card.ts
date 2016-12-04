import {
	Component,
	Input,
	Output,
	EventEmitter
} from '@angular/core'

@Component({
	selector: 'note-card',
	styles:[`
	  .note-card {
	  padding: 15px;
	  border-radius: 2px;
	  width: 100%;
	  position: relative;
	}
	.title {
	  font-size: 1.2rem;
	  font-weight: bold;
	  text-align: left;
	  color: rgba(0,0,0,0.8);
	}
	.value {
	  text-align: left;
	  font-size: 1.4rem;
	  font-weight: 200;
	}
	.icon {
	  position: absolute;
	  color: black;
	  border: 1px solid lightgrey;
	  background-color: white;
	  font-size: 30px;
	  top: -10px;
	  left: -10px;
	  width: 40px;
	  height: 40px;
	  border-radius: 100%;
	  cursor: pointer; 
	}
		
	`],
	template:`
	<div 
		class="note-card row shadow-1"
		(mouseleave) = "toggleCheck()"
		(mouseenter) = "toggleCheck()"
		[ngStyle] = "{'background-color': inputNote.color}"
	>
	  <div 
	  class="icon" 
	  *ngIf = "showcheck"
	  (click)="onChecked()"

	  >
	    <i class="material-icons">check</i>
	  </div>
	  <div class="col-xs-12 title">
	    {{ inputNote.title }}
	  </div>
	  <div class="col-xs-12 value">
	    {{ inputNote.value }}
	  </div>
	</div>
	`
})

export class NoteCard {
	@Input() inputNote = {};
	@Output() checked = new EventEmitter()
	showcheck: boolean = false;

	toggleCheck() {
		this.showcheck = !this.showcheck;
	}

	onChecked(){
		this.checked.next(this.inputNote)
	}
}