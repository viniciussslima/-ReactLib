# viniciussslima-ui

ReactJs lib by viniciussslima

## Components

- Drawer

```JSX
import React, { useState } from "react";
import { Drawer } from "viniciussslima"

const DrawerExample = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    <button onClick={() => setOpenDrawer(true)}>Open drawer</button>

    return (
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </Drawer>
    )
}
```

- Modal

```JSX
import React, { useState } from "react";
import { Modal } from "viniciussslima"

const ModalExample = () => {
    const [openModal, setOPenModal] = useState(false);

    <button onClick={() => setOPenModal(true)}>Open modal</button>

    return (
        <Modal
            open={openModal}
            onClose={() => setOPenModal(false)}
            title="Modal example"
            setResponse={(value) => {
            value ? console.log("ok") : console.log("cancel");
            }}
        >
            <div>
                <span>Hello word!</span>
            </div>
        </Modal>
    )
}
```

- Loading
- Carrossel
- Switch
- Toast
- Menu
