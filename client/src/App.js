import React from "react";
import {useState, useEffect} from 'react'
import { createContext } from "react";
import GlobalStyles from 'styles/GlobalStyles';


//My imports
import LandingPage from "LandingPage";
import Contact from "components/forms/SimpleContactUs";
import AdminPage from "components/admin/AdminPage";
import Login from "components/admin/Login";
import NewsAdmin from "components/admin/NewsAdmin";
import CreateNews from "components/admin/CreateNews";
import MapsAdmin from "components/admin/MapsAdmin";
import CreateLocation from "components/admin/CreateLocation";
import EditLocation from "components/admin/EditLocation";
import EditNews from "components/admin/EditNews";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const AdminContext = createContext()

export default function App() {

const [currentAdmin, setCurrentAdmin] = useState()

useEffect(() => {
  const admin_id = JSON.parse(localStorage.getItem("admin_id"))
  if (admin_id) {
    fetch('/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({admin_id: admin_id})
      })
    .then(res => {
      if (res.ok) {
        res.json().then(user => {
          setCurrentAdmin(user)});
      }else{
        console.log("not logged in")
      }
    });
  }
}, []);

//HANDLE LOGOUT
//=============
function logoutCurrentUser(){
  localStorage.removeItem("admin_id")
  setCurrentAdmin(null)
}

function handleLogin(admin){
  // console.log(admin[0].session_id, "admin.session_id")
  setCurrentAdmin(admin)
  localStorage.setItem("admin_id", JSON.stringify(admin.id))
}

  return (
    <>
      <Router>
      <AdminContext.Provider value={{handleLogin, logoutCurrentUser, currentAdmin}}>
      <GlobalStyles/>
        <Routes>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/admin/news" element={<NewsAdmin />} />
          <Route exact path="/admin/maps" element={<MapsAdmin />} />
          <Route exact path="/admin/create_location" element={<CreateLocation />} />
          <Route exact path="/admin/edit_location/:id" element={<EditLocation />} />
          <Route exact path="/admin/edit_news/:id" element={<EditNews />} />
          <Route exact path="/admin/create_news" element={<CreateNews />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/contact-us" element={<Contact />}/>
        </Routes>
        </AdminContext.Provider>
      </Router>
    </>
  );
}
