import { Dna } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <Dna
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperClass={css.wrapper}
    />
  );
};

export default Loader;
