import React from 'react';
import { StyleSheet, Text } from 'react-native';

class MyText extends React.Component {
    render() {

        const styles = StyleSheet.create({
            title: {
                fontSize: 10,
                fontStyle: 'italic',
            },
        })

        return (
            <Text style={styles.title}>{this.props.inText}</Text>
        )
    }
}

export default MyText;