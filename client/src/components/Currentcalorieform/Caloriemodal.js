import React from "react";
import Currentcalorieform from "./Currentcalorieform";
import { Modal, Button, Icon } from "semantic-ui-react";

function Caloriemodal() {
  const [open, setOpen] = React.useState(false);

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button icon>
          <Icon name='add' />
        </Button>
      }
    >
      <Modal.Content>
        <Currentcalorieform />
      </Modal.Content>
    </Modal>
  );
}

export default Caloriemodal;
