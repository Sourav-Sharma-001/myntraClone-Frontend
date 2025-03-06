import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
   
    const checkAndClearStorage = () => {
        const currentTime = Date.now();
        const storedTime = localStorage.getItem("timestamp");
    
        if (storedTime) {
            const timeDifference = currentTime - parseInt(storedTime, 10); 
            const hoursPassed = timeDifference / (1000 * 60 * 60); 
    
            if (hoursPassed >= 24) {
                localStorage.clear();
                localStorage.setItem("timestamp", currentTime); 
            }
        } else {
            localStorage.setItem("timestamp", currentTime); 
        }
    };
    
    checkAndClearStorage();

    const isAuthenticated = localStorage.getItem("timestamp");    

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
