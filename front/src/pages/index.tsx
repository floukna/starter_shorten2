import { useState } from "react";
import axios from "axios";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Index = () => {
  const [value, setValue] = useState<String>("");
  const [shortUrl, setShortUrl] = useState<String>("");
  const [error, setError] = useState<String>("");
  const submit = async (e: any) => {
    e.preventDefault();
    console.log(1000);
    console.log(value);

    try {
      const res = await axios.post("http://localhost:3001/v1/shorturl", {
        longUrl: value,
      });
      console.log(res, "RES");
      setShortUrl(res.data.shortUrl);
      setError('');
    } catch (err) {
      setError(err.response.data);
      setShortUrl('')
      console.log(err.response);
    }
  };
  return (
    <Container>
      <h1>Shorten Url</h1>
      <form onSubmit={submit}>
        <input
          type="text"
          name="test"
          placeholder="Web..."
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" name="" value="Shorten URL" />
      </form>
      {shortUrl && (
        <h4>
          <a href={`${shortUrl}`} target="_blank">
            {shortUrl}
          </a>
        </h4>
      )}
      {error && <h4 style={{ color: "red" }}>{error}</h4>}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to dddd.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </Container>
  );
};

export default Index;
