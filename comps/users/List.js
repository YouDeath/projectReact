import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class MyList extends React.Component {
    render() {

        const styles = StyleSheet.create({
            circle: {
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                fontSize: 30,
                color: 'white',
                backgroundColor: "#F09C00",
                borderRadius: 20,
                width: 40,
                height: 40,
                margin: 5,
            },
            circleText: {
                color: "white",
                textAlign: 'center',
                fontSize: 25,
            },
            text: {
                //textAlign: 'center',
                fontSize: 25,
            },
            main: {
                flexDirection: 'row',
                alignItems: 'center',

            }
        })

        return (
            <View style={styles.main}>
                <View style={styles.circle}><Text style={styles.circleText}>{this.props.inTextIndex+1}</Text></View>
                <Text style={styles.text}>{this.props.inText}</Text>
            </View>
        )
    }
}

export default MyList;