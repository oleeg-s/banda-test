import React from 'react';
import {connect} from 'react-redux';
import Input from '../input/input';
import {addTask, updateTaskText, IAction} from '../../actions/todo-actions';

import './post-add-form.css';

interface IPostAddFormProps {
    taskText: string,
    addTask(body: string): IAction,
    updateTaskText(taskText: string): IAction
}

const PostAddForm: React.FC<IPostAddFormProps> = ({taskText, addTask, updateTaskText}) => {
    return (
        <form 
            className='bottom-panel d-flex'
            onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
                e.preventDefault();

                if (taskText.length > 0) {
                    addTask(taskText);
                    updateTaskText('');
                }
                
            }}>
            <Input
                type='text'
                placeholder='Add task...'
                className='form-control new-post-label'
                value={taskText}
                onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                    updateTaskText(e.target.value);
                }}
            />
            <button
                type='submit'
                className='btn btn-outline-secondary'>
                Add</button>
        </form>
    );
};

const mapStateToProps = ({taskText}: { taskText: string }): { taskText: string } => {
    return {
        taskText
    };
};

const mapDispatchToProps = {
        addTask,
        updateTaskText
};

export default connect(mapStateToProps, mapDispatchToProps)(PostAddForm);