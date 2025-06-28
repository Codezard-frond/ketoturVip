import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Avatar from "../components/Avatar";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import { useFireStore } from "../hooks/useFireStore";

function Admin() {
  const navigate = useNavigate();
  const { addDcument } = useFireStore("salomat");
  const { user } = useGlobalContext();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const images = formData.get("images");
    const price = formData.get("price");
    const description = formData.get("description");

    await addDcument({ title, images, price, description });
    navigate("/");
  };

  return (
    <div>
      <Avatar user={user} />
      <div className="main-container">
        <div className="avatar w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-3xl font-bold">Create new travel</h2>
            <FormInput name="title" label="Title:" type="text" />
            <FormInput name="images" label="Images:" type="text" />
            <FormInput name="price" label="Price:" type="number" />
            <FormTextArea label="Description:" name="description" />
            <button type="submit" className="btn btn-primary w-full">
              Add Travel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Admin;
