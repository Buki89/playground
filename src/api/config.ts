import axios from "axios";

const API_KEY =
  "tskTLAFjEvmgOmTEjl2xJusPnc8e08qYCBY-9ANk3EnxiuoXyXTz3_Dvj2YKLIUTv-_CgH3FX3lzPxaQ38FgfgOxz_MxhNQPPn3FC2q2Y0wyzCxSF12l2e1CxoxOXnYx";
const Url =
  "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses";

const yelp = axios.create({
  baseURL: Url,
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export default yelp;
