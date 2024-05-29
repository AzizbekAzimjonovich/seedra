import { useNavigation } from "react-router-dom";
function SubmitBtn({ text }) {
  const navigate = useNavigation();
  const isSubmitting = navigate.state === "submitting";
  return (
    <button className="btn btn-promary" type="submit" disabled={isSubmitting}>
      {isSubmitting ? (
        <>
          <span className="loading loading-sniper"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
}

export default SubmitBtn;
