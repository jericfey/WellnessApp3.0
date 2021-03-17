import React from "react";
import Currentweightform from "./Currentweightform";
import { Modal, Button, Icon } from "semantic-ui-react";

function WeightModal() {
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
        <Currentweightform />
      </Modal.Content>
    </Modal>
  );
}

export default WeightModal;
