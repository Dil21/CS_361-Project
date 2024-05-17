import React from 'react';

function Pricing() {
    return (
        <>
        <body>
        <h2>Pricing</h2>
        <div class="grid-container">
        <div class="header">
        </div>
            <div class="left">
                <h3>Free</h3>
                Basic Features Included:
                <ul>
                    <li>
                        Goal Dashboard
                    </li>
                    <li>
                        Goal Viewing
                    </li>
                    <li>
                        Monthly Goal + 2 more Goals
                    </li>
                </ul>
            </div>

            <div class="middle">
                <h3>Premium</h3>
                Basic Features +
                <ul>
                    <li>
                        In-Depth Analysis of Spending Habits for the:
                        <ul>
                            Week
                        </ul>
                        <ul>
                            Month
                        </ul>
                        <ul>
                            Year
                        </ul>
                    </li>
                    <li>
                        Unlimited Goals
                    </li>
                </ul>
            </div>  

            <div class="right">
                <h3>Student</h3>
                Everything included in the Premium tier!
            </div>

        </div>

        </body>
        </>
    );
}

export default Pricing;