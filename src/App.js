import React, { Component } from 'react';
import { Root, View, Panel } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './style.css';

import EnterStart from './panels/EnterStart';
import EnterFinish from './panels/EnterFinish';

import { VIEW_ENTER, PANEL_MAIN, VIEW_MAIN, PANEL_ENTER_START, PANEL_ENTER_FINISH, panels, panelsOrder, getViewByPanel, VIEW_EVENT_INFO, PANEL_EVENT_INFO } from './constants';
import Main from './panels/Main';
import EventInfo from './panels/EventInfo';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: VIEW_ENTER,
      activePanels: Object.keys(panelsOrder).reduce((acc, viewId) => {
        acc[viewId] = panelsOrder[viewId][0];
        return acc;
      }, {}),

      ...panels.reduce((acc, panelId) => {
        acc[panelId] = {};
        return acc;
      }, {}),
    };

    console.log(this.state);
  }

  go = (panelId) => {
    if (!panels.includes(panelId)) {
      throw new Error('[App.go] panelId is not found in panels');
    }

    const viewId = getViewByPanel(panelId);

    this.setState({
      activeView: viewId,
      activePanels: {
        ...this.state.activePanels,
        [viewId]: panelId,
      },
    });
  };

  /**
   * Обновляет state панели
   *
   * @param {string} panelId id панели
   * @param {object} newState Объект стейта, который нужно смержить с текущим
   * @param {object} options
   * @param {function} next Колбек, который будет вызван после обновления стейта
   */
  update = (panelId, newState, options = {}, next) => {
    return new Promise((resolve) => {
      if (options.clean) {
        this.setState({ [panelId]: newState }, next || resolve);
      } else {
        this.setState((state) => ({
          [panelId]: {
            ...state[panelId],
            ...newState,
          },
        }), next || resolve);
      }
    });
  };

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <View id={VIEW_ENTER} activePanel={this.state.activePanels[VIEW_ENTER]}>
          <Panel id={PANEL_ENTER_START} theme="white">
            <EnterStart
              {...this.state[PANEL_ENTER_START]}
              update={this.update}
              go={this.go}
            />
          </Panel>

          <Panel id={PANEL_ENTER_FINISH}>
            <EnterFinish
              {...this.state[PANEL_ENTER_FINISH]}
              update={this.update}
              go={this.go}
            />
          </Panel>
        </View>

        <View id={VIEW_MAIN} activePanel={this.state.activePanels[VIEW_MAIN]}>
          <Panel id={PANEL_MAIN}>
            <Main
              {...this.state[PANEL_MAIN]}
              update={this.update}
              go={this.go}
            />
          </Panel>
        </View>

        <View id={VIEW_EVENT_INFO} activePanel={this.state.activePanels[VIEW_EVENT_INFO]}>
          <Panel id={PANEL_EVENT_INFO}>
            <EventInfo 
              {...this.state[PANEL_EVENT_INFO]}
              update={this.update}
              go={this.go}
            />
          </Panel>
        </View>
      </Root>
    );
  }
}
