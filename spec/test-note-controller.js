(function(exports) {

  function testNoteControllerCanBeInstantiated() {
    var noteList = new NoteList();
    var noteController = new NoteController(noteList);
    assert.isTrue(noteController.noteList === noteList)
  }

  function testNoteControllerCanOutputToHTML() {
    function NoteControllerDouble(list) { }

    NoteControllerDouble.prototype = {
      outputToHTML: function() {
        return "<ul><li><div><a href='#notes/0'>Favourite drink: Sel</a></div></li></ul>"
      }
    }
  
    let noteList = new NoteList();
    noteList.create("Favourite drink: Seltzer")
    let noteController = new NoteControllerDouble(noteList);
    assert.isTrue(noteController.outputToHTML() === "<ul><li><div><a href='#notes/0'>Favourite drink: Sel</a></div></li></ul>")
  }  
  testNoteControllerCanBeInstantiated();
  testNoteControllerCanOutputToHTML();
})(this)

