import React from 'react';

export const Note = () => {
  return (
    <section className='note'>
      <p>
        <i>
          Note to those who care: This version of the app you are using is just
          the client (frontend). The full application has persisted data with a
          custom server using Node, Express, and MongoDB. Thank you for taking a
          look!
        </i>
      </p>
    </section>
  );
};
