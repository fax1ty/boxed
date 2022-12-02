import { nanoid } from "nanoid";

import { useBoardStore } from "../../store/board";
import { useModalStore } from "../../store/modal";
import { BaseModal } from "../base-modal";
import { ReactComponent as PostgresLogo } from "./postgres.svg";
import classes from "./styles.module.scss";

export const CreateBoxModal = () => {
  const isCreateBoxModalVisible = useModalStore(
    (state) => state.isCreateBoxModalVisible
  );
  const setCreateBoxModalVisible = useModalStore(
    (state) => state.setCreateBoxModalVisible
  );
  const onNodesChange = useBoardStore((state) => state.onNodesChange);
  const lastClickPoint = useBoardStore((state) => state.lastClickPoint);

  return (
    <BaseModal
      show={isCreateBoxModalVisible}
      onHide={() => setCreateBoxModalVisible(false)}
    >
      <h1>Create Box 📦</h1>
      <div className={classes.list}>
        <button
          onClick={() => {
            onNodesChange([
              {
                item: {
                  id: nanoid(),
                  position: lastClickPoint,
                  data: { name: "postgres:latest" },
                  type: "box",
                },
                type: "add",
              },
            ]);
            setCreateBoxModalVisible(false);
          }}
        >
          Postgres <PostgresLogo />
        </button>
        <button>Custom</button>
      </div>
    </BaseModal>
  );
};
