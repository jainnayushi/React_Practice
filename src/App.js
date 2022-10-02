import { BrowserRouter } from "react-router-dom";
import Index1 from "./UserPro/Index1";
// import App1 from "./UserPro/App1";
// import App3 from "./StartStopReset/App3";

function App() {
  return (
    <>
      <BrowserRouter>
        <Index1 />
      </BrowserRouter>
      {/* <App1 /> */}
      {/* <App3 /> */}
    </>
  );
}

export default App;
