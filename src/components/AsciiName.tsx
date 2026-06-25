type Props = {
  className?: string;
  preClassName?: string;
};

const FIRST_NAME = [
  " _  __    _    ____  _   _ ___ _____ ",
  "| |/ /   / \\  / ___|| | | |_ _|  ___|",
  "| ' /   / _ \\ \\___ \\| |_| || || |_   ",
  "| . \\  / ___ \\ ___) |  _  || ||  _|  ",
  "|_|\\_\\/_/   \\_\\____/|_| |_|___|_|    ",
].join("\n");

const LAST_NAME = [
  " ____    _    ____ _   _ __        ___    _   _ ___ ",
  "/ ___|  / \\  / ___| | | |\\ \\      / / \\  | \\ | |_ _|",
  "\\___ \\ / _ \\| |   | |_| | \\ \\ /\\ / / _ \\ |  \\| || | ",
  " ___) / ___ \\ |___|  _  |  \\ V  V / ___ \\| |\\  || | ",
  "|____/_/   \\_\\____|_| |_|   \\_/\\_/_/   \\_\\_| \\_|___|",
].join("\n");

export default function AsciiName({ className, preClassName }: Props) {
  return (
    <div className={className}>
      <pre
        className={
          preClassName ??
          "m-0 whitespace-pre overflow-x-auto text-[10px] leading-[1.14] tracking-[0.01em]"
        }
        style={{
          color: "var(--accent)",
          fontVariantLigatures: "none",
          WebkitFontSmoothing: "antialiased",
        }}
        aria-label="Kashif Sikander Sachwani"
      >
        {`${FIRST_NAME}\n${LAST_NAME}`}
      </pre>
    </div>
  );
}
