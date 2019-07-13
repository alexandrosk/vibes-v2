import React from 'react';
import {View, Image, FlatList,TouchableOpacity} from 'react-native';
import styles from '../styles';
import { Button, Block, Text, Card } from '../components';
import {theme} from '../constants';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHomeFeed } from '../actions/post';
import firebase from 'firebase';

class Home extends React.Component {
    componentDidMount() {
        this.props.getHomeFeed();
    }

    render() {
        if(this.props.post === null) return null;
        return (
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h1 bold>Browse</Text>
                    <Button onPress={() => navigation.navigate('Settings')}>
                    </Button>
                </Block>

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
                <Card shadow>
                    <Text style={{ color: theme.colors.black, fontWeight: 'bold' }}>{item.description}</Text>
                    <Text>{item.description}</Text>
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
