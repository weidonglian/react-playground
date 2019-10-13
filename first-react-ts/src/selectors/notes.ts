import { AppState } from '../reducers'
import { createSelector } from 'reselect'
import { NotesState } from '../reducers/notes'

const getNotesState = (state: AppState): NotesState => state.notes

export const getNotes = createSelector([getNotesState], s => s.notes)

export const getNote = (state: AppState, noteId: number) => {
    const notes = getNotes(state)
    const noteIndex = notes.findIndex(note => note.id === noteId)
    return notes[noteIndex]
}