import clsx from "clsx";

const Typography = ({
  variant = "body-2",
  overrideVariant, // NEW
  as,
  children,
  className,
  colorVariant,
  ...rest
}) => {
  const finalVariant = overrideVariant || variant; // override > original
  const Tag = as || getDefaultTag(finalVariant);

  return (
    <Tag
      className={clsx(
        finalVariant,
        className,
        colorVariant && `text-${colorVariant}`
      )}
      {...rest}
      style={{ whiteSpace: "pre-line" }}
    >
      {children}
    </Tag>
  );
};

function getDefaultTag(variant) {
  const map = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    "body-1": "p",
    "body-2": "p",
    "body-3": "p",
    "body-4": "p",
    "body-5": "p",
  };
  return map[variant] || "p";
}

export default Typography;
