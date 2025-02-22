export const VIEW_ENTER = 'enter';
export const VIEW_MAIN = 'main';
export const VIEW_EVENT_INFO = 'event_info';
export const VIEW_EVENT_SENT = 'event_sent';

export const PANEL_ENTER_START = 'enter_start';
export const PANEL_ENTER_FINISH = 'enter_finish';
export const PANEL_MAIN = 'main';
export const PANEL_EVENT_INFO = 'event_info';
export const PANEL_EVENT_SENT = 'event_sent';

export const TAB_EVENTS = 'events';
export const TAB_WORK = 'work';
export const TAB_MAP = 'map';
export const TAB_ACCOUNT = 'account';

export const panelsOrder = {
  [VIEW_ENTER]: [PANEL_ENTER_START, PANEL_ENTER_FINISH],
  [VIEW_MAIN]: [PANEL_MAIN],
  [VIEW_EVENT_INFO]: [PANEL_EVENT_INFO],
  [VIEW_EVENT_SENT]: [PANEL_EVENT_SENT]
};

export const panels = [
  PANEL_ENTER_START,
  PANEL_ENTER_FINISH,
  PANEL_MAIN,
  PANEL_EVENT_INFO,
  PANEL_EVENT_SENT
];

export const getViewByPanel = (panelId) => {
  return Object.keys(panelsOrder).find((viewName) => panelsOrder[viewName].indexOf(panelId) >= 0);
};
