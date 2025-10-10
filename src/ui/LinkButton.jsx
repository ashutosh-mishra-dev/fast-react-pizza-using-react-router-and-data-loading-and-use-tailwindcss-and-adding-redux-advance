import { Link, useNavigate } from "react-router";

function LinkButton({ children, to }) {
  const Navigate = useNavigate();
  const className =
    "text-sm text-blue-500 hover:text-blue-600 hover:underline cursor-pointer";

  if (to === "-1")
    return (
      <button onClick={() => Navigate(-1)} className={className}>
        {children}
      </button>
    );
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

export default LinkButton;
