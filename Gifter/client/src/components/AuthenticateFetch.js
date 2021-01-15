import React, { useContext, useEffect } from "react";
import { UserProfileContext } from "../providers/UserProfileProvider";

const AuthenticateFetch = () => {
  const { getToken } = useContext(UserProfileContext);

  useEffect(() => {
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // The token gets added to the Authorization header
        },
      })
        .then((resp) => resp.json())
        .then(setQuotes)
    );
  }, []);
};
