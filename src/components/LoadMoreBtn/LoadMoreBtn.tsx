import css from "./LoadMoreBtn.module.css";

interface ILoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: React.FC<ILoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className={css.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
