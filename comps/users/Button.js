import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';


class MyButton extends React.Component {
    render() {

        const styles = StyleSheet.create({
            main: {
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: 30,
                backgroundColor: "#F09C00",
                width: 100,
                height: 50,
                borderBottomWidth: 4,
                borderBottomColor: "#E66619",
                //borderEnd
            },
            text: {
                textAlign: 'center',
                fontSize: 20,
                color: 'white',
            },
        })

        return (
            <Pressable style={styles.main} onPress={this.props.onPress}>
                <Text style={styles.text}>{this.props.inText}</Text>
            </Pressable>
        )
    }

}

export default MyButton;