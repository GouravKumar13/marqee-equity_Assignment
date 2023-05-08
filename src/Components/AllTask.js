
import todos from "../data/Todsdata";

import useTraverseTree from "../hooks/useTraverseTree"

import React, { useState } from 'react'

const AllTask = () => {
    const [todosData, settododata] = useState(todos)
  const { insertNode } = useTraverseTree()
  

  const handleInsertNode = (folderId, item, isMain) => {
    const finalData = insertNode(todosData, folderId, item, isMain)
    console.log(finalData)
    settododata(finalData)
  }


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
            handleInsertNode(todosData.id, e.target.value, showInput.isMain)
            setShowInput({ ...showInput, visible: false })
        }
    }
    return todosData.isMain ? (

        <div className="flex flex-col justify-center items-center  mt-24" >

            <div className="flex gap-2 text-center ">
                <span className="font-serif font-semibold">📗{ todosData.name }</span>
                <div className="flex gap-1">
                    <button onClick={ (e) => handleNewTask(e, true) } className="bg-blue-500 rounded-lg px-2 h-8 text-white font-medium">MainTask</button>
                    {/* {!todosDatas.items.length === 0 ? <button onClick={ (e) => handleNewTask(e, false) } style={ { background: blue[400], borderRadius: 5, padding: 3, marginRight: 4, fontSize: 12 } }>+subTask</button>:} */ }
                    <button  onClick={ (e) => handleNewTask(e, false) } className="bg-blue-500 rounded-lg px-2 h-8 text-white font-medium" >SubTask</button>
                </div>
            </div>

            <div className={ `${expand ? "flex" : "hidden"} justify-center mt-4 ` }  >
                { showInput.visible && (
                    <div  ><span>{ showInput.isMain ? "📗" : "📄" }</span>
                        <input placeholder='type....' autoFocus
                            type='text'
                            onBlur={ () => { setShowInput({ ...showInput, visible: false }) } }
                            onKeyDown={ addNewTask }

                        /></div>
                ) }
                { todosData.items.map((items) => (
                    <AllTask todosData={ items } handleInsertNode={ handleInsertNode } />
                )) }</div>
        </div>) : (<span >📄{ todosData.name }</span>)
}
export default AllTask   