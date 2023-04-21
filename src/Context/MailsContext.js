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

  const clickHandler = (id) => {
    const newList = { ...mails };
    const markAsRead = newList?.emails?.map((item) => {
      if (item.id === id) {
        return { ...item, read: true };
      } else {
        return item;
      }
    });
    // console.log(markAsRead);
    setMails({ ...newList, emails: markAsRead }); // niharika Op
  };
  const readEmail = mails?.emails?.filter((item) => item.read);
  const unReadEmail = mails?.emails?.filter((item) => !item.read);

  useEffect(() => {
    getMails();
  }, []);

  return (
    <MailContext.Provider
      value={{ mails, readEmail, unReadEmail, clickHandler }}
    >
      {children}
    </MailContext.Provider>
  );
};

export const useMailContext = () => {
  return useContext(MailContext);
};
