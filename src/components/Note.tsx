import React from 'react';

interface NoteProps {
  content: string;
}

const Note: React.FC<NoteProps> = ({ content }) => {
  return <div>{content}</div>;
};

export default Note;
