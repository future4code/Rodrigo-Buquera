import { app } from "./app";
import { deleteCountry } from "./endpoints/deleteCountry";
import { editCountryById } from "./endpoints/editCountryById";
import { getAllCountries } from "./endpoints/getAllCountries";
import { getCountryById } from "./endpoints/getCountryById";
import { getSearchedCountries } from "./endpoints/getSearchedCountries";
import { postCountry } from "./endpoints/postCountry";

app.get("/countries", getAllCountries)
app.post("/countries", postCountry)
app.get("/countries/search", getSearchedCountries )
app.get("/countries/:id", getCountryById)
app.post("/countries/:id", editCountryById)
app.delete("/countries/:id", deleteCountry)
