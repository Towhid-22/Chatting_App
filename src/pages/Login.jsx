import { useState } from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { ToastContainer, toast, Bounce } from "react-toastify";
import { Typography, Input, Button } from "@material-tailwind/react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { Link } from "react-router";
import { MdOutlineError } from "react-icons/md";
import { useNavigate } from "react-router";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);

  let [mails, setMails] = useState("");
  let [mailError, setmailError] = useState("");
  let [pass, setPass] = useState("");
  let [passError, setpassError] = useState("");
  const db = getDatabase();

  let accountMail = (e) => {
    setMails(e.target.value);
    setmailError("");
  };
  let accountPassword = (e) => {
    setPass(e.target.value);
    setpassError("");
  };
  let signUpBtn = () => {
    if (mails && pass) {
      signInWithEmailAndPassword(auth, mails, pass)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
          toast.success("Login Successfull", {
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
          setTimeout(() => {
            navigate("/home");
          }, 2000);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Invalid Credential", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          } else {
            toast.error(errorCode, {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: false,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              transition: Bounce,
            });
          }
        });
    }

    if (!mails) {
      setmailError("Email is required");
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mails)) {
      setmailError("Invalid mail");
    } else {
      set(push(ref(db, "chattingApp/")), {
        name: mails,
      }).then(() => {
        setMails("");
      });
    }

    if (!pass) {
      setpassError("Password is required");
    } else if (
      !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(pass)
    ) {
      setpassError("Please contain special character");
    } else {
      set(push(ref(db, "chattingApp/")), {
        name: pass,
      }).then(() => {
        setPass("");
      });
    }
  };

  let googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        
        toast.success("Login Successfull", {
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
        const user = result.user;
        console.log(user);


        setTimeout(() => {
          navigate("/home");
        }, 2000);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        toast.error(errorCode, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
  };

  return (
    <section className="grid text-center h-screen items-center bg-computer">
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
      <div className="grid relative bg-black h-screen w-full items-center  opacity-[.60]"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className=" w-[500px] mx-auto p-5 bg-gray-50 rounded-lg">
          <Typography
            variant="h3"
            color="blue-gray"
            className="mb-2 text-black font-fjalla"
          >
            Login
          </Typography>
          <Typography className="mb-16 text-black font-normal text-[18px]">
            Login Your Account
          </Typography>
          <form action="#" className="mx-auto max-w-[24rem] text-left">
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
            {/* {passError && (
                          // !this is need to customize
                          <div
                            role="alert"
                            className="mb-4 relative flex w-full p-3 text-sm text-white bg-red-600 rounded-md mt-[-24px]"
                          >
                            {passError}
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
              Login
            </Button>
            {/* <div className="!mt-4 flex justify-end">
             <Typography
               as="a"
               href="#"
               color="blue-gray"
               variant="small"
               className="font-medium"
             >
               Forgot password
             </Typography>
           </div> */}
            <p className="mt-6">Login With</p>
            <div className="flex justify-between items-center">
              <Button
                onClick={googleLogin}
                variant="outlined"
                className="mt-6 h-12"
              >
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
              Don't have an account?{" "}
              <Link to="/registration" className="font-medium text-black">
                SignUp
              </Link>
            </Typography>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
