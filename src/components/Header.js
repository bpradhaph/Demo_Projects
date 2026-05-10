function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.logo}>My App</h1>

      <nav>
        <ul style={styles.navList}>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
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

  navList: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    cursor: "pointer",
  },
};

export default Header;