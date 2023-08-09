import { useMemo, useState } from "react";
import "./App.css";
import Table from "./components/Table/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import { SearchContext } from "./context";
import debounce from "lodash.debounce";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const updateSearchValue = useMemo(
    () =>
      debounce((str) => {
        setSearchValue(str);
      }, 150),
    [setSearchValue]
  );

  const onChangeInput = (e) => {
    updateSearchValue(e.target.value);
  };

  return (
    <>
      <Provider store={store}>
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <div className="container">
            <div className="input-position">
              <h3 className="h3-position">Отчет Акций</h3>
              <input
                className="input"
                type="text"
                placeholder="Введите символ компании"
                value={searchValue}
                onChange={(e) => onChangeInput(e)}
              />
            </div>
            <Table />
          </div>
        </SearchContext.Provider>
      </Provider>
    </>
  );
}

export default App;
