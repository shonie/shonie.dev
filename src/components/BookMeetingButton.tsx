import { useCallback, useState, useEffect } from 'react';
import { Button } from '@radix-ui/themes';
import { ChatBubbleIcon } from '@radix-ui/react-icons';
import { PopupModal } from 'react-calendly';

interface BookMeetingButtonProps {
  className?: string;
  [key: string]: unknown;
}

export const BookMeetingButton = ({
  className,
  ...rest
}: BookMeetingButtonProps) => {
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
      <Button
        size="3"
        color="mint"
        radius="small"
        onClick={handleModalOpen}
        className={`hover:cursor-pointer ${className}`}
        {...rest}
      >
        <ChatBubbleIcon />
        Book meeting
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
