// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import SendbirdChat from '@sendbird/chat';
import { GroupChannelModule } from '@sendbird/chat/groupChannel';
import { message } from 'antd';
import { ConfigProvider } from 'antd';
function App() {
    // console.log(process.env);
    const { REACT_APP_ID, REACT_APP_ACCESS_TOKEN, REACT_APP_USER_ID, REACT_APP_NICKNAME } =
        process.env;
    const sb = SendbirdChat.init({
        appId: REACT_APP_ID,
        modules: [new GroupChannelModule()],
        token: '22fa8ed3271e9747e28febc618863a0801324697'
    });
    console.log(sb);
    sb.connect(REACT_APP_USER_ID, REACT_APP_ACCESS_TOKEN).then(res => {
        console.log(res);
        if (res.isActive) {
            message.success('Welcome Back');
        } else {
            message.error('Sendbird 连接失败: ');
        }
    });
    return (
        <ConfigProvider theme={{
            token: {
              /* 这里是你的全局 token */
              colorPrimary:'#5955B3'
            },
          }}>
            <ThemeProvider>
                <SendbirdProvider
                    appId={REACT_APP_ID}
                    userId={REACT_APP_USER_ID}
                    nickname={REACT_APP_NICKNAME}
                    accessToken={REACT_APP_ACCESS_TOKEN}>
                    {' '}
                    <Router />{' '}
                </SendbirdProvider>
            </ThemeProvider>
        </ConfigProvider>
    );
}

export default App;
