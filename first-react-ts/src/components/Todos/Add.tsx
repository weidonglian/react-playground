import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux';
import { Typography, InputBase, FormGroup, Theme } from '@material-ui/core'
import { withStyles, WithStyles, createStyles } from '@material-ui/core'

const styles = (theme: Theme) => createStyles({
    input: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
})

interface UiTodosAddProps extends WithStyles<typeof styles> {
    addTodo: (name: string) => void
}

interface UiTodosAddState {
    name: string
}

export const UiTodosAdd = withStyles(styles)(
class extends React.PureComponent<UiTodosAddProps, UiTodosAddState> {
    state: UiTodosAddState = {
        name: ''
    }

    inputChanged = (evt: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            name: evt.target.value
        })
    }

    keyPressed = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.keyCode == 13) { // Enter key
            this.handleAdd()
        }
    }

    handleAdd = () => {
        if (this.state.name) {
            this.props.addTodo(this.state.name)
            this.setState({
                name: ''
            })
        }
    }

    render() {
        const { addTodo, classes } = this.props;

        return (
            <FormGroup>
                <InputBase
                    className={classes.input}
                    placeholder="List item"
                    inputProps={{ 'aria-label': 'list item' }}
                    onKeyDown={this.keyPressed}
                    value={this.state.name}
                    onChange={this.inputChanged}
                />
            </FormGroup>
        )
    }
}
)