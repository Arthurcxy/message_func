// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import SendbirdChat from '@sendbird/chat';
import { GroupChannelModule } from '@sendbird/chat/groupChannel';
function App() {
    console.log(process.env);
    const { REACT_APP_ID, REACT_APP_ACCESS_TOKEN, REACT_APP_USER_ID, REACT_APP_NICKNAME } =
        process.env;

    const sb = SendbirdChat.init({
        appId: REACT_APP_ID,
        modules: [new GroupChannelModule()]
    });
    console.log(sb);
    sb.connect(REACT_APP_USER_ID, REACT_APP_ACCESS_TOKEN);
    return (
        <ThemeProvider>
            <SendbirdProvider
                appId={REACT_APP_ID}
                userId={REACT_APP_USER_ID}
                nickname={REACT_APP_NICKNAME}
                accessToken={REACT_APP_ACCESS_TOKEN}>
                {' '}
                <Router  />{' '}
            </SendbirdProvider>
        </ThemeProvider>
    );
}

export default App;
