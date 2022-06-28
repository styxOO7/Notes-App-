import Note from './Note.js';
import AddNote from './AddNote.js';

const NotesList = ({notes, handleAddNote, handleDeleteNote}) =>{
    return <div className="notes-list">
            {notes.map((note) => (
                <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={handleDeleteNote}/>
            ))}
            <AddNote handleAddNote={handleAddNote} />
   
    </div>
}

export default NotesList; 