import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

export class Navigation extends Component {
	render() {
		return (
			<>
				<ul className={styles.navMenu}>
					<li className={styles.navLinks}>
						<NavLink className={styles.navText} to="/home">
							Home
						</NavLink>
					</li>
					<li className={styles.navLinks}>
						<NavLink className={styles.navText} to="/todo">
							Todo
						</NavLink>
					</li>
				</ul>
			</>
		);
	}
}

export default Navigation;
