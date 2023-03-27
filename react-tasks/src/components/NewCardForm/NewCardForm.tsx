import { ICardProps } from 'components/Card/Card';
import React from 'react';
import './NewCardForm.css';

const breeds = ['Abyssinian', 'Angora', 'Bengal', 'British', 'Maine Coon', 'Norwegian'];

interface INewCardProps {
  updateData: (card: ICardProps) => void;
}

interface INewCardFormState {
  emptyName: boolean;
  wrongName: boolean;
  emptyFile: boolean;
  emptyBirthday: boolean;
  wrongBirthday: boolean;
}

class NewCardForm extends React.Component<INewCardProps, INewCardFormState> {
  name = React.createRef<HTMLInputElement>(); //text
  birthday = React.createRef<HTMLInputElement>(); //date
  breed = React.createRef<HTMLSelectElement>(); //select
  female = React.createRef<HTMLInputElement>(); //radio
  male = React.createRef<HTMLInputElement>(); //radio
  fromShelter = React.createRef<HTMLInputElement>(); //checkbox
  img = React.createRef<HTMLInputElement>(); // file
  form = React.createRef<HTMLFormElement>();

  constructor(props: INewCardProps) {
    super(props);
    this.state = {
      emptyName: false,
      wrongName: false,
      emptyFile: false,
      emptyBirthday: false,
      wrongBirthday: false,
    };
  }

  handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!this.name.current || !this.isNameValid()) return;

    if (!this.birthday.current || !this.isDateValid()) return;

    if (!this.img.current || !this.img.current.files || !this.isFileChosen()) return;

    this.props.updateData({
      name: this.name.current.value,
      birthday: this.birthday.current ? this.birthday.current.value : undefined,
      breed: this.breed.current ? this.breed.current.value : breeds[0],
      sex: this.male.current && this.male.current.checked ? 'male' : 'female',
      fromShelter: this.fromShelter.current ? this.fromShelter.current.checked : false,
      imgPath: this.img.current.files[0],
    });

    this.form.current?.reset();
    alert(`Created new card for ${this.name.current.value}`);
    // this.setState({
    //   ...this.state,
    //   emptyFile: false,
    //   emptyName: false,
    // });
  };

  isNameValid = () => {
    if (!this.name.current || !this.name.current.value) {
      this.setState((state) => ({ ...state, emptyName: true }));
      return false;
    }
    this.setState((state) => ({ ...state, emptyName: false }));

    const firstLetter = this.name.current.value.slice(0, 1);
    console.log(firstLetter);
    if (firstLetter !== firstLetter.toUpperCase()) {
      this.setState((state) => ({ ...state, wrongName: true }));
      return false;
    }
    this.setState((state) => ({ ...state, wrongName: false }));
    return true;
  };

  isDateValid = () => {
    if (!this.birthday.current || !this.birthday.current.value) {
      this.setState((state) => ({ ...state, emptyBirthday: true }));
      return false;
    }
    this.setState((state) => ({ ...state, emptyBirthday: false }));

    if (Date.parse(this.birthday.current.value) > Date.now()) {
      this.setState((state) => ({ ...state, wrongBirthday: true }));
      return false;
    }
    this.setState((state) => ({ ...state, wrongBirthday: false }));
    return true;
  };

  isFileChosen = () => {
    if (!this.img.current || !this.img.current.files?.length) {
      this.setState((state) => ({ ...state, emptyFile: true }));
      return false;
    }
    this.setState((state) => ({ ...state, emptyFile: false }));
    return true;
  };
  render() {
    return (
      <form className="form__wrapper" onSubmit={this.handleSubmit} ref={this.form}>
        <label>
          Name
          <input type="text" ref={this.name} />
          {this.state.emptyName && <p className="error">Enter name</p>}
          {this.state.wrongName && <p className="error">Name should begin with capital letter</p>}
        </label>
        <label>
          Birthday
          <input type="date" ref={this.birthday} />
          {this.state.emptyBirthday && <p className="error">Enter birthday</p>}
          {this.state.wrongBirthday && <p className="error">Wrong burthday</p>}
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
        {this.state.emptyFile && <p className="error">Choose file</p>}
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
