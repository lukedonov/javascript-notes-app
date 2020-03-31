describe("NoteList", function() {
  
  var list;
  var note1;
  var note2;

  beforeEach(function() {
    list = new NoteList();
    note1 = jasmine.createSpyObj("note1", ["text"]);
    note2 = jasmine.createSpyObj("note2", ["text"]);
  })

  it("is empty by default", function() {
    expect(list.notes).toEqual([]);
  })

  it("can add a new note to the list", function() {
    list.addNote(note1);
    expect(list.notes).toContain(note1.text);
  });

  it("can return a list of notes", function() {
    note = new Note("hello")
    list.addNote(note);
    expect(list.returnAllNotes()).toEqual("hello");
  });
});