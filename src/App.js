import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [setData]);
  return (
    <div className="App">
      <h2>covid situation by country</h2>
      {data ? (
        <table>
          <thead>
            <tr>
              <td>Country</td>
              <td>CountryCode</td>
              <td>NewConfirmed</td>
              <td>TotalConfirmed</td>
              <td>NewDeaths</td>
              <td>TotalDeaths</td>
              <td>NewRecovered</td>
              <td>TotalRecovered</td>
              <td>Date</td>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.Countries.map((country) => {
                return (
                  <tr key={country.ID}>
                    <td>{country.Country}</td>
                    <td>{country.CountryCode}</td>
                    <td>{country.NewConfirmed}</td>
                    <td>{country.TotalConfirmed}</td>
                    <td>{country.NewDeaths}</td>
                    <td>{country.TotalDeaths}</td>
                    <td>{country.NewRecovered}</td>
                    <td>{country.TotalRecovered}</td>
                    <td>{country.Date}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}
