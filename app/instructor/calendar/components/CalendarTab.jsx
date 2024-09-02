"use client";

import React, { useRef, useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { formatDate } from "@fullcalendar/core";
import { AiOutlinePlus } from "react-icons/ai";
import NewEvent from "./NewEvent";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import Image from "next/image";
import EventDetails from "./EventDetails";

const CalendarTab = () => {
  // modals
  const [isEditEventModalOpen, setIsEditEventModalOpen] = useState(false);
  const [isNewEventModalOpen, setIsNewEventModalOpen] = useState(false);
  const [isEventDetailsModalOpen, setIsEventDetailsModalOpen] = useState(false);
  const closeNewEvent = () => setIsNewEventModalOpen((prev) => !prev);
  const closeEditEvent = () => setIsEditEventModalOpen((prev) => !prev);
  const closeEventDetails = () => setIsEventDetailsModalOpen((prev) => !prev);
  const handleEditEvent = () => {
    setIsEditEventModalOpen(true);
    closeEventDetails();
  };

  // today's date
  const options = { day: "numeric", month: "long" };
  const today = new Date()
    .toLocaleDateString("en-GB", options)
    .replace(",", "");

  // selected event
  const [selectedEvent, setSelectedEvent] = useState(null);

  const calendarRef = useRef(null);

  // handle event clcik
  const handleEventClick = (clickInfo) => {
    setSelectedEvent(clickInfo.event);
    setIsEventDetailsModalOpen(true);
  };

  const toNext = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.next();
  };

  const toPrevious = () => {
    const calendarApi = calendarRef.current.getApi();
    calendarApi.prev();
  };

  const events = [
    {
      title: "Project Management",
      start: "2024-08-27T12:00:00",
      end: "2024-08-27T13:00:00",
      extendedProps: {
        module: "Module 1: Introduction to Project Management",
        instructor: "Meredith Grey",
        link: "https://teams.microsoft.com/l/meetup-join/19%3ameeting_MmFc0YmMtMjUxZi00N2Q5LWFlOWIt4YzYzMTY0YjRi%40thread.v2/0?context=%7b%22Tid%22%3a%22ecd874e5-5d8e-4a6f-8869-6ecbc235cadf%22%2c%22Oid%22%3a%221582feb8-e2de-4877-b6a4-60a7dbe8bc05%22%7d",
      },
      backgroundColor: "#A020F0",
      textColor: "white",
    },
    {
      title: "Demo Day",
      start: "2024-08-26T09:00:00",
      end: "2024-08-26T10:00:00",
      backgroundColor: "#FFD43A",
      textColor: "#A020F0",
    },
  ];

  return (
    <div>
      <div>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div>
              <Image
                src={"/assets/calendar/solar_calendar-outline.svg"}
                width={16}
                height={16}
                alt="arrow"
                quality={100}
                className=""
              />
            </div>
            <div className="flex items-center gap-1">
              <p>Today:</p>
              <p>{today}</p>
            </div>
            <button
              onClick={toPrevious}
              className="hover:bg-gray-200 p-1 rounded-md"
            >
              <CgChevronLeft size={20} />
            </button>
            <button
              onClick={toNext}
              className="hover:bg-gray-200 p-1 rounded-md"
            >
              <CgChevronRight size={20} />
            </button>
          </div>
          <button
            className="bg-[#A020F0] flex items-center gap-2 text-white px-3 py-1 md:px-6 md:py-3 rounded-md lg:w-auto border-[1.5px] buttons text-[14px] leading-[25px]"
            onClick={() => setIsNewEventModalOpen((prev) => !prev)}
          >
            <AiOutlinePlus size={17} />
            Add Class
          </button>
        </div>
        <div className="bg-white mt-8 rounded-3xl overflow-hidden border border-gray-300">
          <Fullcalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"timeGridWeek"}
            headerToolbar={false}
            events={events}
            allDaySlot={false}
            nowIndicator={true}
            editable={true}
            selectable={true}
            slotMinTime="07:00:00"
            slotMaxTime="23:00:00"
            eventClick={handleEventClick}
            eventContent={(eventInfo) => (
              <div className="h-full flex items-center justify-center text-center text-[8px] md:text-base px-2">
                <span>{eventInfo.event.title}</span>
              </div>
            )}
          />
          {/* {selectedEvent && (
            <div className="mt-4 p-4 border rounded bg-gray-100">
              <h2 className="text-lg font-semibold">{selectedEvent.title}</h2>
              {selectedEvent.extendedProps.module && (
                <p>
                  <strong>Module:</strong> {selectedEvent.extendedProps.module}
                </p>
              )}
              {selectedEvent.extendedProps.instructor && (
                <p>
                  <strong>Instructor:</strong>{" "}
                  {selectedEvent.extendedProps.instructor}
                </p>
              )}
              <p>
                <strong>Time:</strong>{" "}
                {formatDate(selectedEvent.start, {
                  hour: "numeric",
                  minute: "2-digit",
                })}{" "}
                -{" "}
                {formatDate(selectedEvent.end, {
                  hour: "numeric",
                  minute: "2-digit",
                })}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {formatDate(selectedEvent.start, {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
              {selectedEvent.extendedProps.link && (
                <p>
                  <strong>Link:</strong>{" "}
                  <a
                    href={selectedEvent.extendedProps.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    Microsoft Teams
                  </a>
                </p>
              )}
            </div>
          )} */}
        </div>
      </div>

      <NewEvent isOpen={isNewEventModalOpen} onClose={closeNewEvent} />

      <EventDetails
        isOpen={isEventDetailsModalOpen}
        onClose={closeEventDetails}
        selectedEvent={selectedEvent}
        openEditEvent={handleEditEvent}
      />
    </div>
  );
};

export default CalendarTab;
