'use client';

import { useCallback, useState, useEffect } from 'react';
import { Button } from '@radix-ui/themes';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { PopupModal } from 'react-calendly';

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
      <Button size="3" color="mint" radius="small" onClick={handleModalOpen}>
        <ChatBubbleIcon />
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
