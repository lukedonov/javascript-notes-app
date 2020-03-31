(function(exports) {
  function testNotesReturnsText() {
    var note = new Note("hello");

    assert.isTrue(note.text === "hello");
  }
  testNotesReturnsText();
})(this);
