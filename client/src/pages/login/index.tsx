import Logo from "../../assets/svg/Logo.svg";
import "./style.css"
const SignIn = () => {
  return (
    <div className=" flex flex-row w-full h-full ">
      <section className="left-section w-1/2 h-full px-8 py-8 pb-4 ">
          <div className="flex flex-col justify-between h-full ">
          <div className="logo-container">
            <img src={Logo} alt="logo" />
          </div>

          <div className=" w-full flex flex-col items-center ">
            <div>
            <h1 className=" text-4xl  ">Let's get <span className=" font-bold text-gradient2">creative!</span></h1>
            <p className=" text-noble-black-300">Log in to Artificium to start creating magic.</p>
            </div>
          </div>

          <div className="flex flex-row gap-1 text-sm">
            <p className=" text-noble-black-400 ">don't have an account ?</p>
            <button className=" font-bold text-gradient6">
                sign in
            </button>
          </div>
          </div>
      </section>
      <section className="right-section w-1/2">
      </section>
    </div>
  );
};

export default SignIn;
