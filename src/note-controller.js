(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList)
  }
  
  NoteController.prototype.changeGreeting = function() {
    document.getElementById("app").innerHTML = "Howdy";
  };
  
  NoteController.prototype.addNote = function(note) { 
    this.noteList.create(note)
  }
  
  NoteController.prototype.outputToHTML = function() {
    return document.getElementById("app").innerHTML = this.noteListView.viewList();
  }
  
  function listenForSubmitEvent() {
    window.addEventListener("submit", submittedFormEvent)
  }

  function submittedFormEvent() {
    event.preventDefault();
    return document.getElementById("textarea").value
  }

  // function createsANewNoteFromForm() {
  //   console.log(submittedFormEvent)
  // }
  
  function makeUrlChangeShowNoteForCurrentPage() {
    window.addEventListener("hashchange", showNoteForCurrentPage);
  };
    
  function showNoteForCurrentPage() {
    showNote(getNoteFromUrl(window.location));
  };
      
  function getNoteFromUrl(location) {
    return location.hash.split("#notes/")[1];
  };
        
  function showNote(note) {
    document
    .getElementById("app")
    .innerHTML = noteList.notes[note].text;
  };

  makeUrlChangeShowNoteForCurrentPage();
  listenForSubmitEvent();
  // createsANewNoteFromForm();
          
  exports.NoteController = NoteController 
})(this)
        
        
var noteList = new NoteList();
var noteController = new NoteController(noteList); 
noteList.create("Hello there, my name is Luke Donovan")
noteList.create("Favourite drink: Seltzer")
window.onload = noteController.outputToHTML();