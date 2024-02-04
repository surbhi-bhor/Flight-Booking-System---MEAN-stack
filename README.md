<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

  <h1>Flight Booking System</h1>
  <h2>Project Overview</h2>

  <p>Flight Booking System, a comprehensive application developed using the MEAN stack. This system efficiently manages flight bookings, providing users with a seamless experience from searching for flights to generating boarding passes.</p>
  <b>Video Demonstration</b>
<p>Watch the detailed demonstration of the <a href="https://www.youtube.com/watch?v=MoKoUT2kz_4">Flight Booking System</a> in action:</p>


[![Flight Booking System MEAN Stack Demo](https://img.youtube.com/vi/MoKoUT2kz_4/maxresdefault.jpg
)](https://www.youtube.com/watch?v=MoKoUT2kz_4)


  <h2>Technologies Used</h2>

  <ul>
    <li><strong>MEAN Stack:</strong>
      <ul>
        <li><strong>MongoDB:</strong> Serves as the NoSQL database using Mongoose for seamless integration.</li>
        <li><strong>Express.js:</strong> Powers the backend services, handling microservices such as admin, book flight, search flight, and user-related operations.</li>
        <li><strong>AngularJS:</strong> Utilized for frontend services, featuring components and services.</li>
        <li><strong>Node.js:</strong> Used for creating backend services.</li>
      </ul>
    </li>
  </ul>

  <h3>Backend Microservices</h3>

  <p>The backend comprises microservices, each catering to specific functionalities:</p>
  <ul>
    <li><strong>Admin:</strong> Manages administrative tasks, performing CRUD operations on the flight database.</li>
    <li><strong>Book Flight:</strong> Enables users to book flights seamlessly, handling transactions and generating boarding passes.</li>
    <li><strong>Search Flight:</strong> Facilitates flight searches based on user-specified criteria.</li>
    <li><strong>Users:</strong> Manages user-related operations, ensuring secure storage of passwords through encryption using the bcrypt package.</li>
  </ul>

  <h3>Database and Testing</h3>

  <ul>
    <li><strong>MongoDB:</strong> The NoSQL database stores flight and user data, facilitating efficient retrieval for the smooth functioning of microservices.</li>
    <li><strong>Mocha and Chai:</strong> Employed for unit testing, ensuring the robustness of backend functionalities.</li>
  </ul>

  <h3>Frontend Architecture</h3>

  <p>The frontend, powered by Angular, consists of components and services, providing an intuitive interface for users to interact with the system seamlessly.</p>

  <h3>Basic Usability</h3>

  <p>The fundamental functionality of this system allows users to explore available flights based on specified criteria, proceed with secure booking transactions using Razorpay, and generate boarding passes. Meanwhile, the administrative dashboard serves as a central hub for administrators, providing the capability to execute CRUD operations on the flight database. Through the admin dashboard, administrators can efficiently manage and manipulate flight-related data, ensuring seamless control and organization of the system.</p>
  
  

  <h2>Conclusion</h2>

  <p>In conclusion, the Flight Booking System offers a robust and user-friendly solution for managing flight bookings. The utilization of MEAN stack technologies ensures a seamless integration of backend and frontend components. The microservices architecture allows for modular development, making the system scalable and maintainable.</p>

  <p>Testing with Mocha and Chai guarantees the reliability of the system's functionalities, and documentation through Swagger Hub enhances accessibility for developers and testers. Whether you are a user searching for flights or an admin managing the flight database, this system provides a feature-rich experience.</p>

</body>
</html>
