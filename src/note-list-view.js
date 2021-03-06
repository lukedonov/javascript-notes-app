(function(exports) {
  function NoteListView(list) {
    this.list = list
  }

  NoteListView.prototype.viewList = function() {
    var noteStrings = new Array();
    for (i= 0; i < (this.list.notes).length; i++) {
      noteStrings.push(`<a href='#notes/${this.list.notes[i].id}'>${this.list.notes[i].text.substring(0, 20)}</a>`)
    }
    return "<ul><li><div>" + (noteStrings.join("</div></li><li><div>")) + "</div></li></ul>"
  }

  exports.NoteListView = NoteListView;
})(this);


// noteList= new this.NoteListView();
// noteList.create("Hello");
// noteList.create("hi there")
// noteListview = new NoteListView(noteList);
