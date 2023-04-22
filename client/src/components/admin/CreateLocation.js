import { useState, useContext } from "react";
import { AdminContext } from "App";
import Login from "./Login";
function CreateLocation(){
    const { currentAdmin } = useContext(AdminContext)

    const [form, setForm] = useState({
        address_name: "",
        building_number: "",
        street: "",
        city: "",
        postcode: "",
        show: false
    })

    function handleChange(e){
        const {name, value} = e.target
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleChangeShow(e){
        setForm({...form, 
            show: !form.show
        })
    }

    console.log(form)

    function handleSubmit(e){
        e.preventDefault()
        addUserId()
        const {markers, ...formData} = form
        fetch("/locations", {
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
                            type="text" 
                            name="address_name" 
                            value={form.title} 
                            className="mt-7 p-3"
                            placeholder="Address Name (Optional)"
                            onChange={handleChange}
                            />
                            <input 
                            ype="text" 
                            name="buidling_number" 
                            value={form.title} 
                            className="mt-7 p-3"
                            placeholder="Building Number"
                            onChange={handleChange}
                            />
                            <input 
                            ype="text" 
                            name="street" 
                            value={form.title} 
                            className="mt-7 p-3"
                            placeholder="Street"
                            onChange={handleChange}
                            />
                            <input 
                            ype="text" 
                            name="city" 
                            value={form.title} 
                            className="mt-7 p-3"
                            placeholder="City"
                            onChange={handleChange}
                            />
                            <input type="text"
                            name="postcode"
                            value={form.date}
                            className="mt-7"
                            onChange={handleChange}
                            placeholder="Postcode"
                            />
                            <input type="checkbox"
                            value={form.show}
                            onChange={handleChangeShow}
                            className="mt-7"
                            name="show_on_map"
                            />
                            <label
                            for="show_on_map"
                            className="text-center mt-7">
                                Show on Map?
                            </label>
                        </div>
                        <button type="submit" className="btn-purple mt-7">
                            Save Address
                        </button>
                    </form>
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default CreateLocation
