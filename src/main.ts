import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { App } from './App'
import { Main, NotesContainer} from './App/containers'
import { AppBar, NoteCard, NoteCreator, ColorPicker } from './App/ui'

@NgModule({
	declarations: [
		App, 
		Main,
		AppBar,
		NoteCard,
		NotesContainer,
		NoteCreator,
		ColorPicker
	],
	imports: [BrowserModule, FormsModule, HttpModule],
	bootstrap: [App]
})

export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);

