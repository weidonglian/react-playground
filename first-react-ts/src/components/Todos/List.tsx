import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../reducers';
import { Todo } from '../../models';
import { Dispatch } from 'redux';
import { getTodos } from '../../selectors/todos';
import { toggleTodo } from '../../actions/todos';

interface UiTodoProps {
    todo: Todo,
    toggleTodo: (todoId: number) =>void
}

const UiTodo = (props: UiTodoProps) => {
    const { todo, toggleTodo } = props;
    return (
        <li key={todo.id} onClick={e=>toggleTodo(todo.id)}>
            {todo.name}
        </li>
    )
};

interface UiTodosListProps {
    todos: Todo[],
    toggleTodo: (todoId: number) => void
}

class UiTodosList extends React.PureComponent<UiTodosListProps> {
    render() {
        const { todos, toggleTodo } = this.props;
        return (
            <div>
                {todos && todos.length > 0 ? (
                    <ul>
                        {todos.map(todo => <UiTodo todo={todo} toggleTodo={toggleTodo} />)}
                    </ul>
                ) : (
                    <p>Nothing has been planed, add your first todo now.</p>
                )}
            </div>
        )
    }
}

const mapStateToProps = (appState: AppState) => ({
    todos: getTodos(appState)
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    toggleTodo: (todoId: number) => dispatch(toggleTodo(todoId)),
});

export const TodosList = connect(
    mapStateToProps,
    mapDispatchToProps
)(UiTodosList)