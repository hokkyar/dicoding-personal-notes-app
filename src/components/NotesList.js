import React from 'react';
import NoteItem from './NoteItem';

function NotesList({ notes, onDelete, onArchived }) {
    if (notes.length !== 0) {
        return (
            <div className="notes-list">
                {
                    notes.map((note) =>
                        <NoteItem {...note} key={note.id} id={note.id} onDelete={onDelete} onArchived={onArchived} isArchived={note.archived} />
                    )
                }
            </div>
        );
    }

    return (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
    );
}

export default NotesList;