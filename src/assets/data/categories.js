import React from "react";
import Breakfast from "./../images/categories/breakfast.svg";
import Lunch from "./../images/categories/lunch.svg";
import Dinner from "./../images/categories/dinner.svg";
import Appet from "./../images/categories/appetizer.svg";
const Categories = [
  {
    name: "إفطار",
    color: "#FFEDBD",
    icon: () => <Breakfast />,
  },
  {
    name: "غداء",
    color: "#FFD0D0",
    icon: () => <Lunch />,
  },
  {
    name: "عشاء",
    color: "#EFCEFF",
    icon: () => <Dinner />,
  },
  {
    name: "مقبلات",
    color: "#D1C4C4",
    icon: () => <Appet />,
  },
];
export default Categories;
