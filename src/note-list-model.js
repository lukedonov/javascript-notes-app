(function(exports) {
  function NoteList() {
  this.notes = new Array();
  };

  NoteList.prototype.create = function(text) {
    this.notes.push(new Note(text,this.notes.length))
  }

  NoteList.prototype.all = function() {
  return this.list
  }
  exports.NoteList = NoteList;
})(this);
