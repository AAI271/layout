import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../store/redux/hooks';
import { login } from '../../services/auth/AuthSlice';
import { RootState } from '../../store/redux';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Navigate } from 'react-router-dom';
import './LoginForm.module.css'

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username:</label>
        <input {...register('username')} />
        <p>{errors.username?.message}</p>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" {...register('password')} />
        <p>{errors.password?.message}</p>
      </div>
      <button type="submit" disabled={loading}>Login</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default LoginForm;
