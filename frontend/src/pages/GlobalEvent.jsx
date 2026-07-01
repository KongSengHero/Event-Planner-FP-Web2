import React, { useMemo, useState } from 'react';
import { useEvent } from '../context/EventContext';








const MONTH_NAMES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
];

const WEEKDAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// How many years back/forward to show in the dropdown
const YEAR_RANGE = 6;

export default function GlobalEvent() {
    const { globalEvents } = useEvent();

    const today = useMemo(() => new Date(), []);
    const [viewMonth, setViewMonth] = useState(today.getMonth());
    const [viewYear, setViewYear] = useState(today.getFullYear());

    const yearOptions = useMemo(() => {
        const years = [];
        for (let y = today.getFullYear() - YEAR_RANGE; y <= today.getFullYear() + YEAR_RANGE; y++) {
            years.push(y);
        }
        return years;
    }, [today]);

    // Map events by "YYYY-MM-DD" so we can quickly look up which days have events
    const eventsByDate = useMemo(() => {
        const map = {};
        (globalEvents || []).forEach((event) => {
            if (!event?.date) return;
            const key = new Date(event.date).toDateString();
            if (!map[key]) map[key] = [];
            map[key].push(event);
        });
        return map;
    }, [globalEvents]);

    const calendarCells = useMemo(() => {
        const firstOfMonth = new Date(viewYear, viewMonth, 1);
        const startWeekday = firstOfMonth.getDay();
        const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
        const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

        const cells = [];

        // Leading days from previous month
        for (let i = startWeekday - 1; i >= 0; i--) {
            cells.push({
                day: daysInPrevMonth - i,
                inCurrentMonth: false,
                date: new Date(viewYear, viewMonth - 1, daysInPrevMonth - i),
            });
        }

        // Days of current month
        for (let d = 1; d <= daysInMonth; d++) {
            cells.push({
                day: d,
                inCurrentMonth: true,
                date: new Date(viewYear, viewMonth, d),
            });
        }

        // Trailing days from next month to complete the final week row
        while (cells.length % 7 !== 0) {
            const nextDay = cells.length - (startWeekday + daysInMonth) + 1;
            cells.push({
                day: nextDay,
                inCurrentMonth: false,
                date: new Date(viewYear, viewMonth + 1, nextDay),
            });
        }

        return cells;
    }, [viewMonth, viewYear]);

    function goToPreviousMonth() {
        if (viewMonth === 0) {
            setViewMonth(11);
            setViewYear((y) => y - 1);
        } else {
            setViewMonth((m) => m - 1);
        }
    }

    function goToNextMonth() {
        if (viewMonth === 11) {
            setViewMonth(0);
            setViewYear((y) => y + 1);
        } else {
            setViewMonth((m) => m + 1);
        }
    }

    function isToday(date) {
        return date.toDateString() === today.toDateString();
    }

    return (
        <div className="px-6 md:px-16 py-12 flex flex-col items-center">
            {/* Header: current month/year + dropdown selectors */}
            <div className="flex flex-col items-center gap-4 mb-8">
                <div className="flex items-center gap-4">
                    <h1 className="text-3xl font-semibold min-w-[220px] text-center">
                        {MONTH_NAMES[viewMonth]} {viewYear}
                    </h1>
                </div>

                <div className="flex gap-3">
                    <select
                        value={viewMonth}
                        onChange={(e) => setViewMonth(Number(e.target.value))}
                        className="btn cursor-pointer"
                    >
                        {MONTH_NAMES.map((name, index) => (
                            <option key={name} value={index}>
                                {name}
                            </option>
                        ))}
                    </select>

                    <select
                        value={viewYear}
                        onChange={(e) => setViewYear(Number(e.target.value))}
                        className="btn cursor-pointer"
                    >
                        {yearOptions.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Calendar grid */}
            <div className="w-full max-w-5xl border border-gray-500 rounded-lg overflow-hidden">
                {/* Weekday headers */}
                <div className="grid grid-cols-7">
                    {WEEKDAY_NAMES.map((weekday) => (
                        <div
                            key={weekday}
                            className="border border-gray-500 py-3 text-center text-sm font-medium text-gray-300"
                        >
                            {weekday}
                        </div>
                    ))}
                </div>

                {/* Day cells */}
                <div className="grid grid-cols-7">
                    {calendarCells.map((cell, index) => {
                        const dayEvents = eventsByDate[cell.date.toDateString()] || [];

                        return (
                            <div
                                key={index}
                                className={[
                                    'border border-gray-500 min-h-[110px] p-2 flex flex-col gap-1',
                                    cell.inCurrentMonth ? '' : 'opacity-40',
                                    isToday(cell.date) ? 'bg-gray-700/40' : '',
                                ].join(' ')}
                            >
                                <span
                                    className={[
                                        'text-sm font-medium',
                                        isToday(cell.date) ? 'text-white' : 'text-gray-300',
                                    ].join(' ')}
                                >
                                    {cell.day}
                                </span>

                                <div className="flex flex-col gap-1 overflow-hidden">
                                    {dayEvents.slice(0, 3).map((event) => (
                                        <span
                                            key={event.id}
                                            title={event.title}
                                            className="text-xs bg-gray-600/60 rounded px-1 py-0.5 truncate"
                                        >
                                            {event.title}
                                        </span>
                                    ))}
                                    {dayEvents.length > 3 && (
                                        <span className="text-xs text-gray-400">
                                            +{dayEvents.length - 3} more
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}