"use client";

import { useRef } from "react";

export default function UncontrolledForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.info("uncontrol", data)
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <h2 className="text-xl font-bol text-white">
        Uncontrolled Register Form
      </h2>
      <label>First Name</label>
      <input
        ref={firstNameRef}
        className="w-full p-2 border rounded-2xl bg "
        placeholder="Masukan Nama Depan"
      />
      <label>Last Name</label>
      <input
        ref={lastNameRef}
        className="w-full p-2 border rounded-2xl"
        placeholder="Masukan Nama Belakang (Optional)"
      />
      <label>Email</label>
      <input
        ref={emailRef}
        type="email"
        className="w-full p-2 border rounded-2xl"
        placeholder="Masukan Email"
      />
      <label>Password</label>
      <input
        ref={passwordRef}
        type="password"
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
