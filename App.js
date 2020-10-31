import React from 'react';
import MyTitle from './comps/title/Title';
import MyText from './comps/text/Text';
import { View } from 'react-native';

class App extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'flex-end'}}>
                <MyTitle inText={"Статья"} />
                <MyText inText={"Основное содержание статьи — это текст, который можно дополнить изображениями и ссылками. \n\nПримечание. Все публикации Дзена должны соответствовать требованиям."} />
            </View>
        )
    }
}


export default App;
