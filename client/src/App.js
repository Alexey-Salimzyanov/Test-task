import { useState } from "react";
import { getQuestion, sendQuestion } from "./http/hosts";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
function App() {
  return (
    <BrowserRouter>
    <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
