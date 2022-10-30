import React from 'react';
import { showFormattedDate } from '../utils';
import DeleteButton from './DeleteButton';
import ArchivedButton from './ArchiveButton';

function NoteItem({ id, title, createdAt, body, onDelete, onArchived, isArchived }) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{title}</h3>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">
                    {body}
                </p>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete} />
                <ArchivedButton id={id} onArchived={onArchived} isArchived={isArchived} />
            </div>
        </div>
    );
}

export default NoteItem;