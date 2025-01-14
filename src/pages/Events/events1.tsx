import React, { useState } from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const events = [
    { id: 1, name: 'AI Innovators Hackathon', link: '/events/ai-innovators' },
    { id: 2, name: 'Web Wizards Coding Sprint', link: '/events/web-wizards' },
    { id: 3, name: 'Tech Titans Challenge', link: '/events/tech-titans' },
  ];

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Events
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 bg-white shadow-md rounded w-48">
          <ul className="py-2">
            {events.map((event) => (
              <li key={event.id} className="hover:bg-gray-200">
                <a
                  href={event.link}
                  className="block px-4 py-2 text-gray-800 hover:text-blue-600"
                >
                  {event.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
