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
  List,
  ListItem,
  Navbar,
  Paginator,
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
  const [showPaginator, setShowPaginator] = useState(false);
  const [paginatorItems, setPaginatorItems] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ]);
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = (page: number) => {
    setPaginatorItems((paginatorItems) =>
      paginatorItems.map((_, index) => {
        return index + 1 + (page - 1) * 10;
      })
    );
    setCurrentPage(page);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isLoading) {
      timeout = setTimeout(() => setIsLoading(false), 3000);
    }

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <div>
      <Navbar>
        <>
          <button onClick={() => setOpenDrawer(true)}>Open drawer</button>
          <button onClick={() => setIsLoading(true)}>Open loading</button>
          <button onClick={() => setOPenModal(true)}>Open modal</button>
          <button onClick={() => setShowCarrosel(!showCarrosel)}>
            Show/Hide carrosel
          </button>
          <button onClick={() => setShowSwitch(!showSwitch)}>
            Show/Hide switch
          </button>
          <button onClick={() => setShowToast(true)}>Show toast</button>
          <button
            ref={menuButton as RefObject<HTMLButtonElement>}
            onClick={() => setShowMenu(true)}
          >
            Show menu
          </button>

          <button onClick={() => setShowTooltip(!showTooltip)}>
            Show/Hide Tooltip
          </button>
          <button onClick={() => setShowPaginator(!showPaginator)}>
            Show/Hide Paginator
          </button>
        </>
      </Navbar>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          <ListItem onClick={() => console.log("item 1")}>Item 1</ListItem>
          <List collapsible title="Item 2">
            <ListItem onClick={() => console.log("item 2.1")}>
              Item 2.1
            </ListItem>
          </List>
          <List title="Item 3">
            <ListItem onClick={() => console.log("item 3.1")}>
              Item 3.1
            </ListItem>
          </List>
          <List collapsible initOpen title="Item 4">
            <ListItem onClick={() => console.log("item 4.1")}>
              Item 4.1
            </ListItem>
            <List title="Item 4.2">
              <ListItem onClick={() => console.log("item 4.2.1")}>
                Item 4.2.1
              </ListItem>
            </List>
          </List>
          <ListItem>Item 5</ListItem>
        </List>
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

      {showPaginator && (
        <div>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: "50px 0px",
            }}
          >
            {paginatorItems.map((item, i) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <Paginator
            pages={5}
            changePage={changePage}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
}

export default App;
