import { component$, type Signal } from '@builder.io/qwik';
import { dialogStyle } from './styles.css';

interface ModalProps {
  dateTime: Date;
  dialogRef: Signal<HTMLDialogElement>;
}

export const Modal = component$((props: ModalProps) => {
  return (
    <dialog style={dialogStyle} ref={props.dialogRef}>
      <form method="dialog">
        <span class="drac-text drac-line-height drac-text-black">
          Create an appointment for {props.dateTime.toLocaleString()}?
        </span>
        <div>
          <button value="cancel" class="drac-btn drac-bg-purple">
            Cancel
          </button>
          <button value="default" class="drac-btn drac-bg-purple">
            Confirm
          </button>
        </div>
      </form>
    </dialog>
  );
});
