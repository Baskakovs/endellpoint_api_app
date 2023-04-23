import { useState, useContext, useEffect } from "react";
import { AdminContext } from "App";
import { useNavigate, useParams } from "react-router-dom";
import Login from "./Login";
import CloseButton from "./CloseButton";
function EditLocation(){
    const { currentAdmin } = useContext(AdminContext)
    const params = useParams()
    const navigate = useNavigate()

    const [form, setForm] = useState("")

    useEffect(() => {
        fetch(`/locations/${params.id}`,
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

    function handleChangeShow(e){
        setForm({...form, 
            show: !form.show
        })
    }

    function handleDelete(){
        fetch(`/locations/${params.id}`, {
            method: "DELETE",
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    navigate("/admin/maps")
                })
            }else{
                // console.log("error")
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault()
        addUserId()
        const {markers, ...formData} = form
        fetch("/locations", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(data => {
                    navigate("/admin/maps")
                })
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
        <>
        <CloseButton />
        <div className="admin-container">
            <div className="admin-news-">
                <div className="admin-news-card">
                    <form className="form text-center" onSubmit={handleSubmit}>
                        <div className="container">
                            <input 
                            type="text" 
                            name="address_name" 
                            value={form.address_name} 
                            className="mt-7 p-3"
                            placeholder="Address Name (Optional)"
                            onChange={handleChange}
                            />
                            <input 
                            ype="text" 
                            name="building_number" 
                            value={form.building_number} 
                            className="mt-7 p-3"
                            placeholder="Building Number"
                            onChange={handleChange}
                            />
                            <input 
                            ype="text" 
                            name="street" 
                            value={form.street} 
                            className="mt-7 p-3"
                            placeholder="Street"
                            onChange={handleChange}
                            />
                            <input 
                            ype="text" 
                            name="city" 
                            value={form.city} 
                            className="mt-7 p-3"
                            placeholder="City"
                            onChange={handleChange}
                            />
                            <input type="text"
                            name="postcode"
                            value={form.postcode}
                            className="mt-7"
                            onChange={handleChange}
                            placeholder="Postcode"
                            />
                            <input type="checkbox"
                            value={form.show}
                            onChange={handleChangeShow}
                            className="mt-7"
                            name="show_on_map"
                            checked={
                                form.show ?
                                true
                                :
                                null
                            }
                            />
                            <label
                            for="show_on_map"
                            className="text-center mt-7">
                                Show on Map?
                            </label>
                        </div>
                        <button 
                        type="submit" 
                        className="btn-purple mt-7">
                            Update Address
                        </button>
                        <button 
                        className="btn-split mt-7 text-center"
                        onClick={handleDelete}
                        >
                            Delete Address
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
export default EditLocation