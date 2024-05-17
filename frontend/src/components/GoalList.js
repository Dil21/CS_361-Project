import React from 'react';
import Goal from './Goal';

import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function GoalList({ goals, onDelete, onEdit }) {
    return (
        <div>
        {goals.map((goal, i) => 
            <div key={i} className='goal'>
            <h3>Goal: {goal.name}</h3>
            <h4>Target Date: {goal.date.slice(0,10)} </h4>
            <table class="goalTable">
                    <td>
                    <Goal 
                        goal={goal}
                        key={i}
                        onEdit={onEdit}
                        onDelete={onDelete} />
                    </td>
            </table>
                <CanvasJSChart options={{
                        animationEnabled: true,
                            title: {
                                text: ""
                            },
                                    
                            subtitles: [{
                                text: `${((goal.current / goal.amount) * 100).toFixed(2)}% Complete`,
                                verticalAlign: "center",
                                fontSize: 24,
                                dockInsidePlotArea: true
                            }],
                                    
                            data: [{
                                type: "doughnut",
                                showInLegend: true,
                                indexLabel: "{name}: {y}",
                                yValueFormatString: "'$'#,###",
                                dataPoints: [
                                    { name: "Target Amount", y: goal.amount},
                                    { name: "Current Amount", y: goal.current },
                                        ]
                                    }]
                    }} />

            </div>
            )}
        </div>
)};

export default GoalList;

