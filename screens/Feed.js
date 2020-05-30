import React, {useState, useEffect, Fragment} from 'react';
import { ActivityIndicator, Text, ViewPropTypes, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';

import { fetchImages } from '../utils/api';
import CardList from '../components/CardList';

const Feed = (props) => {

    const { style, commentsForItem, onPressComments } = props

    const [isMounted, setIsMounted] = useState(false)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [items, setItems] = useState([])

    useEffect(() => {
        setIsMounted(true)
        const getData = async () => {
            try {
                const items = await fetchImages();
                if(isMounted){
                    setLoading(false)
                    setItems(items)
                }
            } catch (e) {
                if(isMounted){
                    setLoading(false)
                    setError(true)
                }
            }
        }
        getData()
        return () => {
            console.log("isUnmounting")
            setIsMounted(false)
        }
    }, [isMounted])

    const generateRender = () => {
        if(loading){
            return <ActivityIndicator size="large" />
        }
        if(error){
            return <Text>Error...</Text>
        }
        return (
            <SafeAreaView style={style}>
                <CardList 
                    items={items} 
                    commentsForItem={commentsForItem}
                    onPressComments={onPressComments}
                    />
            </SafeAreaView>
        )
    }

    return (
        <Fragment>
            {generateRender()}
        </Fragment>
    )
}

Feed.propTypes = {
    style: ViewPropTypes.style,
    commentsForItem:PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
    onPressComments: PropTypes.func.isRequired,
}

Feed.defaultProps = {
    style: null,
}

export default Feed;