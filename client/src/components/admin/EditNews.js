import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AdminContext } from "App";
import Login from "./Login";
import CloseButton from "./CloseButton";

function EditNews(){

    const params = useParams()
    const navigate = useNavigate()
    const { currentAdmin } = useContext(AdminContext)

    const [form, setForm] = useState("")
    useEffect(() => {
        fetch(`/news/${params.id}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
                }
                })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    setForm(data)
                })
            }else{
                console.log("error")
            }
        })
    }, [])

    function handleChange(e){
        const {name, value} = e.target
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    function handleSubmit(e){
        e.preventDefault()
        const { news, ...formData } = form;
        fetch("/news", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    navigate("/admin/news")
                })
            }else{
                console.log("error")
            }
        })
    }

    function handleDelete(){
        fetch(`/news/${params.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    navigate("/admin/news")
                })
            }else{
                console.log("error")
            }
        })
    }

    return(
        <>
        {
            !currentAdmin ? 

            <Login /> 

        :
        <>
        <CloseButton />
        <div className="admin-container">
            <div className="admin-news-">
                <div className="admin-news-card">
                    <form className="form text-center" onSubmit={handleSubmit}>
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
                        <button 
                        type="submit" 
                        className="btn-purple mt-7">
                            Update News
                        </button>
                        <button  
                        className="btn-split mt-7"
                        onClick={handleDelete}>
                            Delete News
                        </button>
                    </form>
                </div>
            </div>
        </div>
        </>
        }
        </>
    )
}
export default EditNews