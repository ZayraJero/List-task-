import React, { useState, useEffect } from 'react'
import './Main.css';

import axios from 'axios';
import { TaskClass } from '../utils/TaskClass';

import Task from '../components/Task';

const Main = () => {

    const [tasks, setTasks] = useState([]);
    const URL = 'https://crudb45.firebaseio.com/task.json';

    const getTasks = () => {
        axios.get(URL)
            .then(respuesta => {
                console.log(respuesta.data);
                setTasks(respuesta.data)
            })
            .catch(error => alert(error));
    }

    const deleteTask = (id) => {
        const URL = `https://crudb45.firebaseio.com/task/${id}.json`;

        axios.delete(URL)
            .then(() => getTasks())
            .catch(error => alert(error))
    }

    const updateTask = (category, title, done, id) => {
        const tareaActual = new TaskClass(category, title, done, id);

        axios.patch(URL, tareaActual)
            .then(() => getTasks())
            .catch(error => alert(error))
    }

    useEffect(() => {
        getTasks()

    }, [])

    return (
        <div>
            <main className="background">
                <div className="container">
                    <h1>Tareas</h1>
                    {
                        Object.keys(tasks).map(id => {
                            return (
                                <Task
                                    title={tasks[id].title}
                                    done={tasks[id].done}
                                    category={tasks[id].category}
                                    id={id}
                                    deleteTask={deleteTask}
                                    updateTask={updateTask}
                                    key={id}
                                />
                            )
                        })

                    }
                </div>
            </main>
        </div>
    )
}

export default Main
