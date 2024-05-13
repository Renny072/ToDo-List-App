import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { collection, getDocs, updateDoc, doc, deleteDoc, addDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase"; 
import Header from "./components/Header/Header";
import Tasks from "./components/Tasks/Tasks";
import Form from "./components/Form/Form";
import Help from './components/Help/Help';

function App() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTasks = async () => {
            const querySnapshot = await getDocs(collection(db, "tasks"));
            const tasksArray = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            console.log(tasksArray); // Log the tasks array
            setTasks(tasksArray);
            setLoading(false);
        };

        fetchTasks();
    }, []);

    const handleStatusChange = async (id) => {
        const task = tasks.find(task => task.id === id);
        const updatedTask = { ...task, done: !task.done };
        await updateDoc(doc(db, "tasks", id), updatedTask);
        setTasks(tasks.map(task => task.id === id ? updatedTask : task));
    };

    const handleTaskRemove = async (id) => {
        await deleteDoc(doc(db, "tasks", id));
        setTasks(tasks.filter(task => task.id !== id));
    };

    const handleAddTask = async (newTask) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={loading ? <div className="loading-message">Loading...</div> : tasks.length > 0 ? <Tasks tasks={tasks} onStatusChange={handleStatusChange} onTaskRemove={handleTaskRemove} /> : <div>There are no tasks in the list</div>} />
                <Route path="/add" element={<Form onAddTask={handleAddTask} />} />
                <Route path="/help/*" element={<Help />} />
                <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
        </>
    );
}

export default App;
