import React, { useState, useEffect} from "react";
import axios from "axios";

const GoalsPage = () => {
    const [goals, setGoals] = useState([]);
    const [newGoal, setNewGoal] = useState("");

    useEffect(() => {
        axios
            .get("/front/goals")
            .then((response) => {
                setGoals(response.data);
        })
        .catch((err) => {
            console.error('Error with fetching the goals', err);
        });
    }, []);

    const handleAddGoal = () => {
        axios
            .post("/front/goals", { goal: newGoal })
            .then((response) => {
                setGoals([...goals, response.data]);
                setNewGoal("");
            })
            .catch((err) => {
                console.error('Error with adding a new goal', err)
            })
    };

    return (
        <div>
            <h1>Your Goals</h1>
            <ul>
                {goals.map((goal) => {
                    <li key={goal._id}>{goal.goal}</li>
                })}
            </ul>
            <input
                type="text"
                value={newGoal}
                onChange={(e) => setNewGoal(e.target.value)}
                placeholder="Add your goals here"
                />
                <button onClick={handleAddGoal}>Add a Goal</button>
        </div>
    );

};

export default GoalsPage;