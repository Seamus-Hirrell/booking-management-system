import { component$, $, type Signal } from '@builder.io/qwik';
import {
  buttonContainerStyle,
  dialogStyle,
  formStyle,
} from './modal_styles.css';
import { account, databases } from '~/api';
import { ID } from 'appwrite';

interface ModalProps {
  dateTime: Date;
  dialogRef: Signal<HTMLDialogElement>;
}

export const handleSubmit = $(async (event: Event) => {
  const form = event.target as HTMLFormElement;

  const userid = (await account.get()).$id;
  const datetime = new Date(form.date.value);
  const reason = form.reason.value;

  console.log(datetime, userid, reason);

  databases.createDocument(
    '63bdf02eddbf72fa2abe',
    '63bdf0455a708734ce9b',
    ID.unique(),
    {
      datetime,
      userid,
      reason,
    }
  );
});

export const Modal = component$((props: ModalProps) => {
  return (
    <dialog class={dialogStyle} ref={props.dialogRef}>
      <form method="dialog" class={formStyle} onSubmit$={handleSubmit}>
        <span class="drac-text drac-line-height drac-text-black">
          Create an appointment for {props.dateTime.toLocaleString()}?
        </span>
        <input type="hidden" name="date" value={props.dateTime.toISOString()} />
        <label for="reason" class="drac-text drac-line-height drac-text-black">
          Reason
        </label>
        <textarea id="reason" name="reason" />
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
