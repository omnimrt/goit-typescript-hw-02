const ErrorMessage = ({ message = "Oops, something went wrong!🥸" }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;
