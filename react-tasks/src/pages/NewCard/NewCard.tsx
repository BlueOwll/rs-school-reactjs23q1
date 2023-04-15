import { Cards } from './../../components/Cards/Cards';
import './NewCard.css';
import NewCardForm from './../../components/NewCardForm/NewCardForm';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const NewCard = () => {
  const cards = useSelector((state: RootState) => state.newCard.newCards);

  return (
    <div className="home">
      <NewCardForm />
      <Cards cards={cards} />
    </div>
  );
};

export default NewCard;
