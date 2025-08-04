import "./About.css";

const About = () => {
  return (
    <div className="aboutWrapper">
      <h1>About Me: The Developer and Project Architecture</h1>
      <p className="aboutDescription">
        This application was developed with a dynamic and user-centric approach,
        adhering to modern web development standards. Every stage of the project
        was carefully planned to use specific technologies that ensure the best
        performance and user experience.
      </p>
      <div className="aboutDetails">
        <div className="detailItem">
          <h3>Technical Stack and Technologies Used</h3>
          <p>
            At the heart of this application is **React.js**, a component-based
            JavaScript library designed for creating fast and interactive user
            interfaces. The project's modular and scalable structure was built
            by leveraging the power of React.
          </p>
          <ul>
            <li>
              **Router:** I used **React Router** for seamless internal page
              navigation.
            </li>
            <li>
              **Authorization:** I implemented a robust authorization mechanism
              for members-only content using the **`PrivateRouter`** component
              and **`localStorage`** to manage user login status.
            </li>
            <li>
              **Data Management:** The **`axios`** library was used to fetch
              recipe data from an external API, ensuring the application remains
              dynamic and up-to-date.
            </li>
            <li>
              **Dynamic Pages:** The recipe detail pages were dynamically
              generated using the **`useLocation`** hook, allowing a single
              component to display details for thousands of recipes without
              creating a new page for each one.
            </li>
          </ul>
        </div>
        <div className="detailItem">
          <h3>Project Development Process</h3>
          <p>
            The project was developed with a modular architecture, where each
            page and component has its own dedicated **CSS file**. This approach
            ensures a clean and manageable codebase, preventing style conflicts
            and making future maintenance easier.
          </p>
          <ul>
            <li>
              **Component-Based Design:** The **`Card`** component receives data
              as **`props`** from the homepage and uses **`useNavigate`** to
              redirect the user to the detail page. This approach minimizes code
              repetition and accelerates the development process.
            </li>
            <li>
              **User Experience (UX):** The Login/Logout functionality changes
              dynamically based on the user's login status, offering a seamless
              and intuitive experience.
            </li>
          </ul>
        </div>
      </div>
      <p className="aboutContact">
        This project demonstrates my ability to effectively use modern web
        technologies like **React and React Router **.
        <br />
        <br />
        For any questions or feedback, please feel free to contact me:
        <a href="mailto:fahriaydin47@gmail.com">fahriaydin47@gmail.com</a>
      </p>
    </div>
  );
};

export default About;
