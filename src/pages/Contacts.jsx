import PageTitle from "../components/PageTitle/PageTitle";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ContactList";
import { useSelector } from "react-redux";
import { Toaster, toast } from "react-hot-toast";
import { selectError, selectLoading } from "../redux/contacts/selectors";
import { TailSpin } from "react-loader-spinner";

export default function Contacts() {
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);

  if (error) {
    toast.error("Something went wrong, please try again");
  }
  return (
    <div>
      <PageTitle>Your contacts</PageTitle>
      <ContactForm />
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
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
      <ContactList />
      <Toaster position="top-center" />
    </div>
  );
}
