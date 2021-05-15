import React from 'react';
import "../styles/Header.css";

const styles = {
    headerStyle: {
      background: "lightblue"
    },
    headingStyle: {
      fontSize: 50
    }
  };

  const pStyles ={
    headerStyle: {
        background: "lightblue"
      },
      headingStyle: {
        fontSize: 15,
        fontColor: "black",
        textAlign: "center",
      }
    };

function Header() {
	return (
        <header style={styles.headerStyle} className="header">
            <h1 style={styles.headingStyle}>Employee Directory </h1> 
            <br></br>
			<p style={pStyles.headingStyle}>
				Click on carrots to filter by heading or use the search box to narrow
				your results.
			</p>
            </header>
	);
}

export default Header;