function Dashboard() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>Dashboard Screen</h1>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#282c34",
    color: "white",
  },

  logo: {
    margin: 0,
  },

 
};

export default Dashboard;