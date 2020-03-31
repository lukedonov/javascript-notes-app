function NoteList() {
  this.notes = new Array();
}

NoteList.prototype.addNote = function(note) {
  this.notes.push(note.text)
}

NoteList.prototype.returnAllNotes = function() {
  return this.list
};

