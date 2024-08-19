import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Box,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { useNavigate } from 'react-router-dom';

import { FormValues, Schema } from '../../utils/validationShema';

import styles from './Form.module.css';

export const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<FormValues>({
    resolver: yupResolver(Schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    navigate(`/`);
    reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <Box
        component='fieldset'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '300px',
          margin: 'auto',
          mt: 20,
        }}
      >
        <TextField
          label='Email *'
          variant='outlined'
          margin='normal'
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              borderColor: '#ff9800',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#ff9800',
            },
          }}
          {...register('email')}
        />
        {errors.email && (
          <span className={styles.formError}>{errors.email.message}</span>
        )}

        <TextField
          label='Пароль *'
          type={showPassword ? 'text' : 'password'}
          variant='outlined'
          margin='normal'
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root.Mui-focused fieldset': {
              color: '#ff9800',
              borderColor: '#ff9800',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#ff9800',
            },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  title='Показать / скрыть пароль'
                  onClick={handleClickShowPassword}
                  edge='start'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...register('password')}
        />
        {errors.password && (
          <span className={styles.formError}>{errors.password.message}</span>
        )}

        <Button
          disabled={!isValid}
          type='submit'
          variant='contained'
          sx={{
            mt: 2,
            backgroundColor: 'rgb(133, 95, 38)',
            color: '#fff',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: 'rgb(93, 66, 26)',
            },
            '&:disabled': {
              backgroundColor: 'rgba(0, 0, 0, 0.12)',
            },
          }}
          fullWidth
        >
          ВХОД
        </Button>
      </Box>
    </form>
  );
};
