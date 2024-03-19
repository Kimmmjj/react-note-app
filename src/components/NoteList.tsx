import React from 'react';
import Note from './Note';

interface NoteListProps {
  notes: string[];
}

const NoteList: React.FC<NoteListProps> = ({ notes }) => {
  return (
    <div>
      <h2>Notes</h2>
      {notes.map((note, index) => (
        <Note key={index} content={note} />
      ))}
    </div>
  );
};

export default NoteList;
