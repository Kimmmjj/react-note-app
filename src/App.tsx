import React, { useState } from 'react';
import Note from './components/Note';
import './App.css';

const App: React.FC = () => {
  const [notes, setNotes] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleAddNote = () => {
    if (inputValue.trim() === '') return;
    setNotes([...notes, inputValue]);
    setInputValue('');
  };

  const handleDeleteNote = (index: number) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  const handleEditNote = (index: number) => {
    const updatedNote = prompt('Enter the new note content:');
    if (updatedNote !== null && updatedNote.trim() !== '') {
      const updatedNotes = [...notes];
      updatedNotes[index] = updatedNote;
      setNotes(updatedNotes);
    }
  };

  return (
    <div>
      <h1>Note App</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddNote}>생성</button>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <Note
              content={note}
              onDelete={() => handleDeleteNote(index)}
              onEdit={() => handleEditNote(index)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
