import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebase";
import Logo from '../../img/bg-green-logo.png'
import { useNavigate } from "react-router-dom";
export default function Login() {
  

  const navigate = useNavigate();

// doctor
// name
// uid
// phone
// category: 

  const SignInwithFirebase = (e, type) => {
    e.preventDefault();
    if(type==='doctor'){
      signInWithPopup(auth, provider)
        .then((result) => {
          if (result) {
            console.log(result);
            // call local api for doctor
            navigate("/home");
            console.log(type);
          }
        })
        .catch((error) => {
          alert(error.message);
        });
        return;
    }
    signInWithPopup(auth, provider)
        .then((result) => {
          if (result) {
            console.log(result);
            // call local api for Patient
            console.log(type);
            navigate("/home");
          }
        })
        .catch((error) => {
          alert(error.message);
        });

  };
  return (
    <div className="flex justify-center py-20 md:py-40 w-[70vw] md:w-[50vw] mx-auto my-20 md:my-40 items-center border bg-slate-100 shadow-2xl border-gray-200 ">
          <div className="flex justify-center items-center flex-col space-y-10">
            <img src={Logo} color='blue' width={100} height={100} alt="logo" />
            <div className="flex flex-col space-y-5">
              <button 
              className="bg-gray-600 py-3 text-white px-3 md:px-10 rounded-3xl cursor-pointer hover:bg-blue-500"
              onClick={(e)=> SignInwithFirebase(e, 'patient')}
              >
                {/* button */}
                Login as Patient
                <i className="fa-sharp fa-solid fa-hospital-user ml-3"></i>
              </button>
              <button 
              className="bg-[#29c39d] py-3 text-white px-3 md:px-10 rounded-3xl cursor-pointer hover:bg-blue-500"
              onClick={(e)=>SignInwithFirebase(e, 'doctor')}
              >
                {/* button */}
                Login as Doctor
                <i className="fa-solid fa-user-doctor ml-3"></i>
              </button>
            </div>
          </div>
    </div>
  );
}