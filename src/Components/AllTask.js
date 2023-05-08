

import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Card } from '@mui/material';

const AllTask = (props) => {
    const { handleInsertNode, todo, isLogin } = props

    const navigate = useNavigate();
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
            handleInsertNode(todo.id, e.target.value, showInput.isMain)
            setShowInput({ ...showInput, visible: false })
        }
    }


    useEffect(() => {
        if (isLogin === "NotloggedIn") {
            navigate('/')
        }
    }, [])
    return (<>

        { todo.isMain ? (
            <Card >
                <div className="flex flex-col justify-center items-center  gap-4" >

                    <div className="flex gap-2 text-center ">
                        <span className="font-serif font-semibold">📗{ todo.name }</span>
                        <div className="flex  gap-1">
                            <button onClick={ (e) => handleNewTask(e, true) } className="bg-blue-500 rounded-lg px-2 h-8 text-white font-medium">MainTask</button>
                            {/* {!todos.items.length === 0 ? <button onClick={ (e) => handleNewTask(e, false) } style={ { background: blue[400], borderRadius: 5, padding: 3, marginRight: 4, fontSize: 12 } }>+subTask</button>:} */ }
                            <button onClick={ (e) => handleNewTask(e, false) } className="bg-blue-500 rounded-lg px-2 h-8 text-white font-medium" >SubTask</button>
                        </div>
                    </div>

                    <div className={ `${expand ? "block" : "hidden"} justify-center pl-12 ` }  >
                        { showInput.visible && (
                            <div  ><span>{ showInput.isMain ? "📗" : "📄" }</span>
                                <input placeholder='type....' autoFocus
                                    type='text'
                                    onBlur={ () => { setShowInput({ ...showInput, visible: false }) } }
                                    onKeyDown={ addNewTask }

                                /></div>
                        ) }
                        { todo.items.map((items) => (
                            <AllTask todo={ items } handleInsertNode={ handleInsertNode } />
                        )) }</div>
                </div></Card>
        ) : (<span  className='flex'>📄{ todo.name }</span>) }
    </>
    )
}
export default AllTask   