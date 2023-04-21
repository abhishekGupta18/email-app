import { useMailContext } from "../Context/MailsContext";
import { NavLink } from "react-router-dom";
export const Inbox = () => {
  const { mails, readEmail, unReadEmail, clickHandler } = useMailContext();
  console.log(readEmail);

  return (
    <>
      <h1>Inbox Page</h1>
      <h3>Read Message: {readEmail?.length}</h3>
      <h3>Unread Message: {unReadEmail?.length}</h3>
      <ul>
        {mails?.emails?.map((item) => (
          <li>
            <NavLink to={`/detailMail/${item.id}`}>{item.subject}</NavLink>{" "}
            {!item?.read && (
              <button onClick={() => clickHandler(item.id)}>
                Mark as read
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
