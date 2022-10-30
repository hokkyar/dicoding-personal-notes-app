import React from 'react';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

function NoteAppBody({ activeNotes, archivedNote, onDelete, addNote, onArchived }) {
    return (
        <div className="note-app__body">
            <NoteInput addNote={addNote} />
            <h2>Catatan Aktif</h2>
            <NotesList onDelete={onDelete} notes={activeNotes} onArchived={onArchived} />
            <h2>Arsip</h2>
            <NotesList onDelete={onDelete} notes={archivedNote} onArchived={onArchived} />
        </div>
    );
}

export default NoteAppBody;