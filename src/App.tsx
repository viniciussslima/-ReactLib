import React, { useState, useEffect } from "react";
import { Drawer, Loading } from "./lib";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 3000);
    }
  }, [isLoading]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "10px 500px",
        }}
      >
        <button onClick={() => setOpenDrawer(true)}>open drawer</button>
        <button onClick={() => setIsLoading(true)}>open loading</button>
      </div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <></>
      </Drawer>
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default App;
