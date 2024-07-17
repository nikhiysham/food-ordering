import { Table } from "antd";
import "./App.css";

const columns = [
  {
    title: "Vehicle ID",
    dataIndex: "id",
    sorter: (a, b) => a.id - b.id,
  },
  {
    title: "Type",
    dataIndex: "isLock",
    sorter: (a, b) => a.isLock - b.isLock,
  },
  {
    title: "Current Speed",
    dataIndex: "currentSpeed",
    sorter: (a, b) => a.currentSpeed - b.currentSpeed,
  },
  {
    title: "Battery Level",
    dataIndex: "batteryLvl",
    sorter: (a, b) => a.batteryLvl - b.batteryLvl,
  },
  {
    title: "Status",
    dataIndex: "status",
    sorter: (a, b) => a.status - b.status,
  },
  {
    title: "Location",
    dataIndex: "location",
    sorter: (a, b) => a.location - b.location,
  },
  {
    title: "Last Updated",
    dataIndex: "lastUpdate",
    sorter: (a, b) => a.lastUpdate - b.lastUpdate,
  },
];

const data = [
  {
    id: "123456",
    type: "Scooter",
    isLock: "Lock",
    currentSpeed: 0,
    batteryLvl: 100,
    status: "PARKING",
    location: "3.142, 114.5555",
    lastUpdate: "2019-07-02 9:00AM",
  },
  {
    id: "987654",
    type: "Scooter",
    isLock: "Unlock",
    currentSpeed: 5,
    batteryLvl: 75,
    status: "MOVING",
    location: "3.142, 114.5555",
    lastUpdate: "2019-07-02 10:00AM",
  },
  {
    id: "569825",
    type: "Scooter",
    isLock: "Unlock",
    currentSpeed: 0,
    batteryLvl: 50,
    status: "IDLING",
    location: "3.142, 114.5555",
    lastUpdate: "2019-07-02 10:00AM",
  },
  {
    id: "125864",
    type: "Scooter",
    isLock: "Lock",
    currentSpeed: 15,
    batteryLvl: 100,
    status: "TOWING",
    location: "3.142, 114.5555",
    lastUpdate: "2019-07-02 10:00AM",
  },
  {
    id: "125864",
    type: "Scooter",
    isLock: "Lock",
    currentSpeed: 0,
    batteryLvl: 100,
    status: "TOWING",
    location: "3.142, 114.5555",
    lastUpdate: "2019-07-02 10:00AM",
  },
];

function App() {
  console.log("#DATA:", data);
  return (
    <div className="App">
      <div className="table-header mb-5">
        <h2>Vehicle Management</h2>
      </div>
      <div className="flex flex-row justify-end mr-2 mb-1">
        <button className="button">+ New Vehicle</button>
      </div>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default App;
