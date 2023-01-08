import "./style.css";

function Link({ href, children }) {
  return (
    <a className="link" href={href}>
      {children}
    </a>
  );
}

export default Link;
