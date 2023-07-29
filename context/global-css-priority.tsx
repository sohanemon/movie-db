import { StyledEngineProvider } from '@mui/material/styles';
import * as React from 'react';

export default function GlobalCssPriority({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
