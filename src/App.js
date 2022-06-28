import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./Components/NotesList";
import Search from "./Components/Search";
import Header from "./Components/Header";

const App = () => {

  const [notes, setNotes] = useState([
    

  ]);
  const [searchNote, setSearchNote] = useState('');
  
  const [darkMode, setDarkMode] = useState(false);

   // for fetching data:
   useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
		if (savedNotes) {
			setNotes(savedNotes);
		}
	}, []);

	useEffect(() => {
    localStorage.setItem('notes-app-data',JSON.stringify(notes));
    }, [notes]);



  // for new note save:
  const addNote = (text) =>{
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  //for delete note:
  const deleteNote = (id) =>{
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes);
  }


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode}/>
      <Search handleSearchNote={setSearchNote}/>
      <NotesList 
      notes={notes.filter((note) => note.text.toLowerCase().includes(searchNote))} 
      handleAddNote = {addNote} 
      handleDeleteNote ={deleteNote}/>
      </div>
    </div>
  )
}


export default App;
