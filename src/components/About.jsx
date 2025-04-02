import React from 'react';

const About = () =>
{
    return (
        <div className="p-6 bg-gray-100 text-gray-800">
            <h1 className="text-2xl font-bold mb-4">About This Project</h1>
            <p className="mb-4">
                This project is built using <strong>React.js</strong> and styled with the powerful utility-first CSS framework, <strong>Tailwind CSS</strong>. The combination of these technologies has allowed for rapid development of a modern and responsive user interface.
            </p>
            <h2 className="text-xl font-semibold mb-2">Features of the Project:</h2>
            <ul className="list-disc list-inside">
                <li>Highly responsive design tailored for various screen sizes.</li>
                <li>Reusable React components for efficient code management.</li>
                <li>Customizable and scalable styling using Tailwind's utility classes.</li>
                <li>Seamless integration of logic and UI components.</li>
            </ul>
            <p className="mt-4">
                By leveraging React's component-based architecture and Tailwind's flexibility, this project demonstrates how modern web development can be streamlined while maintaining high performance and scalability.
            </p>
        </div>
    );
};

export default About;
