import { Autocomplete, TextField } from "@mui/material";
import { cities, dishes, restaurant_types } from "src/constants";
import React from "react";
export const ChoosingMethods = (props) => {
    const { method } = props;
    const options= {
        0: [],
        1: cities,
        2: restaurant_types,
        3: dishes
    }

    const labels= {
        0: "no options",
        1: "cities",
        2: "restaurant types",
        3: "dishes"
    }

    return (
        <div style={{ margin: '20px 0px' }}>
            <Autocomplete
                autoComplete
                disablePortal
                id="combo-box-demo"
                options={options[method?.id]}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label={`${labels[method.id]}`} />}
            />
        </div>
    );
}