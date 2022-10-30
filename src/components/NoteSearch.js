import React from 'react';

class NoteSearch extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi
        this.state = {
            words: ''
        }

        // bind
        this.onSearchChangeHandler = this.onSearchChangeHandler.bind(this);
        this.searchEngine = this.searchEngine.bind(this);
    }

    onSearchChangeHandler(event) {
        this.setState(() => {
            return {
                words: event.target.value
            }
        });
    }

    searchEngine() {
        this.props.searchNote(this.state.words)
    }

    render() {
        return (
            <div className="note-search">
                <input type="text" autoComplete='off' placeholder='Cari catatan...' value={this.state.words} onChange={this.onSearchChangeHandler} onKeyUp={this.searchEngine} />
            </div>
        );
    }
}

export default NoteSearch;