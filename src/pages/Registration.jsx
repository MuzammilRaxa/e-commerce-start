import React, { useState } from "react";

import Add from "../helpers/img/add_image.png";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db, storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

function Register() {
  const inputStyle =
    " p-4 text-base border-b outline-none border-[#5d5b8d] placeholder-gray-300 ";
  const [err] = useState(false);
  //   const navigate = useNavigate();
  const handleSubmit = async (e) => {};
  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     const displayName = e.target[0].value;
  //     const email = e.target[1].value;
  //     const password = e.target[2].value;
  //     const file = e.target[3].files[0];
  //     try {
  //       const res = await createUserWithEmailAndPassword(auth, email, password);
  //       const storageRef = ref(storage, displayName);
  //       const uploadTask = uploadBytesResumable(storageRef, file);
  //       uploadTask.on(
  //         (error) => {
  //           setErr(true);
  //         },
  //         () => {
  //           getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
  //             await updateProfile(res.user, {
  //               displayName,
  //               photoURL: downloadURL,
  //             });
  //             await setDoc(doc(db, "users", res.user.uid), {
  //               uid: res.user.uid,
  //               displayName,
  //               email,
  //               photoURL: downloadURL,
  //             });
  //             await setDoc(doc(db, "user", res.user.uid), {});
  //             navigate("/");
  //           });
  //         }
  //       );
  //     } catch (err) {
  //       setErr(true);
  //     }
  //   };
  return (
    <div className="h-[100vh] flex items-center justify-center bg-[#a7bcff]  ">
      <div className="h-[420px]  w-[350px] bg-white px-16 py-4 rounded-xl flex flex-col text-center justify-between gap-2 ">
        <span className="bg-[#a7bcff] font-bold text-2xl rounded-xl">
          Chief
        </span>
        <span className="text-[#5d5b8d] text-xs ">Register</span>
        <div className="flex flex-col"></div>
        <form className="flex-col gap-6" onSubmit={handleSubmit}>
          <input
            className={inputStyle}
            type="text"
            placeholder="display name"
          />
          <input className={inputStyle} type="email" placeholder="email" />
          <input
            className={inputStyle}
            type="password"
            placeholder="password"
          />
          <input className="hidden" type="file" id="file" />
          <label
            className=" text-xs mt-6 cursor-pointer flex items-center text-[#5d5b8d]"
            htmlFor="file"
          >
            <img className="h-7" src={Add} alt="" />
            <span>Add an avtar</span>
          </label>
          <button className="bg-[#7b96ec] text-white mt-5 p-[10px] font-bold border-none outline-none">
            Sign up
          </button>
          {err && <span className="bg-cartNumBg">Somthing went wrong</span>}
        </form>
        <p className="text-xs mt-3 text-[#5d5b8d]">
          You do have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Register;
