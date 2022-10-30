import React from 'react';
import { getInitialData } from '../utils';
import NoteSearch from './NoteSearch';
import NoteAppBody from './NoteAppBody';

class PersonalNotesApp extends React.Component {

    constructor(props) {
        super(props);

        // inisialisasi
        this.state = {
            allnotes: getInitialData(),
            notes: getInitialData(),
        };

        // bind
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
    }

    onDeleteHandler(id) {
        const allnotes = this.state.allnotes.filter(allnotes => allnotes.id !== id);
        const notes = this.state.notes.filter(notes => notes.id !== id);
        this.setState({ allnotes, notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false,
                    }
                ],
                allnotes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date(),
                        archived: false,
                    }
                ],
            }
        });
    }

    onSearchHandler(words) {
        const filteredNote = this.state.allnotes.filter(allnotes => allnotes.title.toLowerCase().includes(words.toLowerCase()));
        this.setState(() => {
            return {
                notes: filteredNote,
            }
        });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) => {
            if (note.id === id) {
                if (note.archived === false) {
                    return { ...note, archived: true };
                } else {
                    return { ...note, archived: false };
                }
            }
            return note;
        });
        this.state.allnotes = notes;
        this.setState({ notes });
    }


    render() {
        const activeNotes = this.state.notes.filter((note) => {
            return note.archived === false;
        });
        const archivedNotes = this.state.notes.filter((note) => {
            return note.archived === true;
        });

        return (
            <>
                <div className="note-app__header">
                    <h1>Notes App</h1>
                    <NoteSearch searchNote={this.onSearchHandler} />
                </div>
                <NoteAppBody activeNotes={activeNotes} archivedNote={archivedNotes} addNote={this.onAddNoteHandler} onDelete={this.onDeleteHandler} onArchived={this.onArchiveHandler} />
            </>
        );
    }
}

export default PersonalNotesApp;