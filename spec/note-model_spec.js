'use strict';

describe("Note", function() {

  it('creates a new note', function() {
     var note = new Note("Hello");
    expect(note.text).toEqual("Hello");
  });
});



