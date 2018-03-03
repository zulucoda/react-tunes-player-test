/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2017/08/04.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
"use strict";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import AppView from "./app-view";
import { playCurrentTune, pauseCurrentTune, setNextTune, setPreviousTune } from 'react-tunes-player'

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => bindActionCreators({
  playCurrentTune, pauseCurrentTune, setNextTune, setPreviousTune
}, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppView);

export default AppContainer;
