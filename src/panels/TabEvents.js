import React, { Component, Fragment, FormLayout, Select, TabComponent, PanelHeader } from 'react';
import PropTypes from 'prop-types';
import { PANEL_EVENT_INFO } from '../constants';

export default class TabEvents extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };

  openEvent = (e) => {
    this.props.update(PANEL_EVENT_INFO, {
      eventName: e.currentTarget.getAttribute('data-event-name'),
    });

    this.props.go(PANEL_EVENT_INFO);
  };

  render() {
    return (
      <Fragment>


        <div data-event-name={'ПОЧЕМУ?'} onClick={this.openEvent}>
          <div className="event-main">
            <div className="event-main-into">
              <h2>Событие 1</h2>
              <p>Открытая коллекция Политехнического музея (Москва, м. Текстильщики,
                Волгоградский проспект, д. 42, корп. 5, 2 этаж, вход через КПП №3)
                </p>
                <span>Переноска оборудования</span>
                <div>70/100</div>
                <span>Встреча гостей</span>
                <div>5/10</div>
                <p>
                  Почему опасно перемещаться во времени? Почему мы забываем сны? Почему в носу есть дырки?
                  Почему хомяки боятся летать в космос поодиночке?…
                </p>
              </div>
            </div>
        </div>

        <div data-event-name={'Событие 2'} onClick={this.openEvent}>
        <div className="event-main">
          <div className="event-main-into">
            <h2>Событие 2</h2>
            <p>Открытая коллекция Политехнического музея (Москва, м. Текстильщики,
              Волгоградский проспект, д. 42, корп. 5, 2 этаж, вход через КПП №3)
              </p>
              <span>Переноска оборудования</span>
              <div>70/100</div>
              <span>Встреча гостей</span>
              <div>5/10</div>
              <p>
                Почему опасно перемещаться во времени? Почему мы забываем сны? Почему в носу есть дырки?
                Почему хомяки боятся летать в космос поодиночке?…
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
