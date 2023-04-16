import { useState } from "react";
function CreateNews(){
    const [form, setForm] = useState({
        title: "",
        description: "",
        date: ""
    })

    function handleChange(e){
        const {name, value} = e.target
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return(
        <>
        <div className="admin-container">
            <div className="admin-news-container">
                <div className="admin-news-card">
                    <form>
                        <input 
                        ype="text" 
                        name="title" 
                        value={form.title} 
                        />
                        <input 
                        type="text" 
                        name="description" 
                        value={form.description} 
                        />
                        <input type="date"
                        name="date"
                        value={form.date}
                        />
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default CreateNews