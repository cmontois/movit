// @flow
import React, { Component } from 'react';
import TvShows from '../../components/tv-shows-page';

type Props = {};

export default class TvShowsPage extends Component<Props> {
  props: Props;

  render() {
    return <TvShows />;
  }
}
