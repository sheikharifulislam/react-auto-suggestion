import { useEffect, useState } from "react";

const useAutoComplete = (data) => {
    const [value, setValue] = useState("");
    const [active, setActive] = useState(-1);
    const [filtered, setFiltered] = useState([]);

    const onChange = (e) => {
        setValue(e.target.value);
        const filteredSuggestions = data.filter((suggestion) => {
            if (suggestion.toLowerCase().includes(e.target.value.toLowerCase()) && e.target.value !== "") {
                return true;
            }
        });

        setFiltered(filteredSuggestions);
    };

    const onKeyDown = (e) => {
        if (e.code === "Enter") {
            setActive(-1);
            setFiltered([]);
        } else if (e.code === "ArrowDown") {
            if (filtered.length - 1 === active) {
                setActive(0);
            } else {
                setActive(active + 1);
            }
        } else if (e.code === "ArrowUp") {
            if (active <= 0) {
                setActive(filtered.length - 1);
            } else {
                setActive(active - 1);
            }
        }
    };

    const onClick = (active) => {
        setValue(filtered[active]);
        setFiltered([]);
    };

    useEffect(() => {
        if (active >= 0) {
            setValue(filtered[active]);
        }
    }, [active, active]);

    return {
        onChange,
        onKeyDown,
        onClick,
        value,
        active,
        filtered,
    };
};

export default useAutoComplete;
