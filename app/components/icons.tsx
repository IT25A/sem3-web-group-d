import { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function HomeIcon(props: IconProps) {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 13h1v7c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-7h1c.4 0 .77-.24.92-.62.15-.37.07-.8-.22-1.09l-8.99-9a.996.996 0 0 0-1.41 0l-9.01 9c-.29.29-.37.72-.22 1.09s.52.62.92.62Zm9-8.59 6 6V20H6v-9.59z" />
    </svg>
  );
}

export function DumbbellIcon(props: IconProps) {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M22 8c0-.55-.45-1-1-1h-2V6c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1v5h-4V6c0-.55-.45-1-1-1H6c-.55 0-1 .45-1 1v1H3c-.55 0-1 .45-1 1v3H1v2h1v3c0 .55.45 1 1 1h2v1c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-1h2c.55 0 1-.45 1-1v-3h1v-2h-1zM4 15V9h1v6zm4 2H7V7h1zm9 0h-1V7h1zm3-2h-1V9h1z" />
    </svg>
  );
}

export function BicepsIcon(props: IconProps) {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16.5 9c-2.11 0-3.99 1.2-4.91 3.05-.9-.09-1.78-.07-2.63.05a15.4 15.4 0 0 0-.13-3.37A3.49 3.49 0 0 0 11 5.5C11 3.57 9.43 2 7.5 2c-1.69 0-3.91.99-4.92 5.69C2 10.43 2 13.51 2 15v2c0 2.95 4.48 5 8.5 5 2.42 0 4.63-.74 6.03-2 3.02-.02 5.47-2.48 5.47-5.5S19.53 9 16.5 9m-.05 8.99h-.02c-.06 0-.13-.02-.2-.02l-.48-.04-.33.36C14.45 19.35 12.56 20 10.5 20 7.06 20 4 18.32 4 17v-2c0-1.42 0-4.36.54-6.89C5.12 5.39 6.12 4 7.5 4 8.33 4 9 4.67 9 5.5c0 .78-.62 1.44-1.41 1.49l-1.19.08.28 1.16c.2.84.31 1.8.31 2.78 0 .76-.06 1.5-.19 2.19l-.28 1.57 1.54-.43c1.24-.35 2.61-.43 3.99-.19l.86.15.26-.83c.46-1.47 1.8-2.45 3.32-2.45 1.93 0 3.5 1.57 3.5 3.5s-1.56 3.49-3.55 3.49Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M5 20V8h14V6v14z" />
      <path d="M7 11h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z" />
    </svg>
  );
}