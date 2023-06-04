import { useGetLatestQuery } from 'redux/exchangeApi/exchangeApi';
import { ContactsContainer } from './Exchange.styled';
import { useSelector } from 'react-redux';

export default function Exchange() {
  const currency = useSelector(state => state.currency);
  const { data } = useGetLatestQuery(currency);

  return (
    <ContactsContainer>
      {data &&
        Object.entries(data.rates).map(item => (
          <div key={item[0]}>
            <div>{item[0]}</div>
            <div>{item[1]}</div>
          </div>
        ))}
    </ContactsContainer>
  );
}
