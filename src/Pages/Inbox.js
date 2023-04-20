import { useMailContext } from "../Context/MailsContext";
import { NavLink } from "react-router-dom";
export const Inbox = () => {
  const { mails } = useMailContext();

  return (
    <>
      <h1>Inbox Page</h1>
      <ul>
        {mails?.emails?.map((item) => (
          <li>
            <NavLink to={`/detailMail/${item.id}`}>{item.subject}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
