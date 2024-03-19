import React from 'react';

interface NoteProps {
  content: string;
  onDelete: () => void;
  onEdit: () => void;
}

const Note: React.FC<NoteProps> = ({ content, onDelete, onEdit }) => {
  return (
    <div>
      <p>{content}</p>
      <button onClick={onEdit}>수정</button>
      <button onClick={onDelete}>삭제</button>
    </div>
  );
};

export default Note;
