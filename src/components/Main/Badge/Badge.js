import "./Badge.css";

export default function Badge({ children, isActive }) {
  return (
    <span className={`badge${isActive === true ? " badge--active" : ""}`}>
      {children}
    </span>
  );
}
