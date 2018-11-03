import React from "react";

import BuildControl from "./BuildControl/BuildControl";

import classes from "./BuildControls.css";

const controls = [
  { label: "Салат", type: "salad" },
  { label: "Бекон", type: "bacon" },
  { label: "Сыр", type: "cheese" },
  { label: "Мясо", type: "meat" }
];

const BuildControls = ({
  ingredientAdded,
  ingredientRemove,
  disabled,
  price,
  purchasable
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Текущая цена: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map(item => (
        <BuildControl
          key={item.label}
          label={item.label}
          added={() => ingredientAdded(item.type)}
          removed={() => ingredientRemove(item.type)}
          disabled={disabled[item.type]}
        />
      ))}
      <button className={classes.OrderButton} disabled={!purchasable}>
        ПОРЯДОК
      </button>
    </div>
  );
};

export default BuildControls;
