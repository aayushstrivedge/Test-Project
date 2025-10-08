import React, { useState } from 'react'
import Layout from '../Layout/Layout'

const ListItem = () => {
    const [topicName, setTopicName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = topicName;
        const input = document.getElementsByClassName("listOfInputs")[0];
        const item = document.createElement("li")
        if (data) {
            localStorage.setItem(
                "list", data
            )
            item.textContent = localStorage.getItem("list");
            input.appendChild(item);
            setTopicName("")

        } else {
            alert("Input Box can not be empty.")
        }
    }

    return (
        <Layout>
            <div className='toDoListContainer'>
                <h1>List of the Topics to command</h1>

                <form action="" className='formDiv'>
                    <label htmlFor="topicName">Topic Name</label>
                    <input type="text" id='topicName' name='topicName' value={topicName} onChange={(e) => setTopicName(e.target.value)} />
                    <input type="submit" value="Add" name='Add' onClick={handleSubmit} />
                </form>
                <div className='listItemsContainer'>
                    <h2>List Items</h2>
                    <ol className='listOfInputs'>
                    </ol>
                </div>

            </div>
        </Layout>
    )
}

export default ListItem
