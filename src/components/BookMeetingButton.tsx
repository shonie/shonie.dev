'use client';

import { useCallback, useState } from 'react';
import { PopupModal } from 'react-calendly';
import { Button } from './Button';

export const BookMeetingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleModalOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Button color="primary" onClick={handleModalOpen}>
        Book a meeting
      </Button>
      <PopupModal
        url="https://calendly.com/shonie"
        onModalClose={handleModalClose}
        open={isOpen}
        rootElement={window.document.body}
      />
    </>
  );
};
