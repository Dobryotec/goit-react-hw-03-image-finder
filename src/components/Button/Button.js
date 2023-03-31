import css from './Button.module.css';

const LoadMoreButton = ({ onClick }) => {
  return (
    <buttton type="button" className={css.button} onClick={onClick}>
      Load more
    </buttton>
  );
};

export default LoadMoreButton;
