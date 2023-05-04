import { component$, $ } from '@builder.io/qwik';
import type { Signal, QwikSubmitEvent } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

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

export const Modal = component$((props: ModalProps) => {
  const nav = useNavigate();

  const handleSubmit = $(
    async (event: QwikSubmitEvent<HTMLFormElement>, form: HTMLFormElement) => {
      const userid = (await account.get()).$id;
      const datetime = new Date(form.date.value);
      const reason = form.reason.value;

      databases
        .createDocument(
          '63bdf02eddbf72fa2abe',
          '6445c1894a6cda3aa31b',
          ID.unique(),
          {
            datetime,
            userid,
            reason,
          }
        )
        .then(
          async (response) => {
            console.log('response', response);
            alert('Appointment created!');
            await nav('/dashboard/');
          },
          async (error) => {
            console.log(error);
            alert('Error creating appointment');
            await nav();
          }
        );
    }
  );

  return (
    <dialog class={dialogStyle} ref={props.dialogRef}>
      <form method="dialog" class={formStyle} onSubmit$={handleSubmit}>
        <span class="drac-heading drac-text-black">
          Creating an appointment for {props.dateTime.toLocaleString()}
        </span>
        <input type="hidden" name="date" value={props.dateTime.toISOString()} />
        <hr class="drac-divider drac-w-full" />
        <label for="reason" class="drac-text drac-line-height drac-text-black">
          Reason
        </label>
        <textarea id="reason" name="reason" />
        <hr class="drac-divider drac-w-full" />
        <span class={buttonContainerStyle}>
          <button
            type="button"
            class="drac-btn drac-bg-purple"
            onClick$={() => {
              props.dialogRef.value.close();
            }}
          >
            Cancel
          </button>
          <button type="submit" class="drac-btn drac-bg-purple">
            Confirm
          </button>
        </span>
      </form>
    </dialog>
  );
});
