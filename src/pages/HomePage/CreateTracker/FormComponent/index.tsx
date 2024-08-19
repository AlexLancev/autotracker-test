// import React from 'react';
// import {
//   Box,
//   TextField,
//   Typography,
//   FormControl,
//   FormGroup,
//   FormControlLabel,
//   Checkbox,
//   Button,
// } from '@mui/material';

// export const FormComponent: React.FC = () => {
//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//   };

//   return (
//     <Box
//       component='form'
//       sx={{
//         display: 'grid',
//         gridTemplateColumns: '1fr',
//         gap: 2,
//         maxWidth: '400px',
//         margin: 'auto',
//       }}
//       onSubmit={handleSubmit}
//     >
//       <FormControl>
//         <Typography variant='h6'>id</Typography>
//         <TextField variant='outlined' type='number' />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>name</Typography>
//         <TextField variant='outlined' type='text' />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>uniqueId</Typography>
//         <TextField variant='outlined' type='text' />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>status</Typography>
//         <TextField variant='outlined' type='text' />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>disabled</Typography>
//         <FormGroup>
//           <FormControlLabel control={<Checkbox />} label='' />
//         </FormGroup>
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>lastUpdate</Typography>
//         <TextField
//           variant='outlined'
//           type='datetime-local'
//           defaultValue='1963-11-22T18:30'
//         />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>positionId</Typography>
//         <TextField variant='outlined' type='number' />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>groupId</Typography>
//         <TextField variant='outlined' type='number' />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>phone</Typography>
//         <TextField variant='outlined' type='text' />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>model</Typography>
//         <TextField variant='outlined' type='text' />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>contact</Typography>
//         <TextField variant='outlined' type='text' />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>category</Typography>
//         <TextField variant='outlined' type='text' />
//       </FormControl>

//       <FormControl>
//         <Typography variant='h6'>attributes</Typography>
//         <TextField variant='outlined' type='text' multiline rows={4} />
//       </FormControl>

//       <Button type='submit' variant='contained' color='primary'>
//         Отправить
//       </Button>
//     </Box>
//   );
// };

import React, { useState } from 'react';
import {
  Box,
  TextField,
  Typography,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from '@mui/material';
import axios from 'axios';

export const FormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    uniqueId: '',
    status: '',
    disabled: false,
    lastUpdate: '1963-11-22T18:30',
    positionId: '',
    groupId: '',
    phone: '',
    model: '',
    contact: '',
    category: '',
    attributes: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const authHeader = 'Basic ' + btoa('test@test.test:123321');

      // Преобразование строки в объект JSON
      let attributesObject = {};
      try {
        attributesObject = JSON.parse(formData.attributes || '{}');
      } catch (error) {
        console.error('Ошибка при парсинге JSON для attributes:', error);
        throw new Error('Неверный формат JSON в поле attributes');
      }

      // Убедитесь, что attributesObject является объектом
      if (
        typeof attributesObject !== 'object' ||
        Array.isArray(attributesObject)
      ) {
        throw new Error('Attributes должен быть объектом JSON');
      }

      const response = await axios.post(
        'https://gps.autotracker.group/api/devices',
        {
          ...formData,
          attributes: attributesObject,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authHeader,
          },
        },
      );
      console.log('Данные успешно отправлены:', response.data);
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        // error является экземпляром AxiosError
        console.error('Ошибка при отправке данных:', error.response?.data);
      } else if (error instanceof Error) {
        // error является обычной ошибкой
        console.error('Ошибка при отправке данных:', error.message);
      } else {
        // Обработка неизвестного типа ошибки
        console.error('Произошла неизвестная ошибка:', error);
      }
    }
  };

  return (
    <Box
      component='form'
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 2,
        maxWidth: '400px',
        margin: 'auto',
      }}
      onSubmit={handleSubmit}
    >
      <FormControl>
        <Typography variant='h6'>id</Typography>
        <TextField
          variant='outlined'
          type='number'
          name='id'
          value={formData.id}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>name</Typography>
        <TextField
          variant='outlined'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>uniqueId</Typography>
        <TextField
          variant='outlined'
          type='text'
          name='uniqueId'
          value={formData.uniqueId}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>status</Typography>
        <TextField
          variant='outlined'
          type='text'
          name='status'
          value={formData.status}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>disabled</Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name='disabled'
                checked={formData.disabled}
                onChange={handleChange}
              />
            }
            label=''
          />
        </FormGroup>
      </FormControl>

      <FormControl>
        <Typography variant='h6'>lastUpdate</Typography>
        <TextField
          variant='outlined'
          type='datetime-local'
          name='lastUpdate'
          value={formData.lastUpdate}
          onChange={handleChange}
          required
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>positionId</Typography>
        <TextField
          variant='outlined'
          type='number'
          name='positionId'
          value={formData.positionId}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>groupId</Typography>
        <TextField
          variant='outlined'
          type='number'
          name='groupId'
          value={formData.groupId}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>phone</Typography>
        <TextField
          variant='outlined'
          type='text'
          name='phone'
          value={formData.phone}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>model</Typography>
        <TextField
          variant='outlined'
          type='text'
          name='model'
          value={formData.model}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>contact</Typography>
        <TextField
          variant='outlined'
          type='text'
          name='contact'
          value={formData.contact}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>category</Typography>
        <TextField
          variant='outlined'
          type='text'
          name='category'
          value={formData.category}
          onChange={handleChange}
        />
      </FormControl>

      <FormControl>
        <Typography variant='h6'>attributes</Typography>
        <TextField
          variant='outlined'
          type='text'
          name='attributes'
          value={formData.attributes}
          onChange={handleChange}
          multiline
          rows={4}
          placeholder='Enter JSON format'
        />
      </FormControl>

      <Button type='submit' variant='contained' color='primary'>
        Отправить
      </Button>
    </Box>
  );
};
