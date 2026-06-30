import React, { useState, useMemo } from "react";
import Card from "./Card";
import { data } from "./../data/Eventsdata";

const Filter = () => {
    const [search, setSearch] = useState("");
    const [filterType, setFilterType] = useState("All Events");

    const now = useMemo(() => new Date(), []);

    const filteredEvents = useMemo(() => {
        return data.filter((event) => {
            const matchesSearch = event.title
                .toLowerCase()
                .includes(search.toLowerCase());

            if (!matchesSearch) return false;

            if (filterType === "All Events") return true;

            const eventDate = new Date(event.date);
            const isUpcoming = eventDate >= now;

            if (filterType === "Upcoming") return isUpcoming;
            if (filterType === "Past") return !isUpcoming;

            return true;
        });
    }, [search, filterType, now]);

    return (
        <div className="filter-wrapper">
            <div className="filter-bar">
                <input
                    type="text"
                    placeholder="Search events..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="filter-search"
                />

                <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="btn cursor-pointer"
                >
                    <option value="All Events">All Events</option>
                    <option value="Upcoming">Upcoming</option>
                    <option value="Past">Past</option>
                </select>

                <button className="btn" onClick={() => { }}>
                    Filter
                </button>
            </div>

            <div className="event-grid">
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((event) => <Card key={event.id} event={event} />)
                ) : (
                    <p className="no-results">No events found.</p>
                )}
            </div>
        </div>
    );
};

export default Filter;