import { NotesAction, NotesActionTypes, addNote } from '../actions/notes';
import { Note } from '../models';
import iassign from 'immutable-assign'

/// state definition
export interface NotesState {
    notes: Note[]
}

/// init state
export const initialNotesState: NotesState = {
    notes: ['First Note', 'Second Note', 'Third Note'].map(name => addNote(name).payload.note)
}

/// reducer
export const notesReducer = (state: NotesState = initialNotesState, action: NotesAction): NotesState => {
    switch(action.type) {
        case NotesActionTypes.ADD_TODO: {
            const { noteId, todo } = action.payload
            const noteIndex = state.notes.findIndex(note => note.id === noteId)
            if (noteIndex === -1) {
                return state;
            } else {
                return iassign(state,
                    s => s.notes[noteIndex].todos,
                    t => ({ ...t, todo })
                )
            }
        }

        case NotesActionTypes.TOGGLE_TODO: {
            const { noteId, todoId } = action.payload
            const noteIndex = state.notes.findIndex(note => note.id === noteId)
            if (noteIndex === -1) {
                return state;
            } else {
                return iassign(state,
                    s => s.notes[noteIndex].todos[todoId],
                    t => (t.done = !t.done, t)
                )
            }
        }

        case NotesActionTypes.ADD_NOTE: {
            const { note } = action.payload
            return iassign(state,
                s => s.notes,
                n => (n.push(note), n)
            )
        }

        case NotesActionTypes.CHANGE_NOTE_VISIBILITY: {
            const { id, visibility } = action.payload
            const noteIndex = state.notes.findIndex(note => note.id === id)
            if (noteIndex === -1) {
                return state;
            } else {
                return iassign(state,
                    s => s.notes[noteIndex],
                    n => (n.visibility = visibility, n)
                )
            }
        }

        default:
            return state
    }
}