import { Link } from "react-router";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block rounded-full bg-yellow-400  font-semibold tracking-wide text-stone-800 uppercase transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed cursor-pointer ";

  const styles = {
    primary: base + "py-3 px-4 md:px-6 md:py-4",
    small: base + "py-2 px-4 md:px-5 md:py-2.5 text-xs",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
