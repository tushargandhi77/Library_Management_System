import React from "react";

const About = () => {
  return (
    <div className="container">
      <h1 className="mt-5 display-4 text-primary">
        About Library Management System
      </h1>
      <p className="lead">
        Welcome to our Library Management System. Our system is designed to
        efficiently manage the resources of a library, making it easier for
        librarians to organize, track, and lend books to patrons.
      </p>
      <div className="row">
        <div className="col-md-6">
          <h2 className="mt-4">Our Mission</h2>
          <p>
            At Library Management System, our mission is to provide librarians
            with robust tools to:
          </p>
          <ul className="list-unstyled">
            <li>Efficiently catalog books and other resources</li>
            <li>Streamline the borrowing and returning process</li>
            <li>Generate insightful reports on library usage</li>
            <li>Enhance the overall experience for library patrons</li>
            {/* Additional Feature: Reservation System */}
            <li>Facilitate book reservations and holds</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2 className="mt-4">Contact Us</h2>
          <p>
            If you have any questions, feedback, or suggestions, please don't
            hesitate to contact us:
          </p>
          <ul className="list-unstyled">
            <li>
              Email:{" "}
              <a href="mailto:info@librarymanagementsystem.com">
                info@librarymanagementsystem.com
              </a>
            </li>
            <li>
              Phone: <a href="tel:123-456-7890">123-456-7890</a>
            </li>
            {/* Additional Feature: Live Chat Support */}
            <li>Live Chat Support available during business hours</li>
            {/* Additional Feature: Social Media Integration */}
            <li>Follow us on social media for updates and announcements</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;