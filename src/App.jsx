import "./App.css";
import data from "./data/suggestions.js";
import useAutoComplete from "./hooks/useAutoComplete";

function App() {
    const { onChange, onKeyDown, onClick, active, value, filtered } = useAutoComplete(data);
    console.log(value);
    const styles = {
        backgroundColor: "red",
        color: "#fff",
    };

    return (
        <div className="App">
            <h1>Auto Suggeston</h1>
            <input
                type="search"
                placeholder="Search Here"
                onChange={onChange}
                onKeyDown={onKeyDown}
                value={value}
                style={{
                    width: "250px",
                    padding: "10px 0px 10px 15px",
                    borderRadius: "4px",
                    border: "1px solid #f5f5f5",
                }}
            />
            {filtered.length >= 1
                ? filtered.map((item, index) => (
                      <li style={active === index ? styles : {}} key={index} onClick={() => onClick(index)}>
                          {item}
                      </li>
                  ))
                : null}
        </div>
    );
}

export default App;
