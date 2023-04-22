import { useState, useContext } from "react";
import { AdminContext } from "App";
import Login from "./Login";

function CreateNews(){

    const { currentAdmin } = useContext(AdminContext)

    const [form, setForm] = useState({
        title: "",
        description: "",
        date: "",
    })

    function handleChange(e){
        const {name, value} = e.target
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        addUserId()
        const { news, ...formData } = form;
        fetch("/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    console.log(data)
                })
            }else{
                console.log("error")
            }
        })
    }

    function addUserId(){
        setForm({
            ...form,
            admin_id: currentAdmin.id
        })
    }

    return(
        <>
        {
            !currentAdmin ? 

            <Login /> 

        :
        
        <div className="admin-container">
            <div className="admin-news-">
                <div className="admin-news-card">
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="container">

                            <input 
                            ype="text" 
                            name="title" 
                            value={form.title} 
                            className="mt-7 p-3"
                            placeholder="Title"
                            onChange={handleChange}
                            />
                            <textarea 
                            type="text" 
                            name="description" 
                            value={form.description} 
                            className="mt-7 p-3"
                            placeholder="Ready to write some exciting news?"
                            onChange={handleChange}
                            />
                            <input type="date"
                            name="date"
                            value={form.date}
                            className="mt-7"
                            onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn-purple mt-7">
                            Create News
                        </button>
                    </form>
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default CreateNews