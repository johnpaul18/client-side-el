import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTRmNThhZThiYmE0YTI2ZTY5NWU0ZiIsImlhdCI6MTYzODI3OTg0NSwiZXhwIjoxNjQ2MDU1ODQ1fQ.dac3egPXLgj_hkMW_hKfxLS-ngnEXtUdzrCWipiPy40";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { authorization: `Bearer ${TOKEN}` },
});
