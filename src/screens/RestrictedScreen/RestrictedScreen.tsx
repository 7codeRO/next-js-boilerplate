import styles from './RestrictedScreen.module.scss';
import { useDispatch } from 'react-redux';
import useSWR from 'swr';
import { useHttp } from '../../hooks/useHttp';
import { getPosts } from '../../services/api/api-request-sample/sample.api';
import { SwrSample } from '../../services/api/api-request-sample/sample.swr';
import Button from '../../components/Button/Button';

const RestrictedScreen = () => {
  const { http } = useHttp({ withLoading: true });

  const { data } = useSWR(SwrSample.getPosts(), () =>
    http(() => getPosts())
  );

  return (
    <ul className={styles.container}>
      {
        data && data.map(({ title, id }) => {
          return (
            <li key={id}>
              <Button>{title}</Button>
            </li>
          )
        })
      }
    </ul>
  );
};

export default RestrictedScreen;
