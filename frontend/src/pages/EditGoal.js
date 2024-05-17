import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";
import {VscDiffAdded} from 'react-icons/vsc';

export const EditGoal = ({ goalToEdit }) => {
 
    const [name, setName]           = useState(goalToEdit.name);
    const [date, setDate]           = useState(goalToEdit.date);
    const [amount, setAmount]       = useState(goalToEdit.amount);
    const [current, setCurrent]     = useState(goalToEdit.current);

    const redirect = useNavigate();

    // Request the goal that needs to be edited 
    const editGoal = async () => {
        const response = await fetch(`/goals/${goalToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                name: name, 
                date: date, 
                amount: amount,
                current: current
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The goal has been updated!`);
        } else {
            const errMessage = await response.json();
            alert(`The goal was not updated! ${response.status}. ${errMessage.Error}`);
        }
        redirect("/GoalDash");
    }

    return (
        <>
        <article>
            <h2>Edit a goal</h2>
            <p>You may edit an exisisting goal log here.</p>

            <table id="goals">
                <caption>What needs to be edited?</caption>
                <thead>
                    <tr>
                        <th>Goal Name</th>
                        <th>Target Date</th>
                        <th>Goal Amount</th>
                        <th>Current Amount</th>
                        <th>Save Edit</th>
                    </tr>
                </thead>
                <tbody>
    <tr>
        <td>
            <label htmlFor="name">Goal Name:</label>
            <input
                type="text"
                placeholder="Name of the goal"
                value={name}
                onChange={e => setName(e.target.value)} 
                id="name" 
                autoFocus
            />
        </td>

        <td>
            <label htmlFor="date">Target Date:</label>
            <input
                type="date"
                value={date}
                placeholder="Arrival Date"
                onChange={e => setDate(e.target.value)} 
                id="date"
            />
        </td>

        <td>
            <label htmlFor="amount">Goal Amount:</label>
            <input
                type="number"
                placeholder="Length of goal"
                value={amount}
                onChange={e => setAmount(e.target.value)} 
                id="amount"
            />
        </td>

        <td>
            <label htmlFor="current">Current Amount:</label>
            <input
                type="number"
                placeholder="Length of goal"
                value={current}
                onChange={e => setCurrent(e.target.value)} 
                id="current"
            />
        </td>

        <td>
            <button
                type="submit"
                onClick={editGoal}
                id="submit"
            >
                <VscDiffAdded />
            </button>
        </td>
    </tr>
</tbody>


            </table>
        </article>
        </>
    );
    }
export default EditGoal;
       