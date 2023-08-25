import { useEffect, useState } from "react";
import { CookiesProvider, useCookies } from "react-cookie";

const endpoint = import.meta.env.VITE_REACT_APP_ENDPOINT;

const Test = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [protect, setProtect] = useState([]);

  useEffect(() => {
    fetch(`${endpoint}/account/1`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        authentication: cookies.user,
      },
    })
      .then((res) => res)
      .then((post) => {
        console.log(post);
        setProtect(post);
      })
      .catch((err) => {
        console.log("Error fetching data:", err);
      });
  }, []);

  return (
    <>
      <h1>Hello</h1>
      <div className="flex flex-col items-center">
        <h1>{protect.status}</h1>
      </div>
    </>
  );
};

export default Test;