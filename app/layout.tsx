import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  RedirectToSignIn
} from '@clerk/nextjs'


const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--font-ibm-plex"
})

export const metadata: Metadata = {
  title: "Ford's App",
  description: "Doing cool stuff with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
        <body
          className={ cn('font-IBMflex antialiased', IBMPlex.variable) }
        >
          <header>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
          <SignedIn>
          </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
