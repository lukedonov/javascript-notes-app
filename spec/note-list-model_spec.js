describe("NoteList", function() {
  var list = new NoteList();

  it("is empty by default", function() {
    expect(list.notes).toEqual([]);
  })
})