import React, { useState } from "react";
import { Drawer } from "./lib";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

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
      </div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <></>
      </Drawer>
    </div>
  );
}

export default App;
