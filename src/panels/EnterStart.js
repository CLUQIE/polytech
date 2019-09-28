import React, { Component, Fragment } from 'react';
import axios from 'axios';



import PropTypes from 'prop-types';
import { PanelHeader, FormLayout, Input, Button, Select } from '@vkontakte/vkui';
import { PANEL_ENTER_FINISH } from '../constants';
import { TAB_EVENTS, TAB_WORK, TAB_MAP, TAB_ACCOUNT, PANEL_MAIN } from '../constants';
export default class EnterStart extends Component {
  static propTypes = {
    update: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
  };


//const axios=require("axios").default;

  componentDidMount () {
    var profil;
      axios({
          url: 'http://demo12.echo.vkhackathon.com:8080/volunteer/users/login',
          timeout: 1000,
          
          method: 'GET',

        }).then(response =>profil=response);




        if(profil["success"] && false){
            console.log(profil['user']);

        }
        else{

          this.props.go(PANEL_MAIN);

        }
      }


  render() {
    return (
      <Fragment>
        <PanelHeader>ПОЛИТЕХ</PanelHeader>
        <FormLayout>
          <Input top="Имя" />
          <Input top="Фамилия" />
          <Input top="Отчество" />
          <Select top="Дата рождения" placeholder="День" name="purpose">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>
                        <option value="19">19</option>
                        <option value="20">20</option>
                        <option value="21">21</option>
                        <option value="22">22</option>
                        <option value="23">23</option>
                        <option value="24">24</option>
                        <option value="25">25</option>
                        <option value="26">26</option>
                        <option value="27">27</option>
                        <option value="28">28</option>
                        <option value="29">29</option>
                        <option value="30">30</option>
                        <option value="31">31</option>
                </Select>
                <Select  placeholder="Месяц">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                       <option value="7">7</option>
                       <option value="8">8</option>
                       <option value="9">9</option>
                       <option value="10">10</option>
                       <option value="11">11</option>
                       <option value="12">12</option>
                </Select>
                <Select  placeholder="Год">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                       <option value="6">6</option>
                       <option value="7">7</option>
                       <option value="8">8</option>
                       <option value="9">9</option>
                       <option value="10">10</option>
                       <option value="11">11</option>
                       <option value="12">12</option>

                </Select>


          <Button onClick={() => this.props.go(PANEL_ENTER_FINISH)}>Далее</Button>
        </FormLayout>
      </Fragment>
    );
  }
}
