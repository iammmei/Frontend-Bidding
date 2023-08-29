import { useState } from "react";
const endpoint = import.meta.env.VITE_REACT_APP_ENDPOINT;

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);
    fetch(`${endpoint}/signup`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status === 401) {
          console.log(res.status);
          alert(`Err ${res.status}: Retry inputs`);
        }
        // else if (!res.ok) throw new err(res.status);
        else return res.json();
      })
      .then((post) => {
        setName("");
        setEmail("");
        setPassword("");
        console.log(post);
      })
      .catch((err) => {
        console.log(err.code);
        console.log(err.message);
      });

    return <h1>Ok, you signed up chief!</h1>;
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block text-sm font-medium leading-6 text-gray-900">
        Username{" "}
      </label>
      <input
        type="text"
        name="name"
        value={name}
        className="w-full max-w-xs rounded-md border-0 py-1.5 m-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
        onChange={(e) => {
          e.preventDefault();
          setName(e.target.value);
        }}
      />

      <label className="block text-sm font-medium leading-6 text-gray-900">
        Email{" "}
      </label>
      <input
        type="text"
        name="name"
        value={email}
        className="w-full max-w-xs rounded-md border-0 py-1.5 m-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
        onChange={(e) => {
          e.preventDefault();
          setEmail(e.target.value);
        }}
      />

      <label className="block text-sm font-medium leading-6 text-gray-900">
        Password{" "}
      </label>
      <input
        type="text"
        name="post"
        value={password}
        className="w-full max-w-xs rounded-md border-0 py-1.5 m-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6"
        onChange={(e) => {
          e.preventDefault();
          setPassword(e.target.value);
        }}
      />
      <br />
      <button
        className="w-full  max-w-xs justify-center rounded-md bg-yellow-400 px-3 py-1.5 m-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        type="submit"
      >
        Register
      </button>

      <div>
        <p>Already have an account?</p>
        <button onClick={() => props.handleRegister()}>Login →</button>
      </div>
    </form>
  );
};

export default Signup;
