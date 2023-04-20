import { useMailContext } from "../Context/MailsContext";
import { NavLink } from "react-router-dom";

export const Sent = () => {
  const { mails } = useMailContext();
  return (
    <>
      <h1>Sent Mail</h1>
      <ul>
        {mails?.sentEmails?.map((item) => (
          <li>
            <NavLink to={`/detailMail/${item.id}`}>{item.subject}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
