import { ICardProps } from 'components/Card/Card';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import './NewCardForm.css';

const breeds = ['Abyssinian', 'Angora', 'Bengal', 'British', 'Maine Coon', 'Norwegian'];

interface INewCardProps {
  updateData: (card: ICardProps) => void;
}

interface FormValues {
  name: string; //text
  birthday: string; //date
  breed: string; //select
  sex: string;
  fromShelter: boolean; //checkbox
  img: FileList; // file
}

const NewCardForm = (props: INewCardProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    props.updateData({
      name: data.name,
      birthday: data.birthday,
      breed: data.breed,
      sex: data.sex,
      fromShelter: data.fromShelter,
      imgPath: data.img[0],
    });

    reset();
    alert(`Created new card for ${data.name}`);
  };

  const isNameValid = (value: string) => {
    const firstLetter = value.slice(0, 1);
    if (firstLetter !== firstLetter.toUpperCase()) {
      return 'Name should begin with capital letter';
    }
    return true;
  };

  const isDateValid = (value: string) => {
    if (Date.parse(value) > Date.now()) {
      return 'Wrong date';
    }
    return true;
  };

  return (
    <form className="form__wrapper" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input
          type="text"
          {...register('name', {
            required: 'Enter the name',
            validate: { valid: isNameValid },
          })}
        />
        <p className="error">{errors.name?.message}</p>
      </label>
      <label>
        Birthday
        <input
          type="date"
          {...register('birthday', {
            required: 'Enter the birthdate',
            validate: { valid: isDateValid },
          })}
        />
        <p className="error">{errors.birthday?.message}</p>
      </label>
      <fieldset>
        <legend>Sex</legend>
        <label>
          <input type="radio" {...register('sex')} defaultChecked value="male" />
          Male
        </label>
        <label>
          <input type="radio" {...register('sex')} value="female" />
          Female
        </label>
      </fieldset>
      <label>
        Breed
        <select {...register('breed', { required: 'Enter breed' })}>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>
        <p className="error">{errors.breed?.message}</p>
      </label>
      <label>
        From shelter
        <input type="checkbox" {...register('fromShelter')} />
      </label>
      <label>
        Upload file:
        <input type="file" {...register('img', { required: 'Enter file' })} />
        <p className="error">{errors.img?.message}</p>
      </label>
      <input className="form__button" type="submit" value="Submit" />
    </form>
  );
};

export default NewCardForm;
