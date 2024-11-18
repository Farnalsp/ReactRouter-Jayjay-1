import { useNavigate } from "react-router-dom";
const Second = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>Buat Todo List</h3>
      <button onClick={() => navigate("/Ubahtodo")}>Ubah To do List Anda !!!</button>
      <button onClick={() => navigate("/Detailtodo")} style={{ marginLeft: "10px" }}>Detail dari to do yang anda buat</button>
    </>
  );
};

export default Second;
