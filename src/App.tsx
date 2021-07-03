import React, { useState, useEffect } from "react";
import { Drawer, Loading, Modal } from "./lib";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOPenModal] = useState(false);

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
        <button onClick={() => setOpenDrawer(true)}>Open drawer</button>
        <button onClick={() => setIsLoading(true)}>Open loading</button>
        <button onClick={() => setOPenModal(true)}>Open modal</button>
      </div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <></>
      </Drawer>
      <Loading isLoading={isLoading} />
      <Modal
        open={openModal}
        onClose={() => setOPenModal(false)}
        title="Modal test"
        setResponse={(value) => {
          value ? console.log("ok") : console.log("cancel");
        }}
      >
        <></>
      </Modal>
    </div>
  );
}

export default App;
