import React, { useState, useEffect } from 'react'
import './Main.css';

import axios from 'axios';

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
            .catch(error => console.log(error));
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
