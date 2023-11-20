import React from 'react';
import { MessageParagraphStyled, MessageParagraphStyledProps } from './styled';
import { useMessage } from '../../context';

export type MessageParagraphProps = Omit<
React.ComponentProps<typeof MessageParagraphStyled>, keyof MessageParagraphStyledProps> & {
  wrap?: boolean;
  disableMargin?: boolean;
};

export const MessageParagraph: React.FC<MessageParagraphProps> = ({
  wrap = false, disableMargin = false, ...props
}) => {
  const { variant } = useMessage();

  return (
    <MessageParagraphStyled
      $variant={variant}
      $wrap={wrap}
      $disableMargin={disableMargin}
      {...props}
    />
  );
};

export * from './styled';
