import { useNavigate } from "react-router-dom";

const NotFound = () => {
   const navigate = useNavigate();
    const handleNavigation = () => {
        console.log('Navigating to home');
        navigate('/');
    }
  return (
    <section className="not-found flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="pb-4 font-bold text-xl">404 - Page Not Found</h1>
      <p className="text-lg text-gray-300">Sorry, the page you are looking for does not exist.</p>

      <div className="mt-6">
        <button onClick={handleNavigation} className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
         Return to Home
        </button>
      </div>
    </section>
  );
}

export default NotFound;