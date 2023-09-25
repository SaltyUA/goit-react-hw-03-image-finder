import React from 'react';
import { MessageNotification } from './Error.styled';

const Notification = ({ message }) => {
  return (
    <MessageNotification>
      <p>{message}</p>
    </MessageNotification>
  );
};

export default Notification;
