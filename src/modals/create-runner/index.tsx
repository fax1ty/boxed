import { nanoid } from "nanoid";

import { useBoardStore } from "../../store/board";
import { useModalStore } from "../../store/modal";
import { BaseModal } from "../base-modal";
import classes from "./styles.module.scss";

export const CreateRunnerModal = () => {
  const isCreateRunnerModalVisible = useModalStore(
    (state) => state.isCreateRunnerModalVisible
  );
  const setCreateRunnerModalVisible = useModalStore(
    (state) => state.setCreateRunnerModalVisible
  );
  const onNodesChange = useBoardStore((state) => state.onNodesChange);
  const lastClickPoint = useBoardStore((state) => state.lastClickPoint);
  return (
    <BaseModal
      show={isCreateRunnerModalVisible}
      onHide={() => setCreateRunnerModalVisible(false)}
    >
      <h1>Create Runner 🏃</h1>
      <div className={classes.list}>
        <button
          onClick={() => {
            onNodesChange([
              {
                item: {
                  id: nanoid(),
                  position: lastClickPoint,
                  data: { name: "Local" },
                  type: "runner",
                },
                type: "add",
              },
            ]);
            setCreateRunnerModalVisible(false);
          }}
        >
          Local
        </button>
      </div>
    </BaseModal>
  );
};
