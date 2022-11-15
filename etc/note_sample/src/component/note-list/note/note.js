import React, { Component } from 'react';
import './note.scss';
import NoteRaw from '../../note-raw/note-raw';
import ModalPage from '../../modal/modal';
import Delete from '../../delete/delete';

class Note extends Component {
    static defaultProps = {
        title: '',
        text: '',
        date: new Date()
    };

    state = {
        showEdicModal: false,
        showDefaultModal: false
    };

    changeEditToogle = () => {
        this.setState({
            showChangeModal: !this.state.showChangeModal
        });
    };

    changeDeleteToogle = () => {
        this.setState({
            showDeleteModal: !this.state.showDeleteModal
        });
    };

    render = () => (
        <div id="note">
            <div id="note-menu">
                <span>{this.props.title}</span>
                <span>
                    <span id="showChangeModal" onClick={this.changeEditToogle}>
                        편집
                    </span>
                    <span id="showDeleteModal" onClick={this.changeDeleteToogle}>
                        삭제
                    </span>
                </span>
            </div>
            <div id="date">
                <span>
                    {this.props.date.toISOString()}
                    {this.props.edited && ' (edited)'}
                </span>
            </div>
            <div>{this.props.text}</div>

            {this.state.showChangeModal && (
                <ModalPage>
                    <NoteRaw
                        noteNumber={this.props.noteNumber}
                        action={this.props.changeNote}
                        close={this.changeEditToogle}
                        subject={'노트 수정'}
                        title={this.props.title}
                        text={this.props.text}
                    />
                </ModalPage>
            )}

            {this.state.showDeleteModal && (
                <ModalPage
                    cloase={() => {
                        this.changeEditToogle({target : { id : 'showDeleteModal' } });
                    }}
                >
                    <Delete
                        noteNumber={this.props.noteNumber}
                        action={this.props.deleteNote}
                        close={this.changeDeleteToogle}
                        title={this.props.title}
                    />
                </ModalPage>
            )}
        </div>
    )
}

export default Note;