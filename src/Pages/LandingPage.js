import { NavLink } from "react-router-dom";
export const LandingPage = () => {
  return (
    <>
      <h1>My Mail Box </h1>
      <NavLink to="/inboxMail">Inbox</NavLink> ||{" "}
      <NavLink to="/sentMail">Sent</NavLink>
    </>
  );
};
