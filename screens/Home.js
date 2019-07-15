import React from 'react';
import {View, Image, FlatList,TouchableOpacity} from 'react-native';
import styles from '../styles';
import { Button, Block, Text, Card } from '../components';
import {theme} from '../constants';

import {SafeAreaView} from 'react-navigation';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHomeFeed } from '../actions/post';
import firebase from 'firebase';

class Home extends React.Component {
    componentDidMount() {
        this.props.getHomeFeed();
    }

    render() {
        if(this.props.post === null) return (
            <Block style={styles.login}>
            </Block>
        );
        return (
            <Block style={styles.login}>
                <Block flex={false} row center space="between"/>
                <FlatList
                    vertical
                    pagingEnabled
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={0}
                    scrollEventThrottle={16}
                    keyExtractor={(item, index) => `${item.id}`}
                    data={this.props.post.feed}
                    renderItem={({ item, index }) => this.renderPost(item, index)}
                >
                </FlatList>
            </Block>
        );
    }
    renderPost = (item, index) => {
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={() => {}}>
                <Card style={{marginHorizontal:theme.sizes.horizontal,flex: 0}} color={theme.colors.secondBlack}>
                    <Image style={[styles.avatar, styles.shadow]} source={{ uri: 'https://lastfm-img2.akamaized.net/i/u/270x205/a006d64e88fbcf8576957b2dbe7065d6.jpg' }} />
                    <Text style={{ color: theme.colors.black, fontWeight: 'bold',paddingLeft:theme.sizes.base * 3 }}>{item.description}</Text>
                    <Text style={{ paddingLeft:theme.sizes.base * 3 }}>{item.description}</Text>
                </Card>
            </TouchableOpacity>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        getHomeFeed
    }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        user : state.user,
        post: state.post
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
