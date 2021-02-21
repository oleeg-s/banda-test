import React from 'react';
import {connect} from 'react-redux';
import Button from '../button/button';
import {filterByCompleted, filterByActive, filterByAll, IAction} from '../../actions/todo-actions';

interface IPostStatusFilterProps {
    filter: string,
    filterByCompleted(): IAction,
    filterByActive(): IAction,
    filterByAll(): IAction
}

const PostStatusFilter: React.FC<IPostStatusFilterProps> = ({filter, filterByCompleted, filterByActive, filterByAll}) => {

    const buttons = [
        {id: 1, label: 'All', name: 'all', filterBy: filterByAll},
        {id: 2, label: 'Active', name: 'active', filterBy: filterByActive},
        {id: 3, label: 'Completed', name: 'completed', filterBy: filterByCompleted}
    ];
    
    const elements = buttons.map(item => {
        const {label, name, id, filterBy} = item;
    
        return (
            <Button 
                key={id}
                label={label}
                name={name}
                className={filter === name ? 'btn btn-info' : 'btn btn-outline-secondary'}
                filterBy={filterBy}/>
        );
    });

    return (
        <div className='btn-group'>
            {elements}
        </div>
    );
};

const mapStateToProps = ({filter}: { filter: string }): { filter: string } => {
    return {
        filter
    };
};

const mapDispatchToProps = {
    filterByCompleted,
    filterByActive,
    filterByAll
};

export default connect(mapStateToProps, mapDispatchToProps)(PostStatusFilter);