type PalmMotifProps = {
  className?: string;
};

export default function PalmMotif({ className = "" }: PalmMotifProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <rect x="96" y="92" width="8" height="100" rx="3" />
      <path d="M100 96 C100 60 98 36 94 12 C102 38 106 66 108 96 Z" />
      <path d="M100 92 C66 70 38 50 14 42 C46 52 74 68 100 96 Z" />
      <path d="M100 92 C134 70 162 50 186 42 C154 52 126 68 100 96 Z" />
      <path d="M100 108 C70 96 46 84 26 76 C52 86 78 96 100 112 Z" />
      <path d="M100 108 C130 96 154 84 174 76 C148 86 122 96 100 112 Z" />
      <path d="M100 124 C76 116 56 106 40 100 C62 108 84 118 100 128 Z" />
      <path d="M100 124 C124 116 144 106 160 100 C138 108 116 118 100 128 Z" />
      <path d="M100 140 C82 134 66 128 54 124 C72 130 88 136 100 144 Z" />
      <path d="M100 140 C118 134 134 128 146 124 C128 130 112 136 100 144 Z" />
    </svg>
  );
}
