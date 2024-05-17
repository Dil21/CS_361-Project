import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdCreateNewFolder } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
import Goal from '../components/Goal';
import GoalList from '../components/GoalList';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


function GoalDash({ setGoal }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [goals, setGoals] = useState([]);

    // RETRIEVE the entire list of goals from database
    const loadGoals = async () => {
        const response = await fetch('/goals');
        const goals = await response.json();
        setGoals(goals);
    } 
    
    // UPDATE a single goal
    const onEditGoal = async goal => {
        setGoal(goal);
        redirect("/update");
    }

    // DELETE a single goal  
    const onDeleteGoal = async _id => {
        const response = await fetch(`/goals/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/goals');
            const goals = await getResponse.json();
            setGoals(goals);
        } else {
            console.error(`helpful deletion message = ${_id}, status code = ${response.status}`)
        }
    }

        // Display the retrieved goals on the page 
    // useEffect hook calls the function loadGoals() 
    useEffect(() => {
        loadGoals();
    }, []);

    // DISPLAY the goals
    return (
        <div class="content">
        <form>
            <fieldset>
                <label>Do you want to create a new goal?</label>
                <p>Clicking on this button will redirect you to another page where you can add a new goal.
                </p>

                <nav class="global">
                    <Link to="/create"><MdCreateNewFolder />Create New Goal</Link>
                </nav>
            </fieldset>
        </form>
            <h2>Goals:</h2>
            <GoalList
                goals={goals}
                onEdit = {onEditGoal}
                onDelete={onDeleteGoal}
            />
        </div>
    );
}
export default GoalDash;