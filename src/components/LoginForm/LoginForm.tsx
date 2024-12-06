import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { login } from '../../services/auth/AuthSlice';
import { RootState } from '../../store/redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Navigate } from 'react-router-dom';
import styles from './LoginForm.module.css';

interface LoginFormInputs {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required'),
});

const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, isAuthenticated } = useAppSelector((state: RootState) => state.auth);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    dispatch(login(data));
  };

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label className={styles.label}>Username:</label>
        <input className={styles.input} {...register('username')} />
        {errors.username && <p className={styles.error}>{errors.username.message}</p>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Password:</label>
        <input
          type="password"
          className={styles.input}
          {...register('password')}
        />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
      </div>
      <button
        type="submit"
        className={styles.button}
        disabled={loading}
      >
        Login
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default LoginForm;
