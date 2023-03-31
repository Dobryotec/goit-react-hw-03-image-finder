import css from './Button.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <button type="button" className={css.button} onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreButton;
