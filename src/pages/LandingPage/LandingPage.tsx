import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-start text-neutral-800">
      <div className="text-center w-full h-[14rem] flex flex-col items-center justify-center text-white bg-neutral-900  mb-8">
        <h1 className="text-5xl font-bold mb-2 ">Deck</h1>
        <p className="text-lg text-neutral-100">Welcome to Deck</p>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-neutral-900">Join today</h2>

      <button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full  mb-2 transition-colors duration-200 ease-in-out">
        <FaGoogle className="mr-2" /> Sign up with Google
      </button>

      <span className="my-2 text-neutral-600">or</span>

      <Link to='/signup' className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out">
        Create an account
      </Link>

      <p className="text-sm text-neutral-600 mt-6 px-4 text-center">
        By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
      </p>

      <div className="mt-4">
        Already have an Account? <Link to="/signin" className="text-blue-500 hover:text-blue-600">Sign in</Link>
      </div>
    </div>
  );
};

export default LandingPage;
