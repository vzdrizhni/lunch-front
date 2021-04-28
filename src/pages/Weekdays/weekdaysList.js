import React from "react";
import { useState, useEffect } from "react";

import { Spinner } from "react-bootstrap";

import Menu from "../../components/Menu/menus";
import WeekDaysOrderList from "../WeekDaysList/weekDayList";

import { connect } from "react-redux";

import "./weekdays.css";

const WeekdaysList = (props) => {
  const [weekDaysList, setWeekDaysList] = useState([]);

  useEffect(() => {
    fetch("https://frozen-spire-70160.herokuapp.com/weekdays", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + props.user.token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Please log in") {
          props.history.push("/sign-in");
        } else {
          setWeekDaysList(data.data);
        }
      })
      .catch();
  }, []);

  let dates = weekDaysList.map((day) => day.name);
  dates = [...new Set(dates)];
  let filteredDates = {};
  dates.forEach(
    (day) =>
      (filteredDates[day] = weekDaysList.filter(
        (weekday) => weekday.name === day
      ))
  );

  const daysItems = [];

  for (const day in filteredDates) {
    daysItems.push(
      <div className="smth" key={day}>
        <h4>{day}</h4>
        {props.match.path === "/order_days" ? (
          <div className="weekdays-items">
            {filteredDates[day].map((item) => {
              return (
                <WeekDaysOrderList
                  id={item.id}
                  name={item.name}
                  key={item.id}
                  {...props}
                />
              );
            })}
          </div>
        ) : (
          <div className="weekdays-items">
            {filteredDates[day].map((item) => {
              return (
                <Menu
                  id={item.id}
                  name={item.name}
                  key={item.id}
                  {...props}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }

  if (weekDaysList.length === 0) {
    return (
      <div className="spinner">
        <Spinner animation="border" variant="white" />
      </div>
    );
  } else {
      return (
        <div className="weekdays">
          {daysItems}
        </div>
      );
    }
};

const mapStateToProps = (state) => ({ user: state.user.currentUser });

export default connect(mapStateToProps)(WeekdaysList);
