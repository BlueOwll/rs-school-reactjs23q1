import { ICardProps } from 'components/Card/Card';
import React from 'react';
import './NewCardForm.css';

const breeds = ['Abyssinian', 'Angora', 'Bengal', 'British', 'Maine Coon', 'Norwegian'];

interface INewCardProps {
  updateData: (card: ICardProps) => void;
}

class NewCardForm extends React.Component<INewCardProps> {
  name = React.createRef<HTMLInputElement>(); //text
  birthday = React.createRef<HTMLInputElement>(); //date
  breed = React.createRef<HTMLSelectElement>(); //select
  female = React.createRef<HTMLInputElement>(); //radio
  male = React.createRef<HTMLInputElement>(); //radio
  fromShelter = React.createRef<HTMLInputElement>(); //checkbox
  img = React.createRef<HTMLInputElement>(); // file

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!this.name.current || !this.name.current.value) {
      this.setState({ emptyName: true });
      return;
    }
    this.props.updateData({
      name: this.name.current.value,
      birthday: this.birthday.current ? this.birthday.current.value : undefined,
      breed: this.breed.current ? this.breed.current.value : breeds[0],
      sex: this.male.current ? 'male' : 'female',
      fromShelter: this.fromShelter.current ? this.fromShelter.current.checked : false,
      imgPath: this.img.current && this.img.current.files ? this.img.current.files[0] : '',
    });
  };

  render() {
    return (
      <form className="form__wrapper" onSubmit={this.handleSubmit}>
        <label>
          Name
          <input type="text" ref={this.name} />
        </label>
        <label>
          Birthday
          <input type="date" ref={this.birthday} />
        </label>
        <fieldset>
          <legend>Sex</legend>
          <label>
            <input type="radio" name="sex" defaultChecked ref={this.male} />
            Male
          </label>
          <label>
            <input type="radio" name="sex" ref={this.female} />
            Female
          </label>
        </fieldset>
        <label>
          Breed
          <select ref={this.breed}>
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label>
          From shelter
          <input type="checkbox" ref={this.fromShelter} />
        </label>
        <label>
          Upload file:
          <input type="file" ref={this.img} />
        </label>

        <input className="form__button" type="submit" value="Submit" />
      </form>
    );
  }
}

export default NewCardForm;
// text input
// date input
// dropdown/select
// checkbox
// switcher (radio)
// file upload (image)
