import React from 'react';

const TodoS = (props) => {

    const { tasks, handleComplete, handleRemove, handleRemoveAll } = props
    let id = "check";
    return (
        <ul className='todo'>
            {tasks
                .map((task, index) =>
                    <li key={index}>
                        <div className='checkAndTask'>
                            <label className='checkContainer'>
                                <input type="checkbox" onClick={() => handleComplete(index)} />
                                <span className="checkmark"></span>
                            </label>
                            <span id={id + index}> {task.task}</span>
                        </div>
                        <button onClick={() => handleRemove(index)}>🗑️</button>
                    </li>
                )}
            {tasks.length > 1 && <p><button className='deleteAll' onClick={() => handleRemoveAll()}>delete all</button></p>}
        </ul>
    );
}

export default TodoS;