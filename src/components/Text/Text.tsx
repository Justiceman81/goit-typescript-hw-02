import css from "./Text.module.css";

interface TextProps {
  children: React.ReactNode;
  textAlign?: string;
  marginBottom?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  textAlign = "",
  marginBottom = "0",
}) => {
  return (
    <p
      className={[
        css["text"],
        css[textAlign],
        css[`marginBottom${marginBottom}`],
      ].join(" ")}
    >
      {children}
    </p>
  );
};
export default Text;
