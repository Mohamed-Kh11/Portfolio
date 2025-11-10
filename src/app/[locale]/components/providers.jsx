"use client";

import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";

export default function Providers({ children, locale, messages }) {
  return (
      <NextIntlClientProvider locale={locale} timeZone="Africa/Cairo" messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={true}
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </NextIntlClientProvider>
  );
}
