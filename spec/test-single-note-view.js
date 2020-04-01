(function(exports) {
  function testSingleNoteViewOutputsToHTML() {
    let note = new Note('I am a note')
    var singleNoteView = new SingleNoteView();
      assert.isTrue(singleNoteView.viewHTML() === "<div>I am a note</div>");
  }
  
  testSingleNoteViewOutputsToHTML();
})(this);