import React from 'react';
import { TouchableOpacity, ColorPropType, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import Avatar from './Avatar';
import getAvatarColor from '../utils/getAvatarColor';
import getInitials from '../utils/getInitials'

const AuthorRow = (props) => {
    const {fullname, linkText, onPressLinkText} = props
    return (
        <View style={styles.container}>
            <Avatar 
            size={35}
            initials={getInitials(fullname)}
            backgroundColor={getAvatarColor(fullname)}
            />
            <Text style={styles.text} numberOfLines={1}>
                {fullname}
            </Text>
            {
                !!linkText && (
                    <TouchableOpacity onPress={onPressLinkText}>
                        <Text numberOfLines={1}>{linkText}</Text>
                    </TouchableOpacity>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height:50,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    text: {
        flex: 1,
        marginHorizontal: 6
    }
})

AuthorRow.propTypes = {
    fullname:PropTypes.string.isRequired,
    linkText:PropTypes.string.isRequired,
    onPressLinkText:PropTypes.func.isRequired
}

export default AuthorRow