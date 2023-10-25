import { NavLink } from "react-router-dom";
export default function GithubLinkPage() {
  return (
    <div className="container">
      <h1>To Visit my Github</h1>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/NajwaLahly"
        >
          Click here
        </a>
      </p>
      <p>
        <NavLink to={"/"}>Back to home page</NavLink>
      </p>
    </div>
  );
}
