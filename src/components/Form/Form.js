import { useState } from "react";
import './Form.scss';
import { MdErrorOutline } from "react-icons/md";
import { addDoc, collection } from "firebase/firestore"; 
import { db } from "../../firebase";

function Form({ onAddTask }) {
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('open');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSaving, setIsSaving] = useState(false); // State to track if the task is being saved

    const handleFormSubmission = async (event) => {
        event.preventDefault();
        if (description === '') {
            setErrorMessage('Enter a description.');
        } else {
            setIsSaving(true);
            try {
                const newTask = {
                    description: description,
                    done: false
                };
                console.log('New Task:', newTask); // Log the new task object
    
                const docRef = await addDoc(collection(db, "tasks"), newTask);
                onAddTask({ ...newTask, id: docRef.id });
    
                setDescription('');
                setStatus('open');
                setErrorMessage('');
            } catch (error) {
                setErrorMessage('Error saving task: ' + error.message);
            } finally {
                setIsSaving(false);
            }
        }
    };
    

    return (
        <form onSubmit={handleFormSubmission}>
            <h2>Add a new task:</h2>

            {errorMessage !== '' && (
                <div className="errorMessage"><MdErrorOutline /> {errorMessage}</div>
            )}

            <div className="formField">
                <label>
                    Description: 
                    <input
                        type='text'
                        maxLength={150}
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        disabled={isSaving}
                    />
                </label>
            </div>

            <div>
                <label>
                    Status:
                    <select 
                        value={status}
                        onChange={(event) => setStatus(event.target.value)}
                        disabled={isSaving}
                    >
                        <option value='open'>Open</option>
                        <option value='completed'>Completed</option>
                    </select>
                </label>
            </div>

            <div>
                <button className="addButton" disabled={isSaving}>
                    {isSaving ? 'Saving…' : 'Add'}
                </button>
            </div>
        </form>
    );
}

export default Form;
