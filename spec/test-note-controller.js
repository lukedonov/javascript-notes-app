(function(exports) {
  function testNoteControllerCanBeInstantiated() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    assert.isTrue(noteController.noteList === noteList)
  }

  function testNoteControllerCanConvertToHTML() {
    var noteList = new NoteList();
    noteList.create("Favourite drink: Seltzer")
    var noteController = new NoteController(noteList);
    assert.isTrue(noteController.convertToHTML() === "<ul><li><div>Favourite drink: Seltzer</div></li></ul>")
  }
  
  testNoteControllerCanBeInstantiated();
  testNoteControllerCanConvertToHTML();
})(this)