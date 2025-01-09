import { useState } from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { ToastContainer, toast, Bounce } from "react-toastify";

import { Typography, Input, Button } from "@material-tailwind/react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { Link, useNavigate } from "react-router";
import { MdOutlineError } from "react-icons/md";

export function Registration() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  let [names, setNames] = useState("");
  let [nameError, setnameError] = useState("");
  let [mails, setMails] = useState("");
  let [mailError, setmailError] = useState("");
  let [pass, setPass] = useState("");
  let [passError, setpassError] = useState("");
  const db = getDatabase();
  let accountName = (e) => {
    setNames(e.target.value);
    setnameError("");
  };
  let accountMail = (e) => {
    setMails(e.target.value);
    setmailError("");
  };
  let accountPassword = (e) => {
    setPass(e.target.value);
    setpassError("");
  };
  let signUpBtn = () => {
    if (!names) {
      setnameError("Name is required");
    }

    if (!mails) {
      setmailError("Email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mails)) {
      setmailError("Invalid mail");
    }

    if (!pass) {
      setpassError("Password is required");
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(pass)
    ) {
      setpassError("Please contain special character and number");
    }

    if (names && mails && pass) {
      createUserWithEmailAndPassword(auth, mails, pass)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            updateProfile(auth.currentUser, {
              displayName: names,
              photoURL: "https://picsum.photos/200/300",
            })
              .then(() => {
                toast.success("Account Created Successful", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: false,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                  transition: Bounce,
                });
                // Signed up
                const user = userCredential.user;
                console.log(user);
                set(ref(db, "users/" + user.uid), {
                  name: names,
                  email: mails,
                  image: "https://picsum.photos/200/300",
                })
                  .then(() => {
                    setNames("");
                    setMails("");
                    setPass("");

                    setTimeout(() => {
                      navigate("/login");
                    }, 2000);
                  })
                  .catch((error) => {
                    toast.error(error, {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: false,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                  });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setmailError(errorMessage);
          // ..
        });
    }
  };

  return (
    <section className="grid text-center h-screen items-center bg-computer">
      <div className="grid relative bg-black h-screen w-full items-center  opacity-[.60]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" w-[500px] mx-auto p-5 bg-gray-50 rounded-lg">
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-2 text-black font-fjalla"
          >
            Sign Up
          </Typography>
          <Typography className="mb-16 text-black font-normal text-[18px]">
            Create Your Account
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left">
            <div className="mb-6">
              <label htmlFor="name">
                <Typography
                  variant="small"
                  className={`mb-2 font-semibold text-black flex items-center ${
                    nameError ? "text-red-500" : "text-black"
                  }`}
                >
                  Your Name {nameError && <MdOutlineError className="ml-1" />}
                </Typography>
              </label>
              <Input
                onChange={accountName}
                id="name"
                color="black"
                size="lg"
                type="text"
                name="name"
                placeholder="Your Name"
                className="text-gray-900 w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                value={names}
              />
            </div>
            {/* {nameError && (
              // !this is need to customize
              <div
                role="alert"
                className="mb-4 relative flex w-full p-3 text-sm text-white bg-red-600 rounded-md mt-[-24px]"
              >
                {nameError}
                <button
                  className="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            )} */}
            {/* {nameError && (
              <p className="mt-[-20px] text-red-500">{nameError}</p>
            )} */}

            <div className="mb-6">
              <label htmlFor="email">
                <Typography
                  variant="small"
                  className={`mb-2 font-semibold text-black flex items-center ${
                    mailError ? "text-red-500" : "text-black"
                  }`}
                >
                  Your Email {mailError && <MdOutlineError className="ml-1" />}
                </Typography>
              </label>
              <Input
                onChange={accountMail}
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="name@mail.com"
                className="text-gray-900 w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                value={mails}
              />
            </div>
            {/* {mailError && (
              <p className="mt-[-20px] text-red-500">{mailError}</p>
            )} */}
            {mailError && (
              <p className="mt-[-20px] text-red-500">{mailError}</p>
            )}
            <div className="mb-6">
              <label htmlFor="password">
                <Typography
                  variant="small"
                  className={`mb-2 font-semibold flex items-center ${
                    passError ? "text-red-500" : "text-black"
                  } `}
                >
                  Password {passError && <MdOutlineError className="ml-1" />}
                </Typography>
              </label>
              <Input
                onChange={accountPassword}
                size="lg"
                placeholder="********"
                labelProps={{
                  className: "hidden",
                }}
                className="text-gray-900 w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
                type={passwordShown ? "text" : "password"}
                icon={
                  <i onClick={togglePasswordVisiblity}>
                    {passwordShown ? (
                      <GoEye className="h-5 w-5 text-gray-900" />
                    ) : (
                      <GoEyeClosed className="h-5 w-5 text-gray-900" />
                    )}
                  </i>
                }
                value={pass}
              />
            </div>
            {passError && (
              <p className="mt-[-20px] text-red-500">{passError}</p>
            )}
            <Button
              onClick={signUpBtn}
              color="blue"
              size="lg"
              className="mt-6 text-white"
              fullWidth
            >
              sign up
            </Button>
            <p className="mt-6">SignUp With</p>
            <div className="flex justify-between items-center">
              <Button variant="outlined" className="mt-6 h-12">
                <img
                  src={`https://www.material-tailwind.com/logos/logo-google.png`}
                  alt="google"
                  className="h-6 w-6"
                />{" "}
              </Button>
              <Button variant="outlined" className="mt-6 h-12 ">
                <BsLinkedin alt="linkedIn" className="h-6 w-6 text-[#0C64C5]" />{" "}
              </Button>
              <Button variant="outlined" className="mt-6 h-12">
                <FaFacebook alt="facebook" className="h-6 w-6 text-[#0E4DB4]" />{" "}
              </Button>
              <Button variant="outlined" className="mt-6 h-12">
                <IoLogoTwitter
                  alt="Twitter"
                  className="h-6 w-6 text-[#0E4DB4]"
                />{" "}
              </Button>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="!mt-4 text-center font-normal text-gray-700"
            >
              Already Have an Account?{" "}
              <Link to="/login" className="font-medium text-black">
                Login
              </Link>
            </Typography>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
    </section>
  );
}

export default Registration;
