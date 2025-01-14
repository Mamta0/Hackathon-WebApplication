import { useState, useEffect } from 'react';

const discover: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // This will simulate a login success message being set, you can change this logic to check for actual login status
    // You can use cookies, localStorage, or query params to detect successful login
    const loginStatus = localStorage.getItem('loginStatus'); // example condition

    if (loginStatus === 'success') {
      setMessage('Login Successful!');
      // Optionally, you can reset the status here after showing the message
      localStorage.removeItem('loginStatus'); // Clear after showing
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Conditional Message Rendering */}
      {message && (
        <div className="bg-green-500 text-white text-center py-2">
          <p className="font-bold">{message}</p>
        </div>
      )}

      {/* Main Content of the Page */}
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome to the Discover Page!
        </h1>
        <p className="text-gray-700 mt-4">
          This is where users can explore hackathons and other exciting events.
        </p>
      </div>
    </div>
  );
};

export default discover;
