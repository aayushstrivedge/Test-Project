import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { addListitem } from '../toDoListSlice/toDoListSlice'

const ListItem = () => {
    const [topicName, setTopicName] = useState("")
    const dispatch = useDispatch();

    const listItemdata = useSelector((state) => state.listitems.listItems);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addListitem(topicName));
        setTopicName("");

        if (!topicName) {
            alert("Input Box can not be empty.")
        }
    }

    return (
        <Layout>
            <div className='toDoListContainer'>
                <h1>List of the Topics to command</h1>

                <form action="" className='formDiv' onSubmit={handleSubmit}>
                    <label htmlFor="topicName">Topic Name</label>
                    <input type="text" id='topicName' name='topicName' value={topicName} onChange={(e) => setTopicName(e.target.value)} />
                    <input type="submit" value="Add" />
                </form>
                <div className='listItemsContainer'>
                    <h2>List Items</h2>
                    <ol className='listOfInputs'>
                        {listItemdata?.map((p, index) => (
                            <li key={index}><p>{p}</p></li>
                        ))}
                    </ol>
                </div>

            </div>
        </Layout>
    )
}

export default ListItem
