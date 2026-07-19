import type { JSX } from 'react';

const paths: Record<string, string> = {
  sparkles: 'M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3zM5 14l.9 2.4L8 17l-2.1.6L5 20l-.9-2.4L2 17l2.1-.6L5 14zm14 0l.9 2.4L22 17l-2.1.6L19 20l-.9-2.4L16 17l2.1-.6L19 14z',
  cube: 'M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.2L5 8.1l7 3.9 7-3.9-7-3.9zM4 9.5v7l7 3.9v-7L4 9.5zm16 0l-7 3.9v7l7-3.9v-7z',
  terminal: 'M3 4h18a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1zm1 2v12h16V6H4zm2.5 2.5L9 7l3 3-3 3-1.5-1.5L8.5 10 6.5 8.5zM13 13h4v1.5h-4V13z',
  alert: 'M12 2L1 21h22L12 2zm0 4l7.5 13h-15L12 6zm-1 5v5h2v-5h-2zm0 6v2h2v-2h-2z',
  database: 'M12 3c4.97 0 9 1.34 9 3v3c0 1.66-4.03 3-9 3s-9-1.34-9-3V6c0-1.66 4.03-3 9-3zm0 2c-3.87 0-7 .9-7 2s3.13 2 7 2 7-.9 7-2-3.13-2-7-2zM3 9.5c0 1.66 4.03 3 9 3s9-1.34 9-3V12c0 1.66-4.03 3-9 3s-9-1.34-9-3V9.5zm0 6c0 1.66 4.03 3 9 3s9-1.34 9-3v2.5c0 1.66-4.03 3-9 3s-9-1.34-9-3V15.5z',
  box: 'M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.2L5 8.1l7 3.9 7-3.9-7-3.9zM4 9.5v7l7 3.9v-7L4 9.5zm16 0l-7 3.9v7l7-3.9v-7z',
  'git-branch': 'M7 3a3 3 0 013 3 3 3 0 01-2 2.83V8a1 1 0 01-2 0v8.17a3 3 0 11-2 0V7.83A3 3 0 017 3zm10 6a3 3 0 110 6 3 3 0 010-6zm0 2a1 1 0 100 2 1 1 0 000-2z',
  shuffle: 'M14 3l3 3-3 3v-2h-3l-2.5 3H6l4-4.8L6 5h2.5L11 8h3V6l-3-3zM4 17h2.5L9 14h2l-2.5 3H4v-2zm10 1l3 3 3-3h-2v-2h-3v2h-2z',
  list: 'M4 6h2v2H4V6zm4 0h12v2H8V6zM4 11h2v2H4v-2zm4 0h12v2H8v-2zM4 16h2v2H4v-2zm4 0h12v2H8v-2z',
  layers: 'M12 2l10 5-10 5L2 7l10-5zm0 2.2L5.7 7 12 9.8 18.3 7 12 4.2zM2 12l10 5 10-5-10 5-10-5zm0 5l10 5 10-5-10 5-10-5z',
  search: 'M10 2a8 8 0 015.3 13.9l4.4 4.4-1.4 1.4-4.4-4.4A8 8 0 1110 2zm0 2a6 6 0 100 12 6 6 0 000-12z',
  bookmark: 'M6 2h12a1 1 0 011 1v18l-7-4-7 4V3a1 1 0 011-1z',
  check: 'M9 16.2l-3.5-3.5L4 14.2 9 19.2 20 8.2 18.6 6.8 9 16.2z',
  'check-circle': 'M12 2a10 10 0 100 20 10 10 0 000-20zm-1 14.2l-3.5-3.5L6 11.8l5 5L19 8.8 17.6 7.4 11 14.2z',
  menu: 'M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z',
  arrow: 'M14 5l7 7-7 7v-4H3v-6h11V5z',
  'arrow-left': 'M10 5l-7 7 7 7v-4h11v-6H10V5z',
  book: 'M6 2a2 2 0 00-2 2v16a2 2 0 002 2h13V2H6zm0 2h11v14H6V4z',
  download: 'M12 3v10.6l3.3-3.3 1.4 1.4L12 16.6l-4.7-4.7 1.4-1.4 3.3 3.3V3h0zM4 19h16v2H4v-2z',
  external: 'M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3zM5 5h5v2H5v12h12v-5h2v7H3V3h7v2H5z',
  home: 'M12 3l9 8h-3v9h-4v-6H10v6H6v-9H3l9-8z',
};

export function Icon({ name, size = 18 }: { name: string; size?: number }): JSX.Element {
  const d = paths[name] || paths.cube;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} fill="currentColor" stroke="none" />
    </svg>
  );
}
