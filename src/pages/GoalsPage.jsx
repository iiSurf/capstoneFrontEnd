// Import necessary modules
import React, { useState, useEffect } from "react";
import axios from "axios";

const GoalsPage = () => {
  // State that holds goals data
  const [goals, setGoals] = useState([]);
  // State that holds new goal data
  const [newGoal, setNewGoal] = useState("");
  // State that holds a goal that is being edited
  const [editGoal, setEditGoal] = useState(null);
  // State that holds an edited goal
  const [editedGoal, setEditedGoal] = useState("");

  useEffect(() => {
    const fetchGoals = async () => {
      try {
      // Axios get request to fetch goasl data
        const response = await axios.get("http://localhost:5000/front/goals");
        // Update the goals state
        setGoals(response.data);
      } catch (err) {
        // Catch any errors
        console.error("Error fetching the goals", err);
      }
    };

    // Call fetchGoals
    fetchGoals();
  }, []); // Dependency array with nothing runs only once

  // Adding a new goal
  const handleAddGoal = async () => {
    try {
      // Post request to add a new goal
      const response = await axios.post("http://localhost:5000/front/goals", {
        goal: newGoal,
      });
      // Update goals with the new goal
      setGoals([...goals, response.data]);
      // Clear the new goal input
      setNewGoal("");
    } catch (err) {
      // Catching errors
      console.error("Error adding a new goal", err);
    }
  };

  // Set the goal being edited
  const handleEditGoal = (goal) => {
    setEditGoal(goal);
    setEditedGoal(goal.goal);
  };

  // Handle updating a goal
  const handleUpdateGoal = async () => {
    try {
      // Put request to update goal
      const response = await axios.put(
        `http://localhost:5000/front/goals/${editGoal._id}`,
        {
          goal: editedGoal,
        }
      );
      // Update the goal state with a updated goal
      setGoals(
        goals.map((goal) => (goal._id === editGoal._id ? response.data : goal))
      );
      // Clear states
      setEditGoal(null);
      setEditedGoal("");
    } catch (err) {
      // Catch errors
      console.error("Error updating the goal", err);
    }
  };

  // Handle deleting a goal
  const handleDeleteGoal = async (goalId) => {
    try {
      // Delete request to delete the goal
      await axios.delete(`http://localhost:5000/front/goals/${goalId}`);
      // Update the goals state by removing the deleted goal
      setGoals(goals.filter((goal) => goal._id !== goalId));
    } catch (err) {
      // Catch errors
      console.error("Error deleting this goal.", err);
    }
  };

  return (
    <div>
      <h1>Your Goals</h1>
      <ul>
        {goals.length > 0 ? (
          // Map through the goals array
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
