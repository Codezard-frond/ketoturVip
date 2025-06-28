import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import Avatar from "../components/Avatar";
import FormInput from "../components/FormInput";
import FormTextArea from "../components/FormTextArea";
import { useFireStore } from "../hooks/useFireStore";

function Admin() {
  const navigate = useNavigate();
  const salomatFire = useFireStore("salomat");
  const uzbekFire = useFireStore("uzbekTravel");
  const { user } = useGlobalContext();

  const [isAuthorized, setIsAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    const correctPassword = "ketoturADMIN";
    if (password === correctPassword) {
      setIsAuthorized(true);
    } else {
      setError("Noto'g'ri parol!");
    }
  };

  const handleForeignSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const images = formData.get("images");
    const price = formData.get("price");
    const description = formData.get("description");

    await salomatFire.addDcument({ title, images, price, description });
    navigate("/");
  };

  const handleUzbekSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const title = formData.get("title");
    const images = formData.get("images");
    const price = formData.get("price");
    const description = formData.get("description");

    await uzbekFire.addDcument({ title, images, price, description });
    navigate("/");
  };

  return (
    <div className="p-10 w-full min-h-screen bg-[#002f2f9b] text-white">
      <div className="mb-[100px]">
        <Avatar user={user} />
      </div>

      {!isAuthorized ? (
        <form
          onSubmit={handlePasswordSubmit}
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <h2 className="text-2xl text-center font-bold">
            Admin Panelga Kirish
          </h2>
          <input
            type="password"
            placeholder="Parolni kiriting"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded  text-[white]"
          />
          {error && <p className="text-red-500">{error}</p>}
          <button type="submit" className="btn btn-primary w-full">
            Kirish
          </button>
        </form>
      ) : (
        <div className="main-container grid md:grid-cols-2 gap-10">
         
          <form
            onSubmit={handleForeignSubmit}
            className="bg-white/10 p-6 rounded"
          >
            <h2 className="text-2xl font-bold mb-4">
              Chet el sayohat qo‘shish
            </h2>
            <FormInput name="title" label="Title:" type="text" />
            <FormInput name="images" label="Images:" type="text" />
            <FormInput name="price" label="Price:" type="number" />
            <FormTextArea name="description" label="Description:" />
            <button type="submit" className="btn btn-primary w-full mt-4">
              Add Foreign Travel
            </button>
          </form>

          <form
            onSubmit={handleUzbekSubmit}
            className="bg-white/10 p-6 rounded"
          >
            <h2 className="text-2xl font-bold mb-4">
              O‘zbekiston sayohat qo‘shish
            </h2>
            <FormInput name="title" label="Title:" type="text" />
            <FormInput name="images" label="Images:" type="text" />
            <FormInput name="price" label="Price:" type="number" />
            <FormTextArea name="description" label="Description:" />
            <button type="submit" className="btn btn-primary w-full mt-4">
              Add Uzbekistan Travel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Admin;
