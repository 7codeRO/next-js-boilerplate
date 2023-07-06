import { Spinner } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers';
import { styles } from './LoadingSpinner.styles';
import { RenderIf } from '../RenderIf/RenderIf';

const LoadingSpinner = () => {
  const { isLoading } = useSelector((state: RootState) => state.ui);

  return (
    <RenderIf condition={isLoading}>
      <div className={styles.container}>
        <Spinner size="xl" color="gray" />
        <p className="text-white mt-3">
          Loading...
        </p>
      </div>
    </RenderIf>
  );
};

export default LoadingSpinner;
