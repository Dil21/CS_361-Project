import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';
import { TbTemplate } from "react-icons/tb";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";


export const AddGoal = () => {

    const [name, setName]         = useState('');
    const [date, setDate]     = useState('');
    const [amount, setAmount]     = useState('');
    const [initial, setInitial]     = useState('');
    
    const redirect = useNavigate("/GoalDash");

    const addGoal = async () => {
        const newGoal = { name, date, amount, initial };
        const response = await fetch('/goals', {
            method: 'post',
            body: JSON.stringify(newGoal),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Goal added successfully!`);
        } else {
            alert(`The new Goal was not added! = ${response.status}`);
        }
        redirect("/GoalDash");
    };

// Create display for add goal page 
    return (
        <>
            <header>
                <h1>Goal Creator</h1>
            </header>
        <div class="content">  
        <article>
        <form>
            <fieldset>
                <legend>Create Goal with Template:</legend>
                <label>Do you want to use a template to help create your Goal?</label>
                <p>Clicking on this button will redirect you to the template page.<br></br>
                </p>

                <nav class="global">
                    <Link to="/goalTemplate"><TbTemplate />Goal Template</Link>
                </nav>
            </fieldset>
        </form>
        
            <h2>Create Goal without Template:</h2>
            <p>Please fill out your goal information below.</p>
        <table id="goals">
            <caption>Enter all the fields to create a new goal.</caption>
            <thead>
                <tr>
                    <th>Goal Name</th>
                    <th>Target Date</th>
                    <th>Goal Amount</th>
                    <th>Initial Investment</th>
                    <th>Create Goal</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <td>
                    <label for="name"></label>
                    <input
                        type="text"
                        placeholder="Goal Name"
                        value={name}
                        onChange={e => setName(e.target.value)} 
                        id="name"
                        autofocus />
                </td>

                <td><label for="date"></label>
                    <input
                        type="date"
                        value={date}
                        id="date"
                        placeholder="Target Date"
                        onChange={e => setDate(e.target.value)} 
                        pattern="\d{2}-\d{2}-\d{2}"
                    />
                </td>

                <td><label for="amount"></label>
                    <input
                        type="number"
                        placeholder="Goal Amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)} 
                        id="amount" />
                </td>

                <td><label for="initial"></label>
                    <input
                        type="number"
                        placeholder="Initial Investment Amount"
                        value={initial}
                        onChange={e => setInitial(e.target.value)} 
                        id="initial" />
                </td>

                <td><label for="submit"></label>
                    <button
                        type="submit"
                        onClick={addGoal}
                        id="submit"
                        ><IoIosCheckmarkCircleOutline/></button>
                </td>

                <td>
                <nav className="global">
                    <Link to="/GoalDash">Cancel</Link>
                </nav>
                </td>
            </tbody>
        </table>
            </article>
            </div>
        </>
    );
}

export default AddGoal;
