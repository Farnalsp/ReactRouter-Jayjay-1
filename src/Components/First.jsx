import { useNavigate } from "react-router-dom";

const First = () => {
  const navigate = useNavigate()
  return (
    <>
      <h3>Homepage Route</h3>
      <button onClick={() => navigate("/Createtodo")}>Create Todo</button>
    </>
  );
};

export default First;
