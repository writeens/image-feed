import React, { useState } from 'react';
import { 
    TouchableOpacity, 
    ColorPropType, 
    StyleSheet, 
    Text, 
    View, 
    Image,
    ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';

import AuthorRow from './AuthorRow';

const Card = (props) => {
    const {fullname, image, linkText, onPressLinkText} = props;

    const [loading, setLoading] = useState(true)

    // console.log(StyleSheet.absoluteFill)
    const handleLoad = () => {
        setLoading(false)
    }
    return (
        <View>
            <AuthorRow
                fullname={fullname}
                linkText={linkText}
                onPressLinkText={onPressLinkText}    
            />
            <View style={styles.image}>
            {
                loading && (
                    <ActivityIndicator 
                    style={StyleSheet.absoluteFill} 
                    size={'large'} />
                )
            }
                <Image 
                style={StyleSheet.absoluteFill} 
                source={image} 
                onLoad={handleLoad}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
    }
})

Card.propTypes = {
    fullname: PropTypes.string.isRequired,
    image: Image.propTypes.source.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func,
}

Card.defaultProps = {
    linkText: '',
    onPressLinkText: () => {}
}

export default Card;