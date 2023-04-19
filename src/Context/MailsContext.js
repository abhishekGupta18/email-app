import { createContext, useContext, useEffect, useState } from "react";

import { fakeFetch } from "../fakeFetch";

export const MailContext = createContext();

export const MailContextProvider = ({ children }) => {
  const [mails, setMails] = useState({});
  const getMails = async () => {
    try {
      const response = await fakeFetch("https://example.com/api/allemails");
      if (response.status === 200) {
        setMails(response.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getMails();
  }, []);

  return (
    <MailContext.Provider value={{ mails }}>{children}</MailContext.Provider>
  );
};

export const useMailContext = () => {
  return useContext(MailContext);
};
