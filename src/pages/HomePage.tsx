import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <div className="">Welcome to Home Page!</div>

      <Link to={"/register"}>Register</Link>
    </div>
  );
};

export default HomePage;
