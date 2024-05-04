import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col justify-center items-center gap-10 mt-10 p-4 text-6xl font-medium">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

export default Error;
