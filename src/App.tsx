import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { RadioList } from "./RadioList";
import { Color } from "./Utils";

export type Radio = { frequency: number; image: string; name: string };

export const RadioContext = createContext<{
  currentRadio?: Radio | null;
  radios: Radio[];
  setCurrentRadio: (radio: Radio | null) => void;
}>({
  radios: [],
  setCurrentRadio: () => undefined,
});

const App = () => {
  const [radios, setRadios] = useState<Radio[]>();
  const [currentRadio, setCurrentRadio] = useState<Radio | null>();

  useEffect(() => {
    axios
      .get<{ radios: Radio[] }>("https://teclead.de/recruiting/radios")
      .then((response) => {
        setRadios(response.data.radios);
      })
      .catch((error) => {
        // TODO: Add proper error handling here in a production environment, for example sending a toast with instructions how to contact support
        console.log("error", error);
      });
  }, []);

  if (!radios) return <p>Loading...</p>;

  return (
    <RadioContext.Provider value={{ currentRadio, radios, setCurrentRadio }}>
      <AppContainer>
        <Navbar />
        <RadioList />
        <Footer />
      </AppContainer>
    </RadioContext.Provider>
  );
};

const AppContainer = styled.div`
  background: ${Color.BLUE};
  border-radius: 20px;
  height: 450px;
  position: relative;
  width: 250px;
`;

export default App;
