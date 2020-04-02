(function(exports) {
  function testViewListReturnsNotes() {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    noteList.create("Favourite food: pesto")
    noteList.create("Favourite drink: Seltzer")
    assert.isTrue(noteListView.viewList() === "<ul><li><div><a href='#notes/0'>Favourite food: pest</a></div></li><li><div><a href='#notes/1'>Favourite drink: Sel</a></div></li></ul>" );
  }
  
  testViewListReturnsNotes();
})(this);




                                                //  <ul><li><div><a href='#notes/0'>Favourite food: pest</a></div></li><li><div><a href='#notes/1'>Favourite drink: Sel</a></div></li></ul>