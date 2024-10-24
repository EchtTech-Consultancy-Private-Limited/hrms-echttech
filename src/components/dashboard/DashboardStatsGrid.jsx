import React from "react";
import { useState } from "react";
import {
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { PiUserCheck, PiUsersBold } from "react-icons/pi";
import { MdOutlineTimer } from "react-icons/md";
import { FiUmbrella } from "react-icons/fi";
import { MdOutlineEditCalendar } from "react-icons/md";
import { LuUserCheck2 } from "react-icons/lu";
import { IoIosClose } from "react-icons/io";
import { TiWeatherPartlySunny, TiWeatherDownpour } from "react-icons/ti";
import { TbTemperatureCelsius } from "react-icons/tb";
import { TbTemperatureFahrenheit } from "react-icons/tb";
import employee_img from "../../assetsechttech/utility-images/employee_img.png";
import Highcharts from "highcharts";
import exporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
exporting(Highcharts);

const Card = ({ children, className }) => (
  <div className={`border rounded-lg shadow-md ${className}`}>{children}</div>
);

const CardBody = ({ children }) => <div className="p-4">{children}</div>;

const Typography = ({ as: Component = "div", children, className, style }) => (
  <Component className={className} style={style}>
    {children}
  </Component>
);

const Avatar = ({ size, src, alt }) => (
  <img
    className={`rounded-full ${size === "sm" ? "w-8 h-8" : "w-12 h-12"}`}
    src={src}
    alt={alt}
  />
);

// Sample customer data
const customers = [
  {
    name: "Tania Andrew",
    message: "Hi How are you",
    time: "05:35 pm",
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
  },
  {
    name: "John Micheal",
    message: "Hello dear",
    time: "05:35 pm",
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-6.jpg",
  },
  {
    name: "Alexa Liras",
    message: "Today I'm not there",
    time: "05:35 pm",
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
  },
  {
    name: "Richard Gran",
    message: "Hi Dear all How are you",
    time: "05:35 pm",
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
  },
  {
    name: "Micheal Levi",
    message: "Today I am not available",
    time: "05:35 pm",
    image:
      "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
  },
];

const days = [
  {
    id: 1,
    name: "Last 15 days",
    // avatar:
    //   'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    id: 2,
    name: "Last 30 days",
  },
  {
    id: 3,
    name: "Last 60 days",
  },
];

const data = [
  ["Title", "Project Date", "Status", "Progress"],
  ["A", "22-Aug-2024", "Complete", "Active"],
  ["B", "22-spt-2024", "Complete", "Active"],
  ["C", "22-Aug-2024", "Complete", "Active"],
  ["D", "22-Aug-2024", "Complete", "Active"],
];

const DashboardStatsGrid = () => {
  (function (H) {
    H.seriesTypes.pie.prototype.animate = function (init) {
      const series = this,
        chart = series.chart,
        points = series.points,
        { animation } = series.options,
        { startAngleRad } = series;

      function fanAnimate(point, startAngleRad) {
        const graphic = point.graphic,
          args = point.shapeArgs;

        if (graphic && args) {
          graphic
            // Set inital animation values
            .attr({
              start: startAngleRad,
              end: startAngleRad,
              opacity: 1,
            })
            // Animate to the final position
            .animate(
              {
                start: args.start,
                end: args.end,
              },
              {
                duration: animation.duration / points.length,
              },
              function () {
                // On complete, start animating the next point
                if (points[point.index + 1]) {
                  fanAnimate(points[point.index + 1], args.end);
                }
                // On the last point, fade in the data labels, then
                // apply the inner size
                if (point.index === series.points.length - 1) {
                  series.dataLabelsGroup.animate(
                    {
                      opacity: 1,
                    },
                    void 0,
                    function () {
                      points.forEach((point) => {
                        point.opacity = 1;
                      });
                      series.update(
                        {
                          enableMouseTracking: true,
                        },
                        false
                      );
                      chart.update({
                        plotOptions: {
                          pie: {
                            innerSize: "40%",
                            borderRadius: 8,
                          },
                        },
                      });
                    }
                  );
                }
              }
            );
        }
      }

      if (init) {
        // Hide points on init
        points.forEach((point) => {
          point.opacity = 0;
        });
      } else {
        fanAnimate(points[0], startAngleRad);
      }
    };
  })(Highcharts);

  const [selected, setSelected] = useState(days[1]);

  return (
    // ============== Super Admin Dashboard Start ==========================================================================================================================

    <div id="dashboard" className="px-5 py-12 right-const-structure">
      <div className="dashboard-stats-grid  super-admin">
        <div className="top-head flex justify-between items-center">
          <div className="left-part">
            <h1 className="headings text-xl">
              Welcome to,{" "}
              <span className="bg-gray text-black px-2 rounded-lg text-2xl">
                Anurag👋
              </span>
            </h1>
          </div>
          <div className="right-part">
            <Listbox value={selected} onChange={setSelected}>
              {/* <Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Label> */}
              <div className="relative">
                <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                  <span className="flex items-center">
                    {/* <img alt="" src={selected.avatar} className="h-5 w-5 flex-shrink-0 rounded-full" /> */}
                    <span className="ml-3 block truncate">{selected.name}</span>
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                    <ChevronUpDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-400"
                    />
                  </span>
                </ListboxButton>

                <ListboxOptions
                  transition
                  className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                >
                  {days.map((person) => (
                    <ListboxOption
                      key={person.id}
                      value={person}
                      className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
                    >
                      <div className="flex items-center">
                        <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                          {person.name}
                        </span>
                      </div>

                      <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                        <CheckIcon aria-hidden="true" className="h-5 w-5" />
                      </span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>
        </div>
        <div className="employee-info-card-first-section mid-content">
          <div className="info-cards-section mt-10 flex flex-wrap justify-between">
            <div className="card relative shadow">
              <div className="top-part relative">
                <div className="card-icons one">
                  <PiUsersBold className="text-2xl" />
                </div>
              </div>
              <div className="mid-part my-5">
                <p className="text-3xl font-semibold">1000+</p>
              </div>
              <div className="bottom-part">
                <p className="text-base">Total No of Users</p>
              </div>
            </div>
            <div className="card relative shadow">
              <div className="top-part relative">
                <div className="card-icons two">
                  <MdOutlineEditCalendar className="text-2xl" />
                </div>
              </div>
              <div className="mid-part my-5">
                <p className="text-3xl font-semibold">7</p>
              </div>
              <div className="bottom-part">
                <p className="text-base">Total No of Leave</p>
              </div>
            </div>
            <div className="card relative shadow">
              <div className="top-part relative">
                <div className="card-icons three">
                  <FiUmbrella className="text-2xl" />
                </div>
              </div>
              <div className="mid-part my-5">
                <p className="text-3xl font-semibold">5</p>
              </div>
              <div className="bottom-part">
                <p className="text-base">Total No of Holiday</p>
              </div>
            </div>
            <div className="card relative shadow">
              <div className="top-part relative">
                <div className="card-icons four">
                  <LuUserCheck2 className="text-2xl" />
                </div>
              </div>
              <div className="mid-part my-5">
                <p className="text-3xl font-semibold">23</p>
              </div>
              <div className="bottom-part">
                <p className="text-base">Total No of Attendance</p>
              </div>
            </div>
          </div>
        </div>

        {/* High-charts section start */}
        <div className="high-charts-section flex justify-between mt-10 flex-wrap">
          <div className="first-chart shadow charts radius ">
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                chart: {
                  type: "column",
                },
                title: {
                  text: "World's largest cities per 2021",
                },
                subtitle: {
                  text: 'Source: <a href="https://worldpopulationreview.com/world-cities" target="_blank">World Population Review</a>',
                },
                xAxis: {
                  type: "category",
                  labels: {
                    autoRotation: [-45, -90],
                    style: {
                      fontSize: "13px",
                      fontFamily: "Verdana, sans-serif",
                    },
                  },
                },
                yAxis: {
                  min: 0,
                  title: {
                    text: "Population (millions)",
                  },
                },
                legend: {
                  enabled: false,
                },
                tooltip: {
                  pointFormat:
                    "Population in 2021: <b>{point.y:.1f} millions</b>",
                },
                credits: {
                  enabled: false, // Hides the credits
                },
                series: [
                  {
                    name: "Population",
                    colors: [
                        '#9b20d9', '#9215ac', '#861ec9', '#7a17e6', '#7010f9', '#691af3',
                        '#6225ed', '#5b30e7', '#533be1', '#4c46db', '#4551d5', '#3e5ccf',
                        '#3667c9', '#2f72c3', '#277dbd', '#1f88b7', '#1693b1', '#0a9eaa',
                        '#03c69b',  '#00f194'
                    ],
                 
                    colorByPoint: true,
                    groupPadding: 0,
                    data: [
                      ["Tokyo", 37.33],
                      ["Delhi", 31.18],
                      ["Shanghai", 27.79],
                      ["Sao Paulo", 22.23],
                      ["Mexico City", 21.91],
                      ["Dhaka", 21.74],
                      ["Cairo", 21.32],
                      ["Beijing", 20.89],
                      ["Mumbai", 20.67],
                    ],
                    dataLabels: {
                      enabled: true,
                      rotation: -90,
                      color: "#FFFFFF",
                      inside: true,
                      verticalAlign: "top",
                      format: "{point.y:.1f}", // one decimal
                      y: 10, // 10 pixels down from the top
                      style: {
                        fontSize: "13px",
                        fontFamily: "Verdana, sans-serif",
                      },
                    },
                  },
                ],
              }}
              immutable={true}
            />
          </div>
          <div className="second-chart shadow charts radius">
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                chart: {
                  type: "pie",
                },

                title: {
                  text: "Departamental Strength of the Company",
                  align: "left",
                },
                subtitle: {
                  text: "Custom animation of pie series",
                  align: "left",
                },
                tooltip: {
                  pointFormat: "{series.name}: <b>{point.percentage:.1f}</b>",
                },
                accessibility: {
                  point: {
                    valueSuffix: "",
                  },
                },
                credits: {
                  enabled: false, // Hides the credits
                },
                plotOptions: {
                  pie: {
                    allowPointSelect: true,
                    borderWidth: 2,
                    cursor: "pointer",
                    dataLabels: {
                      enabled: true,
                      format: "<b>{point.name}</b><br>{point.percentage}",
                      distance: 20,
                    },
                  },
                },
                series: [
                  {
                    // Disable mouse tracking on load, enable after custom animation
                    enableMouseTracking: false,
                    animation: {
                      duration: 2000,
                    },
                    colorByPoint: true,
                    data: [
                      {
                        name: "Customer Support",
                        y: 21,
                      },
                      {
                        name: "Development",
                        y: 18,
                      },
                      {
                        name: "Sales",
                        y: 20,
                      },
                      {
                        name: "Marketing",
                        y: 14,
                      },
                      {
                        name: "Designing",
                        y: 14,
                      },
                      {
                        name: "Other",
                        y: 25,
                      },
                    ],
                  },
                ],
              }}
              immutable={true}
            />
          </div>
        </div>
        {/* End High-chart Section */}

        {/* Message Section Start */}

        <div className="message-section my-10 flex justify-between flex-wrap">
          <Card className="w-96 bg-white message-card first-msg-card">
            <CardBody>
              <div
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  className="font-bold"
                  style={{ color: "#000", fontSize: "1.25rem" }}
                >
                  Messages
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  className="text-black font-bold"
                  style={{ fontSize: "0.875rem" }}
                >
                  View all
                </Typography>
              </div>
              <div style={{ borderTop: "1px solid #E5E7EB" }}>
                {customers.map(({ name, message, time, image }, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.75rem 0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <Avatar size="sm" src={image} alt={name} />
                      <div>
                        <Typography
                          className="font-semibold"
                          style={{ color: "#4A5568", fontSize: "1rem" }}
                        >
                          {name}
                        </Typography>
                        <Typography
                          className="text-gray-500"
                          style={{ fontSize: "0.875rem" }}
                        >
                          {message}
                        </Typography>
                      </div>
                    </div>
                    <Typography
                      className="font-semibold"
                      style={{ color: "#838589", fontSize: "0.875rem" }}
                    >
                      {time}
                    </Typography>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
          <Card className="w-96 bg-white message-card second-events-card">
            <CardBody>
              <div
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  className="font-bold"
                  style={{ color: "#000", fontSize: "1.25rem" }}
                >
                  Events
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  className="text-black font-bold"
                  style={{ fontSize: "0.875rem" }}
                >
                  View all
                </Typography>
              </div>
              <div style={{ borderTop: "1px solid #E5E7EB" }}>
                {customers.map(({ name, message, time, image }, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.75rem 0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <Avatar size="sm" src={image} alt={name} />
                      <div>
                        <Typography
                          className="font-semibold"
                          style={{ color: "#4A5568", fontSize: "1rem" }}
                        >
                          {name}
                        </Typography>
                        <Typography
                          className="text-gray-500"
                          style={{ fontSize: "0.875rem" }}
                        >
                          {message}
                        </Typography>
                      </div>
                    </div>
                    <Typography
                      className="font-semibold"
                      style={{ color: "#838589", fontSize: "0.875rem" }}
                    >
                      {time}
                    </Typography>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
          <Card className="w-96 bg-white message-card third-notification-card">
            <CardBody>
              <div
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  className="font-bold"
                  style={{ color: "#000", fontSize: "1.25rem" }}
                >
                  Notification
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  className="text-black font-bold"
                  style={{ fontSize: "0.875rem" }}
                >
                  View all
                </Typography>
              </div>
              <div style={{ borderTop: "1px solid #E5E7EB" }}>
                {customers.map(({ name, message, time, image }, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0.75rem 0",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                      }}
                    >
                      <Avatar size="sm" src={image} alt={name} />
                      <div>
                        <Typography
                          className="font-semibold"
                          style={{ color: "#4A5568", fontSize: "1rem" }}
                        >
                          {name}
                        </Typography>
                        <Typography
                          className="text-gray-500"
                          style={{ fontSize: "0.875rem" }}
                        >
                          {message}
                        </Typography>
                      </div>
                    </div>
                    <Typography
                      className="font-semibold"
                      style={{ color: "#838589", fontSize: "0.875rem" }}
                    >
                      {time}
                    </Typography>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>

        {/* Message Section End */}

        {/* TO-DO tasks and weather section start */}

        <div className="to-do-weather-section my-10 flex justify-between flex-wrap">
          <div className="to-do-card-container">
            <Card className="w-96 bg-white to-do-card">
              <CardBody>
                <div
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    className="font-bold"
                    style={{ color: "#000", fontSize: "1.25rem" }}
                  >
                    TO DO List
                  </Typography>
                  <Typography
                    as="a"
                    href="#"
                    className="text-black font-bold"
                    style={{ fontSize: "0.875rem" }}
                  >
                    View all
                  </Typography>
                </div>
                <div style={{ borderTop: "1px solid #E5E7EB" }}>
                  {customers.map(({ name, message, time, image }, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "0.75rem 0",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                        }}
                      >
                        <input type="checkbox" />
                        <div>
                          <Typography
                            className="font-semibold"
                            style={{ color: "#4A5568", fontSize: "1rem" }}
                          >
                            {name}
                          </Typography>
                          <Typography
                            className="text-gray-500"
                            style={{ fontSize: "0.875rem" }}
                          >
                            26-09-2024 to 26-10-2024
                          </Typography>
                        </div>
                      </div>
                      <Typography
                        className="font-semibold"
                        style={{ color: "#838589", cursor: "pointer" }}
                      >
                        <IoIosClose className="text-xl" />
                      </Typography>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="weather-card-container shadow bg-white radius">
            <div className="weather-card p-4 radius">
              <div className="top-part-w flex justify-between px-8 color-white">
                <div className="left">
                  <h3>Delhi</h3>
                  <h5>Delhi-west</h5>
                </div>
                <div className="right">
                  <p>
                    Saturday,<span className="ml-3">06:21 PM</span>
                  </p>
                </div>
              </div>
              <div className="mid-part-w flex items-center px-8 color-white">
                <div className="mid-weather-icon">
                  <TiWeatherPartlySunny />
                </div>
                <h1 className="flex">
                  24 <TbTemperatureCelsius className="text-2xl" />
                </h1>
                <h3 className="flex">
                  75 <TbTemperatureFahrenheit className="text-2xl" />
                </h3>
              </div>
              <div className="bottom-part-w flex justify-between px-8 color-white">
                <div className="week-weather-icons flex flex-col">
                  <h5>Sat</h5>
                  <div className="weather-icon">
                    <TiWeatherDownpour />
                  </div>
                  <div className="temp flex">
                    <p className="flex">
                      26 <TbTemperatureCelsius />
                    </p>
                    <p className="flex">
                      78 <TbTemperatureFahrenheit />
                    </p>
                  </div>
                </div>

                <div className="week-weather-icons flex flex-col">
                  <h5>Sun</h5>
                  <div className="weather-icon">
                    <TiWeatherDownpour />
                  </div>
                  <div className="temp flex">
                    <p className="flex">
                      26 <TbTemperatureCelsius />
                    </p>
                    <p className="flex">
                      78 <TbTemperatureFahrenheit />
                    </p>
                  </div>
                </div>

                <div className="week-weather-icons flex flex-col">
                  <h5>Mon</h5>
                  <div className="weather-icon">
                    <TiWeatherDownpour />
                  </div>
                  <div className="temp flex">
                    <p className="flex">
                      26 <TbTemperatureCelsius />
                    </p>
                    <p className="flex">
                      78 <TbTemperatureFahrenheit />
                    </p>
                  </div>
                </div>

                <div className="week-weather-icons flex flex-col">
                  <h5>Tue</h5>
                  <div className="weather-icon">
                    <TiWeatherDownpour />
                  </div>
                  <div className="temp flex">
                    <p className="flex">
                      26 <TbTemperatureCelsius />
                    </p>
                    <p className="flex">
                      78 <TbTemperatureFahrenheit />
                    </p>
                  </div>
                </div>

                <div className="week-weather-icons flex flex-col">
                  <h5>Wed</h5>
                  <div className="weather-icon">
                    <TiWeatherDownpour />
                  </div>
                  <div className="temp flex">
                    <p className="flex">
                      26 <TbTemperatureCelsius />
                    </p>
                    <p className="flex">
                      78 <TbTemperatureFahrenheit />
                    </p>
                  </div>
                </div>

                <div className="week-weather-icons flex flex-col">
                  <h5>Thu</h5>
                  <div className="weather-icon">
                    <TiWeatherDownpour />
                  </div>
                  <div className="temp flex">
                    <p className="flex">
                      26 <TbTemperatureCelsius />
                    </p>
                    <p className="flex">
                      78 <TbTemperatureFahrenheit />
                    </p>
                  </div>
                </div>

                <div className="week-weather-icons flex flex-col">
                  <h5>Fri</h5>
                  <div className="weather-icon">
                    <TiWeatherDownpour />
                  </div>
                  <div className="temp flex">
                    <p className="flex">
                      26 <TbTemperatureCelsius />
                    </p>
                    <p className="flex">
                      78 <TbTemperatureFahrenheit />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TO-DO tasks and weather section End */}
      </div>

      {/* =========================== Super Admin Dashboard End =================================================================================================== */}

      {/* =========================== Employee Dashboard Start =================================================================================================== */}

      <div className="dashboard-stats-grid employee-das">
        <div className="top-head flex justify-between items-center">
          <div className="left-part">
            {/* <h1 className='headings'>Employee Dashboard</h1> */}
          </div>
        </div>

        {/* Employee Card information Section start */}
        <div className="emp-info-section flex mt-0 flex-wrap justify-between">
          <div className="time-card relative shadow flex justify-center">
            <div className="top-head flex flex-col items-center">
              <div className="timer-icon">
                <MdOutlineTimer className="text-3xl" />
              </div>
              <p>
                Last Login:<span>26-sep-2024</span> 06:10 pm
              </p>
            </div>
            <div className="mid-part my-10">
              <div
                id="time-in"
                className="timer  my-5 flex items-center justify-center"
              >
                <p>Login Time:</p>
                <p className="text-3xl px-5">
                  09:10 <span className="text-xs">am</span>
                </p>
              </div>
              <div
                id="time-out"
                className="timeer my-5 flex items-center justify-center"
              >
                <p>Logout Time:</p>
                <p className="text-3xl px-5">
                  09:10 <span className="text-xs">pm</span>
                </p>
              </div>
              <div className="time-btn mt-10">
                <h3>Start</h3>
              </div>
            </div>
            <div className="bottom-part">
              <p>office shift Time: 09:00 am to 06:00 pm</p>
            </div>
          </div>
          <div className="emp-info first relative shadow">
            <div className="top-head">
              <h3>Echttech HRMS</h3>
            </div>
            <div className="mid-part my-5 flex items-center flex-col">
              <div className="emp-img my-5">
                <img src={employee_img} alt="" />
              </div>
              <div className="full-name flex items-center flex-col">
                <h2>Rohit Sharma</h2>
                <h4>UI Developer</h4>
              </div>
            </div>
            <div className="bottom-part">
              <div className="bottom-info">
                <h6>Emp ID</h6>
                <span>:</span>
                <p>123456</p>
              </div>
              <div className="bottom-info">
                <h6>User Name</h6>
                <span>:</span>
                <p>rohit_sharma123</p>
              </div>
              <div className="bottom-info">
                <h6>Email</h6>
                <span>:</span>
                <p>rohit.sharma458@echttech.com</p>
              </div>
              <div className="bottom-info">
                <h6>Contact</h6>
                <span>:</span>
                <p>9999999999</p>
              </div>
            </div>
          </div>
          <div className="emp-info second relative shadow">
            <div className="top-head">
              <h4>Terms & Conditions</h4>
              <ul>
                <li>
                  <p>
                    Praesentium, atque inventore quam id eius sit odio mollitia
                  </p>
                </li>
                <li>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </li>
              </ul>
            </div>
            <div className="mid-part my-10">
              <div className="bottom-info">
                <h6>Joining Date</h6>
                <span>:</span>
                <p>20-oct-2024</p>
              </div>
              <div className="bottom-info">
                <h6>Expire Date</h6>
                <span>:</span>
                <p>.........</p>
              </div>
            </div>
            {/* <div className="bottom-part">
                      
              </div> */}
          </div>
        </div>
        {/* Employee Card information Section End */}

        {/* Employee Table Section Start */}
        <div className="emp-table-section">
          <div className="head my-10"></div>
          <div className="emp-table">
            <div className="table-container shadow">
              <div className="head mb-4">
                <h2 className="headings text-lg font-bold">My Project</h2>
              </div>

              <table>
                <thead>
                  <tr className="main-bg-color">
                    {data[0].map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="head my-10"></div>
          <div className="emp-table">
            <div className="table-container shadow">
              <div className="head mb-4">
                <h2 className="headings text-lg font-bold">My Tasks</h2>
              </div>
              <table>
                <thead>
                  <tr className="main-bg-color">
                    {data[0].map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatsGrid;
