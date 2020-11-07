import React from 'react';
import MyTitle from './comps/title/Title';
import MyText from './comps/text/Text';
import MyList from './comps/users/List';
import MyAdd from './comps/users/Add';
import { View, Text, FlatList } from 'react-native';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            now: "",
            list: [],
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'flex-start' }}>
                <MyAdd onChangeText={this.onChangeText.bind(this)} onPress={this.onPress.bind(this)} value={this.state.now}/>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item, index, separators }) => (
                        <MyList inText={item} inTextIndex={index} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }

    onChangeText(text) {
        this.setState({ now: text });
    }

    onPress() {
        console.log(this.state);
        let list = this.state.list;
        list.push(this.state.now);
        this.setState({ list, now: "" });
    }

}


export default App;
