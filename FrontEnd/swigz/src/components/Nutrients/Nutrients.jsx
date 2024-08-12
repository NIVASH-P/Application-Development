import React, { useContext, useEffect, useState } from "react";
import "./Nutrients.css";
import Calendar from "react-calendar";
import { CiEdit } from "react-icons/ci";
import { TbBrandSugarizer } from "react-icons/tb";
import { MdOutlineBloodtype } from "react-icons/md";
import { TbRibbonHealth } from "react-icons/tb";
import { IoPulse } from "react-icons/io5";
import { StoreContext } from "../Exploremenu/context";
import axios from "axios";
import { LoginContext } from "../Login/LoginContext";
import DietFoodItems from "../DietFoodItems/DietFoodItems";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export const Nutrients = ({ category, setCategory }) => {
  const { formData, result, setResult } = useContext(LoginContext);
  const { dietcardItems} = useContext(StoreContext);
  const nav = useNavigate();

  const dietItemsTotal = dietcardItems.reduce((total, item) => {
      return total + item.price * item.quantity;
  }, 0);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = JSON.stringify(formData);
        const response = await axios.post(
          "http://127.0.0.1:5000/predict",
          payload,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        setResult(response.data);
        if (Array.isArray(response.data)) {
          setResult(response.data);
        } else {
          console.error("Response is not an array", response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [formData, setResult]);

  const formatShortWeekday = (locale, date) => {
    return date.toLocaleString(locale, { weekday: "narrow" });
  };
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const { cartItems, food_list, removeFromCart, getTotalCard } = useContext(StoreContext);

  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(result.result) ? result.result.slice(indexOfFirstItem, indexOfLastItem) : [];

  // Calculate total pages
  const totalPages = Array.isArray(result.result) ? Math.ceil(result.result.length / itemsPerPage) : 1;

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="nutriants">
      <div className="side-details">
        <div className="dash">
          <h3 className="name">Parthiban</h3>
          <br />
          <h4 className="name">6374044907</h4>
          <br />
          <nav>
            <ul>
              <li>
                <TbBrandSugarizer className="icons" /> Sugar : <span>655</span>
              </li>
              <li>
                <MdOutlineBloodtype className="icons" />
                Blood Presuure : <span>180 Points</span>
              </li>
              <li>
                <TbRibbonHealth className="icons" /> Heamoglobin : <span>14 Points</span>
              </li>
              <li>
                <IoPulse className="icons" /> Pulse Rate : <span>74 BPM</span>
              </li>
            </ul>
          </nav>
          <p className="edit">
            <a href="">
              <CiEdit className="icon" />
            </a>
          </p>
        </div>
      </div>
      <hr className="hr vertical" />
      <div className="menus">
        <h1>Maintain Dietary Balance</h1>
        <p className="explore-menu-text">
          A health journey is the sum of small efforts repeated day in and day out
        </p>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <div className="diet-plan-item" onClick={() => handlePageChange(pageNumber)}>
              <img
                className="actie-diet"
                src="https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-cooking-dinner-46239.jpg&fm=jpg"
                alt=""
              />
              <p>{days[pageNumber - 1]}</p>
            </div>
          ))}
        </div>
        <div className="explore-menu-lists">
        <Grid container spacing={2} className="grid">
          {currentItems.length > 0 ? (
            currentItems.map((res, index) => (
              <React.Fragment key={index}>
                {index === 0 && (
                  <Grid item xs={12}>
                    <h2>Breakfast</h2>
                  </Grid>
                )}
                {index === 3 && (
                  <Grid item xs={12}>
                    <h2>Lunch</h2>
                  </Grid>
                )}
                {index === 6 && (
                  <Grid item xs={12}>
                    <h2>Dinner</h2>
                  </Grid>
                )}
                
                <Grid item xs={12} sm={6} md={4}>
                  <DietFoodItems
                    id={res.id}
                    name={res.Name}
                    description={res.Description}
                    price="70"
                    image={res.Images[0]}
                  />
                  <br />
                </Grid>
              </React.Fragment>
            ))
          ) : (
            <p>No results available</p>
          )}
        </Grid>

        </div>
      </div>
      <div className="right-side">
        <div className="calc">
          <Calendar formatShortWeekday={formatShortWeekday} />
        </div>
        <div className="checkout">
          <h3>Payment</h3>
          <ul>
            <li>Item Total</li>
            <li>Rs.{dietItemsTotal}</li>
          </ul>
          <hr />
          <ul>
            <li>Delivery fees</li>
            <li>Rs.40</li>
          </ul>
          <button onClick={()=>{nav('/basket_icon')}}>CheckOut</button>
        </div>
      </div>
    </div>
  );
};
