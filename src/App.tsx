import React, { useState, useEffect } from "react";
import {
  Drawer,
  Loading,
  Modal,
  Carrossel,
  CarrosselItem,
  Switch,
  Toast,
} from "./lib";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOPenModal] = useState(false);
  const [showCarrosel, setShowCarrosel] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);
  const [check, setCheck] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isLoading) {
      timeout = setTimeout(() => setIsLoading(false), 3000);
    }

    return () => clearTimeout(timeout);
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
        <button onClick={() => setShowCarrosel(!showCarrosel)}>
          Show/Hide carrosel
        </button>
        <button onClick={() => setShowSwitch(!showSwitch)}>
          Show/Hide switch
        </button>
        <button onClick={() => setShowToast(true)}>Show/Hide toast</button>
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
      {showCarrosel && (
        <Carrossel qty={1} timeout={5000}>
          <CarrosselItem>
            <div
              style={{
                backgroundColor: "aqua",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              1
            </div>
          </CarrosselItem>
          <CarrosselItem>
            <div
              style={{
                backgroundColor: "aqua",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              2
            </div>
          </CarrosselItem>
          <CarrosselItem>
            <div
              style={{
                backgroundColor: "aqua",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              3
            </div>
          </CarrosselItem>
          <CarrosselItem>
            <div
              style={{
                backgroundColor: "aqua",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              4
            </div>
          </CarrosselItem>
          <CarrosselItem>
            <div
              style={{
                backgroundColor: "aqua",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              5
            </div>
          </CarrosselItem>
        </Carrossel>
      )}
      {showSwitch && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Switch check={check} onChange={(value) => setCheck(value)} />
          {check}
        </div>
      )}
      <Toast
        show={showToast}
        onHide={() => setShowToast(false)}
        text="Something is wrong!"
        type="error"
      />
    </div>
  );
}

export default App;
