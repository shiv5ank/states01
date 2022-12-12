const Toggle = ({ title, date, details }) => {
  return (
    <div className="App">
      <div className="container">
        <h2>{title}</h2>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "16px",
            padding: "0.1rem",
          }}
        >
          {date}
        </p>
        <p
          style={{
            fontFamily: "Roboto",
            fontSize: "20px",
            padding: "0.1rem",
          }}
        >
          {details}
        </p>
      </div>
    </div>
  );
};

export default Toggle;
