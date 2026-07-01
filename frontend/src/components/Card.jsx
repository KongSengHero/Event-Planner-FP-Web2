import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaRegUser } from "react-icons/fa";

const Card = ({ event }) => {
    const { title, description, date, location, attendees, host } = event;

    return (
        <div className="event-card prime-black flex-wrap w-[25%]">
            <h3 className="event-card-title">{title}</h3>
            <p className="event-card-desc">{description}</p>

            <div className="event-card-row">
                <FaCalendarAlt className="event-card-icon" />
                <span>{date}</span>
            </div>

            <div className="event-card-row">
                <FaMapMarkerAlt className="event-card-icon" />
                <span>{location}</span>
            </div>

            <div className="event-card-row">
                <FaRegUser className="event-card-icon" />
                <span>{attendees}</span>
            </div>

            <div className="event-card-row">
                <FaRegUser className="event-card-icon" />
                <span>by {host}</span>
            </div>

            <a href="#" className="event-card-link">
                View Details
            </a>
        </div>
    );
};

export default Card;