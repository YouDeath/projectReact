import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
    },
})

class MyTitle extends React.Component {
    render() {
        return (
            <Text style={styles.title}>{this.props.inText}</Text>
        )
    }
}

export default MyTitle;