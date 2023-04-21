import { useParams } from "react-router-dom";
import { useMailContext } from "../Context/MailsContext";

export const ShowMail = () => {
  const { mails } = useMailContext();
  const { mailId } = useParams();

  const findMail =
    mails?.emails?.find((item) => item?.id === Number(mailId)) ??
    mails?.sentEmails?.find((item) => item?.id === Number(mailId));
  const { to, sender, subject, message } = findMail;

  return (
    <>
      <h2>{subject}</h2>
      <p>
        <strong>{to ? "From: " : "Sender: "}</strong> {to} {sender}
      </p>
      <p>
        <strong>Message: </strong>
        {message}
      </p>
    </>
  );
};
