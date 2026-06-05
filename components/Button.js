export default function Button({ children, variant = "outline", onClick, type, as = "button", href }) {
  const cls = `w-btn w-btn--${variant}`;
  if (as === "a") {
    return (
      <a className={cls} href={href}>{children}</a>
    );
  }
  return (
    <button className={cls} type={type || "button"} onClick={onClick}>{children}</button>
  );
}
