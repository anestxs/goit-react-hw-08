import PageTitle from "../components/PageTitle/PageTitle";
import RegistrationForm from "../components/RegistrationForm/RegistrationForm";
import { useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../redux/auth/selectors";
import { TailSpin } from "react-loader-spinner";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function Register() {
  const error = useSelector(selectIsError);
  const loading = useSelector(selectIsLoading);

  return (
    <div>
      <PageTitle>Register your account</PageTitle>
      <RegistrationForm />
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
