"use client";
import { useState } from "react";

export default function ControlledForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((datawal) => ({ ...datawal, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.info("Controled Form Submited", formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bol text-white">Controlled Register Form</h2>
      <label>First Name</label>
      <input
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        className="w-full p-2 border rounded-2xl bg "
        placeholder="Masukan Nama Depan"
      />
      <label>Last Name</label>
      <input
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        className="w-full p-2 border rounded-2xl"
        placeholder="Masukan Nama Belakang (Optional)"
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-2 border rounded-2xl"
        placeholder="Masukan Email"
      />
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="w-full p-2 border rounded-2xl"
        placeholder="Masukan pasword"
      />
      <button
        type="submit"
        className="bg-amber-300 px-4 py-2 rounded text-black hover:bg-red-500"
      >
        Submit
      </button>
    </form>
  );
}
