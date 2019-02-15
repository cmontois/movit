// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './styles.scss';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.table}>
        
          <Link to={routes.COUNTER}>Counter</Link>
          <Link to={routes.MOVIES}>Movies</Link>
          <Link to={routes.TVSHOWS}>TV Shows</Link>
        </div>
      </div>
    );
  }
}
