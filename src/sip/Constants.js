export const APPLICATIONS = 'Подписи';
export const CANCEL = 'Отменить';
export const LOGIN = 'Логин';
export const ENTER = 'Введите';
export const ID = 'id';
export const EDIT_A = 'Редактировние';
export const DELETE = 'Удалить';
export const SAVE = 'Сохранить';
export const OPERATORS = "Операторы";
export const FOR = "для";
export const CLOSE = "Закрыть";
export const APPLY = "Применить";
export const LOADING_DATA = 'Загрузка данных';
export const REGISTRATION_A = "Регистрации";;


//TODO:Добавить параметры
const domen = '';
const port = '';
const file = '';
const userParam = '';
const https = 'https://';
const actionStr = '?action=';


let newVar = {
    get_sip :'get_sip',
    set_sip :'set_sip',
};
export const OBJ_ACTION_REQUEST = newVar;

export const getURL = (action) => `${https}${domen}:${port}/${file}${actionStr}${action}&${userParam}`;

export const DELAY_REQUEST_ERROR_COUNT = 5000;
export const MAX_DELAY_REQUEST_ERROR_COUNT = 120000;
export const ERROR_UNKNOWN = "Ошибка соединения с сервером. Ведуться работы";

export const ERR_REQUEST_MESSAGE = "Произошла ошибка.Ответ сервера не получен";

export const OBJ_SETTINGS_PROPS = {
    '0': {id:'0',title:'0'},
    '1': {id:'1',title:'1'},
    '2': {id:'2',title:'2'},
    '3': {id:'3',title:'3'},
    '4': {id:'4',title:'4'},
    '5': {id:'5',title:'5'},
    'billsec': {id:'billsec',title:'billsec'},
    'calldate': {id:'calldate',title:'calldate'},
    'disposition': {id:'disposition',title:'disposition'},
    'dst': {id:'dst',title:'dst'},
    'duration': {id:'duration',title:'duration'},
    'src': {id:'src',title:'src'},
};

export const NUMBERS = 'Номера';