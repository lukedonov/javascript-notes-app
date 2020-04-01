function NoteController(noteList) {
  this.noteList = noteList;
  this.noteListView = new NoteListView(noteList)
}

NoteController.prototype.changeGreeting = function() {
  document.getElementById("app").innerHTML = "Howdy";
};

NoteController.prototype.addNote = function(note) { 
  noteList.create(note)
}

NoteController.prototype.convertToHTML = function() {
  return document.getElementById("app").innerHTML = this.noteListView.viewList();
}

var noteList = new NoteList();
noteList.create("Hello there")
var noteController = new NoteController(noteList);
window.onload = noteController.convertToHTML();

