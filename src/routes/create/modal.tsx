import { component$, type Signal } from '@builder.io/qwik';
import {
  buttonContainerStyle,
  dialogStyle,
  formStyle,
} from './modal_styles.css';

interface ModalProps {
  dateTime: Date;
  dialogRef: Signal<HTMLDialogElement>;
}

export const Modal = component$((props: ModalProps) => {
  return (
    <dialog class={dialogStyle} ref={props.dialogRef}>
      <form method="dialog" class={formStyle}>
        <span class="drac-text drac-line-height drac-text-black">
          Create an appointment for {props.dateTime.toLocaleString()}?
        </span>
        <span class={buttonContainerStyle}>
          <button value="cancel" class="drac-btn drac-bg-purple">
            Cancel
          </button>
          <button value="default" class="drac-btn drac-bg-purple">
            Confirm
          </button>
        </span>
      </form>
    </dialog>
  );
});
