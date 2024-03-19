import React, { useState } from 'react';
import NoteList from './components/NoteList';

const App: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = () => {
    const newNote = prompt('Enter your note:');
    if (newNote) {
      setNotes([...notes, newNote]);
    }
  };

  return (
    <div>
      <h1>My Note App</h1>
      <button onClick={addNote}>Add Note</button>
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
