
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

        <div  style={{width:'100%'}}>

            <div style={ { display: 'flex', gap: 50, justifyContent: 'center',alignItems:'center'} }>
                <span style={ { cursor: 'pointer' } } onClick={ () => setExpand(!expand) }>📗{ todo.name }</span>
                <div >
                    <button onClick={ (e) => handleNewTask(e, true) } style={ { background: blue[400], borderRadius: 5, padding: 3, marginRight: 4, fontSize: 12 } }>+SubTask</button>
                    {/* {!todo.items.length === 0 ? <button onClick={ (e) => handleNewTask(e, false) } style={ { background: blue[400], borderRadius: 5, padding: 3, marginRight: 4, fontSize: 12 } }>+subTask</button>:} */}
                    <button onClick={ (e) => handleNewTask(e, false) } style={ { background: blue[400], borderRadius: 5, padding: 3, marginRight: 4, fontSize: 12 } }>+MainTask</button>
                </div>
            </div>

            <div style={ { display: expand ? "flex" : "none", paddingLeft: 30 , justifyContent:'center',flexDirection:'column',gap:20 } } >
                { showInput.visible && (
                    <div style={{display:'flex',justifyContent:'center'}}><span>{ showInput.isMain ? "📗" : "📄" }</span>
                        <input placeholder='type....' autoFocus
                            type='text'
                            onBlur={ () => { setShowInput({ ...showInput, visible: false }) } }
                            onKeyDown={ addNewTask }

                        /></div>
                ) }
                { todo.items.map((items) => (
                    <AllTask handleInserNode={ handleInserNode} todo={ items } key={ items.id } />
                )) }</div>
        </div>) : (<span style={ { display: 'flex', justifyContent:'center', cursor: 'pointer' } } >📄{ todo.name }</span>)
}
export default AllTask   