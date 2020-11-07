import React from 'react';
import MyButton from './Button';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class MyAdd extends React.Component {
    render() {

        const styles = StyleSheet.create({
            main: {
                flexDirection: 'row',
            }
        })

        return (
            <View style={styles.main}>
                <TextInput
                    style={{ height: 50, fontSize: 15, borderBottomColor: "#E66619", borderRightColor: "#E66619", borderBottomWidth: 4, borderRightWidth: 2, flex: 1, color: 'white', backgroundColor: "#F09C00" }}
                    onChangeText={text => this.props.onChangeText(text)}
                    value={this.props.value}
                />
                <MyButton
                    onPress={this.props.onPress}
                    inText={"Add"}
                />
            </View>
        )
    }
}

export default MyAdd;