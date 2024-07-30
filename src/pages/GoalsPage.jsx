import React, { useState, useEffect } from "react";
import axios from "axios";

const GoalsPage = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState("");
  const [editGoal, setEditGoal] = useState(null);
  const [editedGoal, setEditedGoal] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/front/goals")
      .then((response) => {
        setGoals(response.data);
      })
      .catch((err) => {
        console.error("Error fetching the goals", err);
      });
  }, []);

  const handleAddGoal = () => {
    axios
      .post("http://localhost:5000/front/goals", { goal: newGoal })
      .then((response) => {
        setGoals([...goals, response.data]);
        setNewGoal("");
      })
      .catch((err) => {
        console.error("Error adding a new goal", err);
      });
  };

  const handleEditGoal = (goal) => {
    setEditGoal(goal);
    setEditedGoal(goal.goal);
  };

  const handleUpdateGoal = () => {
    axios
      .put(`http://localhost:5000/front/goals/${editGoal._id}`, {
        goal: editedGoal,
      })
      .then((response) => {
        setGoals(
          goals.map((goal) =>
            goal._id === editGoal._id ? response.data : goal
          )
        );
        setEditGoal(null);
        setEditedGoal("");
      })
      .catch((err) => {
        console.error("Error updating the goal", err);
      });
  };

  const handleDeleteGoal = (goalId) => {
    axios
      .delete(`http://localhost:5000/front/goals/${goalId}`)
      .then(() => {
        setGoals(goals.filter((goal) => goal._id !== goalId));
      })
      .catch((err) => {
        console.error("Error deleting this goal.", err);
      });
  };

  return (
    <div>
      <h1>Your Goals</h1>
      <ul>
        {goals.length > 0 ? (
          goals.map((goal) => {
            return (
              <li key={goal._id}>
                {editGoal && editGoal._id === goal._id ? (
                  <>
                    <input
                      type="text"
                      value={editedGoal}
                      onChange={(e) => setEditedGoal(e.target.value)}
                    />
                    <button onClick={handleUpdateGoal}>Update</button>
                    <button onClick={() => setEditGoal(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    {goal.goal} {goal.startDate}
                    <button onClick={() => handleEditGoal(goal)}>Edit</button>
                    <button onClick={() => handleDeleteGoal(goal._id)}>
                      Delete
                    </button>
                  </>
                )}
              </li>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
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
