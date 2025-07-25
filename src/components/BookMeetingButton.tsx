'use client';

import { useCallback, useState, useEffect } from 'react';
import { PopupModal } from 'react-calendly';
import { Button } from './Button';

export const BookMeetingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  const handleModalOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    setRootElement(window.document.body);
  }, []);

  return (
    <>
      <Button color="primary" onClick={handleModalOpen}>
        Book a meeting
      </Button>
      {rootElement && (
        <PopupModal
          url="https://calendly.com/shonie"
          onModalClose={handleModalClose}
          open={isOpen}
          rootElement={rootElement}
        />
      )}
    </>
  );
};
