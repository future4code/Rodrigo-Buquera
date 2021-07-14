import { app } from "./app";
import { editCountryById } from "./endpoints/editCountryById";
import { getAllCountries } from "./endpoints/getAllCountries";
import { getCountryById } from "./endpoints/getCountryById";
import { getSearchedCountries } from "./endpoints/getSearchedCountries";

app.get("/countries", getAllCountries)
app.get("/countries/search", getSearchedCountries )
app.get("/countries/:id", getCountryById)
app.post("/countries/:id", editCountryById)

