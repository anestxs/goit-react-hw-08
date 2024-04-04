import LoginForm from "../components/LoginForm/LoginForm";
import PageTitle from "../components/PageTitle/PageTitle";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectIsLoading, selectIsError } from "../redux/auth/selectors";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function Login() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectIsError);

  return (
    <div>
      <PageTitle>Log in to your account</PageTitle>
      <LoginForm />
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="tail-spin-loading"
            radius="1"
          />
        </div>
      )}
      {error && <ErrorMessage />}
    </div>
  );
}
