import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, createTheme, mantineHtmlProps } from '@mantine/core';

export const metadata = {
  title: 'My Website',
  description: 'My Project Website',
};

const theme = createTheme({
  fontFamily: 'Verdana, "Times New Roman", serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Garamond, "Times New Roman", serif' },
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang='en'
      {...mantineHtmlProps}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider  theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
