import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 15,
        fontStyle: 'italic',
    },
})

class MyText extends React.Component {
    render() {
        return (
            <Text style={styles.title}>{this.props.inText}</Text>
        )
    }
}

export default MyText;