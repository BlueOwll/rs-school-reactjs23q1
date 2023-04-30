import { ICardProps } from 'components/Card/Card';
import { SubmitHandler, useForm } from 'react-hook-form';
import './NewCardForm.css';
import { useDispatch } from 'react-redux';
import { addCard } from '../../pages/NewCard/newCardSlice';

const breeds = ['Abyssinian', 'Angora', 'Bengal', 'British', 'Maine Coon', 'Norwegian'];

interface FormValues {
  name: string;
  birthday: string;
  breed: string;
  gender: string;
  fromShelter: boolean;
  img: FileList;
}

const NewCardForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    dispatch(
      addCard({
        id: crypto.randomUUID(),
        title: data.name,
        birthday: data.birthday,
        breed: data.breed,
        gender: data.gender,
        fromShelter: data.fromShelter,
        imgPath: data.img[0],
      } as ICardProps)
    );
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
    <form className="form__wrapper" role="new-card-form" onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name
        <input
          type="text"
          placeholder="Name"
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
          placeholder="birthday"
          {...register('birthday', {
            required: 'Enter the birthday',
            validate: { valid: isDateValid },
          })}
        />
        <p className="error">{errors.birthday?.message}</p>
      </label>
      <fieldset>
        <legend>gender</legend>
        <label>
          <input type="radio" {...register('gender')} defaultChecked value="male" />
          Male
        </label>
        <label>
          <input type="radio" {...register('gender')} value="female" />
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
        <input type="file" placeholder="file" {...register('img', { required: 'Enter file' })} />
        <p className="error">{errors.img?.message}</p>
      </label>
      <input className="form__button" type="submit" value="Submit" />
    </form>
  );
};

export default NewCardForm;
