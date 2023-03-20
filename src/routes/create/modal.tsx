import { component$ } from '@builder.io/qwik';

interface ModalProps {
  dateTime: Date;
  isOpen: boolean;
}

export const Modal = component$((props: ModalProps) => {
  return (
    <dialog open={props.isOpen}>
      <form method="dialog">
        <span class="drac-text drac-line-height drac-text-black">
          Are you sure you want to create an appointment on{' '}
          {props.dateTime.toLocaleString()}?
        </span>
        <div>
          <button value="cancel">Cancel</button>
          <button id="confirmBtn" value="default">
            Confirm
          </button>
        </div>
      </form>
    </dialog>
  );
});
