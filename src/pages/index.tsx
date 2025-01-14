import React from 'react';
// import Events from './events'

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="bg-blue-700 text-white py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold">Hackathon Manager</h1>
            <nav className="space-x-4">
              <a href="#features" className="hover:text-gray-200">Features</a>
              <a href="#about" className="hover:text-gray-200">About</a>
              <a href="#contact" className="hover:text-gray-200">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: "url('/Images/hackbg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="text-center py-20 bg-white bg-opacity-50"
      >
        <h2 className="text-4xl font-bold text-blue-300 mb-8">
          Welcome to Hackathon Manager
        </h2>
        <p className="text-gray-100 mb-8">
          Discover, create, and participate in exciting hackathons.
        </p>
        <a href="/Auth/register"
          className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
          Get Started
        </a>

      </section>
      {/* <a href="/login"
     className="bg-blue-600 text-white px-6 py-3 rounded shadow hover:bg-blue-700 transition">
      Get Started
    </a> */}

    
      <section id="features" className="py-16">
        <div className="container mx-auto px-4 ">
          <h3 className="text-3xl font-bold text-center text-blue-700 mb-12 ">
            Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Create Hackathons
              </h4>
              <p className="text-gray-600 mb-4">
                Organize your own hackathons with ease using our platform. Plan, promote, and manage events effortlessly with intuitive tools.
              </p>
              <ul className="text-gray-600 list-disc list-inside mb-4">
                <li>Set up event details like themes, rules, and schedules.</li>
                <li>Invite participants and send notifications.</li>
                <li>Track submissions and judge results seamlessly.</li>
              </ul>
              
              <a href="/create_hackathon"
                className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
              >
                Start Now

              </a>
            </div>

          
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105 ">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                {/* <Events /> */}
              
              </h4>
              
            </div>
      
            <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:scale-105">
              <h4 className="text-xl font-semibold text-blue-600 mb-2">
                Manage Dashboard
              </h4>
              <p className="text-gray-600">
                Keep track of your hackathons and profile in one place.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section id="about" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">About Us</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hackathon Manager is designed to bring together developers,
            innovators, and creators to collaborate on exciting projects.
            Whether you're hosting a hackathon or joining one, we've got
            you covered.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="container mx-auto text-center">
          <p>© {new Date().getFullYear()} Hackathon Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
