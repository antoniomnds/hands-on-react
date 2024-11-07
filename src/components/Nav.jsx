import "./Nav.css"
import PropTypes from "prop-types";

const Nav = ({cast, onChoice}) => {
  return (
    <nav className="container">
      <ul>
        <li>
          <a href="#">
            <img style={{height: "50px"}} src="/images/logo_bug_stargazers.svg" alt="Stargazers Logo"/>
          </a>
        </li>
      </ul>
      <ul>
        <li>
          <details className="dropdown">
            <summary>Cast</summary>
            <ul dir="rtl">
              {cast.map(member => (
                <li key={member.id}>
                  <a onClick={() => onChoice(member)}>{member.name}</a>
                </li>
              ))}
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  cast: PropTypes.object,
  onChoice: PropTypes.func
}

export default Nav;
