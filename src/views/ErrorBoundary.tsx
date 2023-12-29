import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ErrorBoundary() {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (countdown === 1) {
        clearInterval(intervalId);
        navigate("/");
      }
      setCountdown(countdown - 1);
    }, 1000)
    
    return () => clearInterval(intervalId);
  }, [countdown]);

  return (
    <>
      <h1 className="mt-4">Oops! Something went wrong 🚨</h1>
      <h3 className="mt-4">You will be redirected to the home page in {countdown} seconds...</h3>
    </>
  )
}
