import React from 'react';
import { ScreenNotes } from '../screens/Notes';
import { AppHeader } from './AppHeader';

export class App extends React.Component<{}> {
    render() {
        return (
            <React.Fragment>
                <AppHeader />
                <ScreenNotes />
            </React.Fragment>
        )
    }
}

