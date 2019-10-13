import React from 'react'
import { Dispatch } from 'redux'
import { addTodo } from '../../actions/todos';
import { connect } from 'react-redux';
import { Typography, IconButton, FormGroup } from '@material-ui/core'

interface UiTodosAddProps {
    add: (name: string) => void;
}

interface UiTodosAddState {
    name: string
}

class UiTodosAdd extends React.PureComponent<UiTodosAddProps, UiTodosAddState> {
    state: UiTodosAddState = {
        name: ''
    }

    onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const val = evt.target.value;
        this.setState((prevState: Readonly<UiTodosAddState>) => ({
            ...prevState,
            name: val
        }));
    }

    onButtonSubmit = (evt: React.MouseEvent<HTMLButtonElement>) => {
        evt.preventDefault();
        this.props.add(this.state.name);
    }

    render() {
        const { add } = this.props;

        return (
            <FormGroup>
                <Typography variant='h3'>Add a new todo</Typography>
                <input value={this.state.name} onChange={this.onInputChange}></input>
                <IconButton onClick={e=>this.state.name && add(this.state.name)}>Add</IconButton>
            </FormGroup>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    add: (name: string) => dispatch(addTodo(name))
});

export const TodosAdd = connect(
    null, mapDispatchToProps
)(UiTodosAdd)

