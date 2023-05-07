
import { blue } from '@mui/material/colors'
import React, { useState } from 'react'
const AllTask = ({ handleInserNode, todo }) => {
    const [expand, setExpand] = useState(false)
    const [showInput, setShowInput] = useState({
        visible: false,
        isMain: false,
    }
    )

    const handleNewTask = (e, isMain) => {
        e.stopPropagation();
        setExpand(true)
        setShowInput({
            visible: !showInput.visible,
            isMain
        })
    }
    const addNewTask = (e) => {
        if ((e.keyCode === 13) && e.target.value) {
            handleInserNode(todo.id, e.target.value, showInput.isMain)
            setShowInput({ ...showInput, visible: false })
        }
    }

    return todo.isMain ? (

        <div >

            <div style={ { display: 'flex', gap: 50, justifyContent: 'center'} }>
                <span style={ { cursor: 'pointer' } } onClick={ () => setExpand(!expand) }>📗{ todo.name }</span>
                <div >
                    <button onClick={ (e) => handleNewTask(e, true) } style={ { background: blue[400], borderRadius: 5, padding: 3, marginRight: 4, fontSize: 12 } }>+mainTask</button>
                    <button onClick={ (e) => handleNewTask(e, false) } style={ { background: blue[400], borderRadius: 5, padding: 3, marginRight: 4, fontSize: 12 } }>+subTask</button>
                </div>
            </div>

            <div style={ { display: expand ? "block" : "none", paddingLeft: 20 } } >
                { showInput.visible && (
                    <div><span>{ showInput.isMain ? "📗" : "📄" }</span>
                        <input placeholder='type....' autoFocus
                            type='text'
                            onBlur={ () => { setShowInput({ ...showInput, visible: false }) } }
                            onKeyDown={ addNewTask }

                        /></div>
                ) }
                { todo.items.map((items) => (
                    <AllTask handleInserNode={ handleInserNode} todo={ items } key={ items.id } />
                )) }</div>
        </div>) : (<span style={ { display: 'flex', cursor: 'pointer' } } >📄{ todo.name }</span>)
}
export default AllTask   