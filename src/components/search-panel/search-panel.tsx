import React from 'react';
import {connect} from 'react-redux';
import Input from '../input/input';
import {searchTask, IAction} from '../../actions/todo-actions';

import './search-panel.css';

interface ISearchPanelProps {
    searchText: string,
    searchTask(text: string): IAction
}

const SearchPanel:React.FC<ISearchPanelProps> = ({searchText, searchTask}) => {
    return (
        <Input
            type='text'
            placeholder='Search...'
            className='form-control search-input'
            value={searchText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
                searchTask(e.target.value);
            }}
        />
    );
};

const mapStateToProps = ({searchText}: { searchText: string }): { searchText: string } => {
    return {
        searchText
    };
};

const mapDispatchToProps = {
    searchTask
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);