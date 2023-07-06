import "./SignUp.css";

function SignedIn(props) {
  return (
    <div className="container">
      <div className="form-structor">
        <form className={`signup`}>
          <div className="form-title">
            Welcome
            <br />
            {localStorage.getItem("userName").charAt(0).toUpperCase() +
              localStorage.getItem("userName").slice(1)}
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignedIn;
