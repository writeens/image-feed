import React from 'react';
import { ColorPropType, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Avatar = (props) => {
    const {size, backgroundColor, initials} = props

    const style = {
        width:size,
        height:size,
        borderRadius: size / 2,
        backgroundColor,
    }

    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>{initials}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color: 'white'
    }
})

Avatar.propTypes = {
    initials:PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    backgroundColor:ColorPropType.isRequired
}

export default Avatar;