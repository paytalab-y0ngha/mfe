import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";

function App() {
  useEffect(() => {

  }, []);

  return (
    <RecoilRoot>
      <div>
        Service 2
      </div>
      <Routes>
        
        {/* <Route path="/" element={<LobbyContainer />} />
        <Route path="/room" element={<RoomContainer />} /> */}
      </Routes>
    </RecoilRoot>
  );
}

export default App;
