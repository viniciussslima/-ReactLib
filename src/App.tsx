import React, { useState, useEffect, useRef, RefObject } from "react";
import {
  Drawer,
  Loading,
  Modal,
  Carrossel,
  CarrosselItem,
  Switch,
  Toast,
  Menu,
  MenuItem,
  Tooltip,
} from "./lib";

function App() {
  const menuButton = useRef<HTMLElement>(null);

  const [openDrawer, setOpenDrawer] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOPenModal] = useState(false);
  const [showCarrosel, setShowCarrosel] = useState(false);
  const [showSwitch, setShowSwitch] = useState(false);
  const [check, setCheck] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

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
        <button
          ref={menuButton as RefObject<HTMLButtonElement>}
          onClick={() => setShowMenu(true)}
        >
          Show/Hide menu
        </button>

        <button onClick={() => setShowTooltip(!showTooltip)}>
          Show/Hide Tooltip
        </button>
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
        <Carrossel itemWidth={500} height={100} space={10} qty={2}>
          <CarrosselItem
            style={{
              backgroundColor: "aqua",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            1
          </CarrosselItem>
          <CarrosselItem
            style={{
              backgroundColor: "aqua",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            2
          </CarrosselItem>
          <CarrosselItem
            style={{
              backgroundColor: "aqua",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            3
          </CarrosselItem>
          <CarrosselItem
            style={{
              backgroundColor: "aqua",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            4
          </CarrosselItem>
          <CarrosselItem
            style={{
              backgroundColor: "aqua",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            5
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

      <Menu
        show={showMenu}
        onHide={() => setShowMenu(false)}
        anchor={menuButton.current}
      >
        <MenuItem onClick={() => console.log("Item 1 selected")}>
          Item 1
        </MenuItem>
        <MenuItem onClick={() => console.log("Item 2 selected")}>
          Item 2
        </MenuItem>
        <MenuItem onClick={() => console.log("Item 2 selected")}>
          Item 3
        </MenuItem>
      </Menu>

      {showTooltip && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
          }}
        >
          <Tooltip message="Message">
            <p>Tooltip example</p>
          </Tooltip>
        </div>
      )}
    </div>
  );
}

export default App;
