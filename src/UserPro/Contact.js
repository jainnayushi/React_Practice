import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <>
      <h1> Contact Page</h1>
      <hr />
      <h2>useSearchParams Part</h2>
      {/* Give params on Contact1 Page  + Navigate to another Page */}
      <button onClick={() => navigate("/contact1?age=10&name=ashi")}>
        Go to Contact1 Page with Age and Name
      </button>
      <hr />
    </>
  );
}

export default Contact;
