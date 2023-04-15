import { Cards } from './../../components/Cards/Cards';
import Search from './../../components/Search/Search';
import './Home.css';
import { useGetManyQuery } from '../../components/Api/FlickrApi';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
  const searchText = useSelector((state: RootState) => state.searchText.value);
  const {
    data: cards,
    isFetching,
    isError,
  } = useGetManyQuery({ text: searchText !== '' ? searchText : 'react' });

  return (
    <div className="home">
      <Search />
      {isFetching && <Spinner />}
      {cards && <Cards cards={cards} />}
      {isError && <div className="cards">Error when download data</div>}
    </div>
  );
};

export default Home;
