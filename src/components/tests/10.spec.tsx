import { createDOM } from '@builder.io/qwik/testing';
import { test, expect } from 'vitest';
import { Calendar } from '~/routes/create/calendar';

// test multiple appointments on different days
test(`Calendar component should show 10 occupied appointment slots`, async () => {
  const { screen, render } = await createDOM();

  const weekStart = new Date('2023-05-14T23:00:00.000Z');
  const appointments = {
    total: 10,
    documents: [
      {
        datetime: '2023-05-15T08:00:00.000+00:00',
        userid: '63b0a6a71b1a5096d61b',
        reason: '',
        $id: '644c491203943e949fef',
        $createdAt: '2023-05-10T22:30:42.014+00:00',
        $updatedAt: '2023-05-10T22:30:42.014+00:00',
        $permissions: [
          'read("user:63b0a6a71b1a5096d61b")',
          'update("user:63b0a6a71b1a5096d61b")',
          'delete("user:63b0a6a71b1a5096d61b")',
        ],
        $collectionId: '6445c1894a6cda3aa31b',
        $databaseId: '63bdf02eddbf72fa2abe',
      },
      {
        datetime: '2023-05-15T10:00:00.000+00:00',
        userid: '63b0a6a71b1a5096d61b',
        reason: '',
        $id: '644c491c7a23251dad2e',
        $createdAt: '2023-05-10T22:30:52.500+00:00',
        $updatedAt: '2023-05-10T22:30:52.500+00:00',
        $permissions: [
          'read("user:63b0a6a71b1a5096d61b")',
          'update("user:63b0a6a71b1a5096d61b")',
          'delete("user:63b0a6a71b1a5096d61b")',
        ],
        $collectionId: '6445c1894a6cda3aa31b',
        $databaseId: '63bdf02eddbf72fa2abe',
      },
      {
        datetime: '2023-05-15T08:45:00.000+00:00',
        userid: '63b0a6a71b1a5096d61b',
        reason: '',
        $id: '644c491203943e949fef',
        $createdAt: '2023-05-13T22:30:42.014+00:00',
        $updatedAt: '2023-05-13T22:30:42.014+00:00',
        $permissions: [
          'read("user:63b0a6a71b1a5096d61b")',
          'update("user:63b0a6a71b1a5096d61b")',
          'delete("user:63b0a6a71b1a5096d61b")',
        ],
        $collectionId: '6445c1894a6cda3aa31b',
        $databaseId: '63bdf02eddbf72fa2abe',
      },
      {
        datetime: '2023-05-16T12:45:00.000+00:00',
        userid: '63b0a6a71b1a5096d61b',
        reason: '',
        $id: '644c491203943e949fef',
        $createdAt: '2023-05-13T22:30:42.014+00:00',
        $updatedAt: '2023-05-13T22:30:42.014+00:00',
        $permissions: [
          'read("user:63b0a6a71b1a5096d61b")',
          'update("user:63b0a6a71b1a5096d61b")',
          'delete("user:63b0a6a71b1a5096d61b")',
        ],
        $collectionId: '6445c1894a6cda3aa31b',
        $databaseId: '63bdf02eddbf72fa2abe',
      },
      {
        datetime: '2023-05-16T13:45:00.000+00:00',
        userid: '63b0a6a71b1a5096d61b',
        reason: '',
        $id: '644c491203943e949fef',
        $createdAt: '2023-05-13T22:30:42.014+00:00',
        $updatedAt: '2023-05-13T22:30:42.014+00:00',
        $permissions: [
          'read("user:63b0a6a71b1a5096d61b")',
          'update("user:63b0a6a71b1a5096d61b")',
          'delete("user:63b0a6a71b1a5096d61b")',
        ],
        $collectionId: '6445c1894a6cda3aa31b',
        $databaseId: '63bdf02eddbf72fa2abe',
      },
      {
        datetime: '2023-05-16T14:45:00.000+00:00',
        userid: '63b0a6a71b1a5096d61b',
        reason: '',
        $id: '644c491203943e949fef',
        $createdAt: '2023-05-13T22:30:42.014+00:00',
        $updatedAt: '2023-05-13T22:30:42.014+00:00',
        $permissions: [
          'read("user:63b0a6a71b1a5096d61b")',
          'update("user:63b0a6a71b1a5096d61b")',
          'delete("user:63b0a6a71b1a5096d61b")',
        ],
        $collectionId: '6445c1894a6cda3aa31b',
        $databaseId: '63bdf02eddbf72fa2abe',
      },
      {
        datetime: '2023-05-17T08:45:00.000+00:00',
        userid: '63b0a6a71b1a5096d61b',
        reason: '',
        $id: '644c491203943e949fef',
        $createdAt: '2023-05-13T22:30:42.014+00:00',
        $updatedAt: '2023-05-13T22:30:42.014+00:00',
        $permissions: [
          'read("user:63b0a6a71b1a5096d61b")',
          'update("user:63b0a6a71b1a5096d61b")',
          'delete("user:63b0a6a71b1a5096d61b")',
        ],
        $collectionId: '6445c1894a6cda3aa31b',
        $databaseId: '63bdf02eddbf72fa2abe',
      },
      {
        datetime: '2023-05-18T09:45:00.000+00:00',
        userid: '63b0a6a71b1a5096d61b',
        reason: '',
        $id: '644c491203943e949fef',
        $createdAt: '2023-05-13T22:30:42.014+00:00',
        $updatedAt: '2023-05-13T22:30:42.014+00:00',
        $permissions: [
          'read("user:63b0a6a71b1a5096d61b")',
          'update("user:63b0a6a71b1a5096d61b")',
          'delete("user:63b0a6a71b1a5096d61b")',
        ],
        $collectionId: '6445c1894a6cda3aa31b',
        $databaseId: '63bdf02eddbf72fa2abe',
      },
      {
        datetime: '2023-05-18T15:45:00.000+00:00',
        userid: '63b0a6a71b1a5096d61b',
        reason: '',
        $id: '644c491203943e949fef',
        $createdAt: '2023-05-13T22:30:42.014+00:00',
        $updatedAt: '2023-05-13T22:30:42.014+00:00',
        $permissions: [
          'read("user:63b0a6a71b1a5096d61b")',
          'update("user:63b0a6a71b1a5096d61b")',
          'delete("user:63b0a6a71b1a5096d61b")',
        ],
        $collectionId: '6445c1894a6cda3aa31b',
        $databaseId: '63bdf02eddbf72fa2abe',
      },
      {
        datetime: '2023-05-19T14:45:00.000+00:00',
        userid: '63b0a6a71b1a5096d61b',
        reason: '',
        $id: '644c491203943e949fef',
        $createdAt: '2023-05-13T22:30:42.014+00:00',
        $updatedAt: '2023-05-13T22:30:42.014+00:00',
        $permissions: [
          'read("user:63b0a6a71b1a5096d61b")',
          'update("user:63b0a6a71b1a5096d61b")',
          'delete("user:63b0a6a71b1a5096d61b")',
        ],
        $collectionId: '6445c1894a6cda3aa31b',
        $databaseId: '63bdf02eddbf72fa2abe',
      },
    ],
  };

  await render(<Calendar weekStart={weekStart} appointments={appointments} />);

  // expect screen to contain 10 divs with class 'drac-bg-red'
  const divs = screen.querySelectorAll('div.drac-bg-red');
  expect(divs.length).toEqual(10);
});
