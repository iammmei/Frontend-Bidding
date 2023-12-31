import beehiveLogo from "./../assets/img/beehive.png";

import { useState, useEffect } from "react";
const endpoint = import.meta.env.VITE_REACT_APP_ENDPOINT;
import { Cookies, useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "./allLobby.css";
import { HeartLike } from "./heartlike.jsx";


const Hello = () => {
  return alert("Hello Welcome to Bidhive");
};

const Home = () => {


  const [cookies] = useCookies(["user"], ["user_id"]);
  const [lobbies, setLobbies] = useState();
  const [lob, setLob] = useState([]);

  const lobbiesData = () => {
    fetch(`${endpoint}/allLobby/tendance/0`, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "https://auction.oxomoto.co/",
        authentication: cookies.user,
      },
    })
      .then((res) => {
        if (!res.ok) throw new err(res.status);
        else return res.json();
      })
      .then((data) => {
        console.log(data);
        setLobbies(data);
      })
      .catch((err) => {
        return err;
      });
  };

  useEffect(() => {
    lobbiesData();
  }, []);

  return (
    <>

    <div className="flex flex-col self-center items-center">
      <img className="h-60 w-60" src={beehiveLogo} onClick={Hello} />
      {/* */}
      <h2 className="flex justify-center h-60 w-60  pt-20 text-3xl">
        Welcome to Bidhive
      </h2>
    </div>
  
      <h1 className="text-4xl mb-10"> All the lobbies</h1>

      <section className=" flex flex-wrap -mx-4">

  {lobbies?.length > 0 ? (
    lobbies?.map((item, i) => {
      return (
        <div key={item?.id + item?.created_at} className="p-3 collection" style={{ width: '300px', height: '255px' }}>
          <div className="border collection2 p-2">
            <p className="item">{item?.name}</p>
            <div className="object-cover">
              <img className=" " src={item?.cover_lobby} alt={item?.name}/>
            </div>
            <p className="heart"> ♥ {item?.likes}</p>
            <Link to={`/lobby/${item?.id}`} className="underline">
              Lobby {item?.id}
            </Link>
          </div>
        </div>
      );
    })
  ) : (
    <p>nothing yet</p>
  )}
</section>


    </>
  );
};

export default Home;



