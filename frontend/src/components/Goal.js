import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md';

// Create a single goal structure
function Goal({ goal, onEdit, onDelete }) {
    return (
        <div>
            <button onClick={() => onEdit(goal)}>
                <MdEdit />
            </button>
            <button onClick={() => onDelete(goal._id)}>
                <MdDeleteForever />
            </button>
        </div>
    );
}

export default Goal;
