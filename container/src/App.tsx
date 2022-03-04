import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";


function App() {
  useEffect(() => {
    console.log("apps")
  }, []);

  const Browse = () => {
    MicroFrontend("service1name","","");
    return(<div>Browse</div>)
  }

  return (
    <>
      <div>
        Container App
      </div>
      <Routes>
        <Route path="/" element={<Browse />} />
        {/* <Route path="/service2" element={} /> */}
        {/* <Route path="/" element={<LobbyContainer />} />
        <Route path="/room" element={<RoomContainer />} /> */}
      </Routes>
    </>
  );
}

export default App;
