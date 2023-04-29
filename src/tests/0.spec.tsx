import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Calendar } from '~/routes/create/calendar';

test(`Calendar component should show 0 occupied appointment slots`, async () => {
  const { screen, render } = await createDOM();

  const weekStart = new Date('2023-04-30T23:00:00.000Z');
  const appointments = {
    total: 0,
    documents: [],
  };

  await render(<Calendar weekStart={weekStart} appointments={appointments} />);

  // expect screen to contain 0 divs with class 'drac-bg-red'
  const divs = screen.querySelectorAll('div.drac-bg-red');
  expect(divs.length).toEqual(0);
});
