import { useRouteError } from "react-router";
import LinkButton from "./LinkButton";
function NotFound() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>
        <span>{error.status} </span>
        {error.statusText || error.message}
      </p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default NotFound;
