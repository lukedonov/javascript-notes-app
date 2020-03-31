(function(exports) {
  function testNotesReturnsText() {
    var note = new Note("hello");

    assert.isTrue(note.text === "hello");
    // if (note.text !== "hello") {
    //   throw new Error("Expected note.text to return 'hello'")
    // }
  }
  testNotesReturnsText();
})(this);
