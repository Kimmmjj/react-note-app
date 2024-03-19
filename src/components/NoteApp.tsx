import React, { useState } from 'react';

interface Note {
  id: number;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddNote = () => {
    if (inputValue.trim() === '') return;
    const newNote: Note = { id: Date.now(), content: inputValue };
    setNotes([...notes, newNote]);
    setInputValue('');
  };

  const handleDeleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const handleEditNote = (index: number) => {
    setInputValue(notes[index].content);
    setEditIndex(index);
  };

  const handleSaveEdit = () => {
    if (editIndex === null) return;
    const updatedNotes = [...notes];
    updatedNotes[editIndex].content = inputValue;
    setNotes(updatedNotes);
    setInputValue('');
    setEditIndex(null);
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
          <li key={note.id}>
            {index === editIndex ? (
              <>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                <span>{note.content}</span>
                <button onClick={() => handleEditNote(index)}>수정</button>
                <button onClick={() => handleDeleteNote(note.id)}>삭제</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
