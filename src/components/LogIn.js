const LogIn = () => {
  //google log in system
  const handleGoogleLogIn = () => {};
  return (
    <div className="login container mx-auto py-10">
      <h2 className="section-title text-center text-4xl font-medium text-gray-200 mb-10">
        Log in
      </h2>

      <div className="login-platforms flex flex-col gap-5 items-center ">
        <button
          onClick={handleGoogleLogIn}
          className="google-sign-in bg-slate-100 text-md text-slate-800 h-12 w-80 rounded-lg hover:bg-rose-500 hover:text-slate-100 duration-300"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
