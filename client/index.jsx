//React!
import React from 'react';
import ReactDOM from 'react-dom';


//Router and History
import { HashRouter as Router } from 'react-router-dom';

//I18N Language
import i18nEnglish from './i18n/en.json';
import { addLocaleData, IntlProvider } from 'react-intl'
let i18nConfig = {
    locale: 'en',
    messages: i18nEnglish
};

// Components
import App from './components/App.jsx';

ReactDOM.render(
        <IntlProvider locale={i18nConfig.locale} messages={i18nConfig.messages}>
            <Router>
                <App/>
            </Router>
        </IntlProvider>
, document.getElementById('root'));
