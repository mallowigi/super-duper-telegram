import { Alert } from '@mantine/core';
import type { FC } from 'react';

export const ErrorPage: FC<{ error: Error }> = ({ error }) => (
  <Alert color='red' title='Bummer!'>
    {error.message}
  </Alert>
);
