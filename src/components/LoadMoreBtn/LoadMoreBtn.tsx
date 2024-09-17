import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({
  children,
  onClick,
  disabled,
}) => {
  return (
    <button className={css.LoadBtn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
