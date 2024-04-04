import LoginForm from "../components/LoginForm/LoginForm";
import PageTitle from "../components/PageTitle/PageTitle";
import { Toaster, toast } from "react-hot-toast";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { selectIsError, selectIsLoading } from "../redux/auth/selectors";

export default function Login() {
  const error = useSelector(selectIsError);
  const loading = useSelector(selectIsLoading);

  if (error) {
    toast.error("Something went wrong, please try again");
  }
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
      <Toaster position="top-center" />
    </div>
  );
}
