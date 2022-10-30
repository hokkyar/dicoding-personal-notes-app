import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi
        this.state = {
            title: '',
            body: '',
            limit: 50,
        };

        // bind
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitChangeEventHandler = this.onSubmitChangeEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const countCharacter = event.target.value.length;
        let sisa = 50 - countCharacter;
        if (sisa < 0) {
            return;
        }

        this.setState(() => {
            return {
                title: event.target.value,
                limit: sisa
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitChangeEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }


    render() {
        return (
            <div className="note-input">
                <h2>Tambah Catatan</h2>
                <form onSubmit={this.onSubmitChangeEventHandler}>
                    <p className='note-input__title__char-limit'>Sisa karakter: {this.state.limit}</p>
                    <input type="text" className='note-input__title' placeholder='Ini adalah judul...' required value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                    <textarea type='text' className='note-input__body' placeholder='Tuliskan catatanmu disini...' value={this.state.body} onChange={this.onBodyChangeEventHandler} ></textarea>
                    <button type='submit'>Tambah</button>
                </form>
            </div>
        );
    }
}

export default NoteInput;