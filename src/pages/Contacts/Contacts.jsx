import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import { selectLoading } from "../../redux/contacts/selectors";
import Loader from "../../components/Loader/Loader";

export default function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      {loading && <Loader />}
      <ContactList />
    </>
  );
}
