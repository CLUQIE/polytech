import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { PanelHeader, FormLayout, Input, Button, PanelHeaderBack } from '@vkontakte/vkui';
import { PANEL_MAIN } from '../constants';
import { PANEL_ENTER_FINISH } from '../constants';
import { PANEL_EVENT_SENT } from '../constants';


export default class EventInfo extends Component {
  static propTypes = {
    eventName: PropTypes.string,

    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };

  render() {
    return (
      <Fragment>
        <PanelHeader
          left={<PanelHeaderBack onClick={() => this.props.go(PANEL_MAIN)} />}
        >ПОЛИТЕХ
        </PanelHeader>
        <div className="eventInfo">
          <div className="eventPhoto">Фото</div>
          <h2>ВЫСТАВКА {this.props.eventName}</h2>
          <p>Открытая коллекция Политехнического музея (Москва, м. Текстильщики,
            Волгоградский проспект, д. 42, корп. 5, 2 этаж, вход через КПП №3)
          </p>
          <h3>Кого мы набираем?</h3>
          <span>Переноска оборудования</span>
          <div>70/100</div>
          <span>Встреча гостей</span>
          <div>5/10</div>
          <p>- Почему опасно перемещаться во времени? - Почему мы забываем сны? - Почему в носу есть дырки? - Почему хомяки боятся летать в космос поодиночке? Попробуйте представить, как могут выглядеть ответы на эти вопросы. Если не получается, приходите на выставку «Почему?» в Открытую коллекцию Политеха. Будем искать образы и ответы вместе с юными художниками и мастерами творческой «Студии ДЭЗ №5». Целый год они сомневались и удивлялись. И теперь вы можете увидеть скульптурные композиции-вопросы, которые участники выставки буквально «встроили» в ряды гигантских электронных вычислительных машин, исторических автомобилей, макетов энергетических установок и телефонных аппаратов. Детский взгляд позволяет по-новому понять и старые вещи, и современное искусство.</p>
        </div>

        <Button onClick={() => this.props.go(PANEL_EVENT_SENT)}>Подать заявку</Button>
      </Fragment>
    );
  }
}
