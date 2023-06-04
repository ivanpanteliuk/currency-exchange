import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Header, Logo, LogoWrapper, Nav, StyledNavLink } from './AppBar.styled';
import { Container } from 'components/App/App.styled';
import { useGetExchangeQuery } from 'redux/exchangeApi/exchangeApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrency } from 'redux/currency/currencySlice';
import { useEffect } from 'react';
import axios from 'axios';

const instance = axios.create();

export default function AppBar() {
  const { data } = useGetExchangeQuery();
  const currency = useSelector(state => state.currency);
  const dispatch = useDispatch();

  const handleChange = evt => {
    dispatch(setCurrency(evt.target.value));
  };

  // useEffect(() => {
  //   function text(url) {
  //     return fetch(url).then(res => res.text());
  //   }

  //   text('https://www.cloudflare.com/cdn-cgi/trace')
  //     .then(data => {
  //       let ipRegex = /[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}/;
  //       let ip = data.match(ipRegex)[0];
  //       return ip;
  //     })
  //     .then(ip =>
  //       instance
  //         .get(
  //           `https://api.ipdata.co/${ip}?api-key=265cb1f68e40a22c11045fd55079483bed8ee3557701690027b0dd63`
  //         )
  //         .then(res => {
  //           dispatch(setCurrency(res.data.currency.code));
  //         })
  //         .catch(err => console.log(err))
  //     )
  //     .catch(err => console.log(err));
  // }, [dispatch]);

  return (
    <Header>
      <Container>
        <Nav>
          <LogoWrapper>
            <Logo to="/">Home</Logo>
            <StyledNavLink to="/exchange">Exchange</StyledNavLink>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Currency</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Currency"
                value={currency}
                onChange={handleChange}
              >
                {data &&
                  Object.keys(data.symbols).map(currency => (
                    <MenuItem key={currency} value={currency}>
                      {currency}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </LogoWrapper>
        </Nav>
      </Container>
    </Header>
  );
}
