import React from 'react';
import styles from './Tab.module.sass';

class MenuFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

  }

  render() {
    return (
      <nav>
        <ul className={styles.menu}>
          <li>
            <a href="https://google.com" className={styles.active}>
              Posts
            </a>
          </li>
          <li>
            <a href="https://google.com">
              Articles
            </a>
          </li>
          <li>
            <a href="https://google.com">
              Companies
            </a>
          </li>
          <li>
            <a href="https://google.com">
              Jobs
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MenuFeed;
