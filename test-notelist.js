(function(exports) {
  function testNoteListIsEmptyByDefault() {
    var noteList = new NoteList();
      assert.isTrue(noteList.notes.length === 0);
  }
  function testNoteListAddsNoteToNoteList() {
    var noteList = new NoteList();
      noteList.create("hello");
      assert.isTrue(noteList.notes[0].text === "hello");
  }
  testNoteListIsEmptyByDefault();
  testNoteListAddsNoteToNoteList();
})(this);
