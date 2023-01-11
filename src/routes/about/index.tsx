import { component$ } from '@builder.io/qwik';
import { aboutStyle } from './styles.css';

export default component$(() => {
  return (
    <div class={aboutStyle}>
      <h1 class="drac-heading drac-heading-2xl drac-text-white">About</h1>
      <span>
        <h2 class="drac-heading drac-heading-xl drac-text-white">
          What is this project?
        </h2>
        <p class="drac-text drac-line-height drac-text-white">
          This is a booking management system for a GP practice. It allows
          patients to book appointments with their doctor or nurse, and also
          allows doctors to manage their appointments.
        </p>
        <h2 class="drac-heading drac-heading-xl drac-text-white">
          What is the purpose of this project?
        </h2>
        <p class="drac-text drac-line-height drac-text-white">
          For many GP practices, the only way to book an appointment is to call
          by phone, which is not very convenient. This project aims to make it
          easier for patients to book appointments, and also for doctors to
          manage their appointments. This is done through a web app, which
          allows patients to book appointments online, and allows doctors to
          manage their appointments online.
        </p>
        <h2 class="drac-heading drac-heading-xl drac-text-white">
          What technologies were used?
        </h2>
        <p class="drac-text drac-line-height drac-text-white">
          The frontend website was made using the
          <b class="drac-text-purple"> Qwik </b> web framework. The backend was
          made using <b class="drac-text-red"> Appwrite</b>, which handles
          authentication and databases.
        </p>
        <h2 class="drac-heading drac-heading-xl drac-text-white">
          How is it deployed?
        </h2>
        <p class="drac-text drac-line-height drac-text-white">
          The website is deployed using
          <b class="drac-text-orange"> Cloudflare Pages</b>. Each time a commit
          is pushed to the main branch on<b class="drac-text-green"> GitHub</b>,
          the website is automatically rebuild and redeployed. The backend is
          deployed in a <b class="drac-text-cyan-secondary">Docker</b> container
          on a<b class="drac-text-cyan"> DigitalOcean</b> droplet.
        </p>
      </span>
    </div>
  );
});
