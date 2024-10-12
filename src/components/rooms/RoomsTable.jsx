import React from "react";
import RoomsCard from "./RoomsCard";



export default function RoomsTables() {
    const [rooms, setRooms] = React.useState([{img: "", building: "", room: "", status: ""}]);

    React.useEffect(() => {
        setRooms([
            {
                img: "src/assets/dummy/room1.png",
                building: "St. Agustine Building",
                room: "Room 301",
                status: "Available"
            },
            {
                img: "src/assets/dummy/room2.png",
                building: "St. Agustine Building",
                room: "Room 302",
                status: "Available"
            },
            {
                img: "src/assets/dummy/room3.png",
                building: "St. Agustine Building",
                room: "Room 303",
                status: "Available"
            },
            {
                img: "src/assets/dummy/room4.png",
                building: "St. Agustine Building",
                room: "Room 304",
                status: "Available"
            }
        ])
    }, [])

    return (
        <div className="flex flex-col bg-white px-8 py-8 round-box gap-4">
            <h1 className="font-bold text-lg">St. Agustine Building</h1>
            <div className="flex flex-row justify-between items-center">
                <h2>Rooms</h2>
                {/*CHANGE BUTTON COLOR*/}
                <button className="rounded-3xl p-3 w-28 bg-none text-[#1488CC] border-solid border-[#1488CC] border-2 font-bold text-center min-w-36">Add Room</button>
            </div>
            <ul className="flex flex-row gap-4 justify-between">
                {rooms.map((element, index) => (
                    <li key={index}>
                        <RoomsCard image={element.img} building={element.building} room={element.room} status={element.status}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}