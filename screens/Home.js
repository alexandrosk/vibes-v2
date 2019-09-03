import React from 'react';
import {View, Image, FlatList,TouchableOpacity} from 'react-native';
import styles from '../styles';
import { Button, Block, Text, Card } from '../components';
import {theme} from '../constants';

import {Ionicons} from '@expo/vector-icons';

import {SafeAreaView} from 'react-navigation';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getHomeFeed } from '../actions/post';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            refreshing: false
        }
    }
    componentDidMount() {
        this.props.getHomeFeed();
    }

    handleRefresh = () => {
        this.setState({
            refreshing: true,
        }, () => {
            alert('ALL GOOD YO');
            this.setState({refreshing: false});
        })
    };

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
                    scrollEnabled
                    showsHorizontalScrollIndicator={false}
                    decelerationRate={'normal'}
                    onRefresh={this.handleRefresh}
                    refreshing={this.state.refreshing}
                    keyExtractor={(item, index) => `${index}`}
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
                <Card color={theme.colors.secondBlack} style={{marginHorizontal:theme.sizes.horizontal}}>
                    <Block style={[styles.flexRow,styles.center]}>
                        <Block style={[styles.flexRow,styles.center]}>
                            <Image style={[styles.avatar, styles.shadow]} source={{ uri: item.photo }} />
                            <Text style={{ color: theme.colors.gray, fontWeight: 'bold',paddingLeft: theme.sizes.padding/2 }}>{item.username}</Text>
                        </Block>
                        <Ionicons style={{ color: theme.colors.gray, paddingVertical: theme.sizes.horizontal }} name='ios-flag' size={20}/>
                    </Block>
                    <Text style={{flexDirection:'row' }}>{item.description}</Text>
                    <Block style={{borderBottomColor: theme.colors.gray2, borderBottomWidth: 0.5, marginVertical: 15}}/>
                    <Block style={[styles.flexRow]}>
                        <Ionicons style={{ color: theme.colors.gray, padding: theme.sizes.horizontalHalf,paddingLeft: 0 }} name='ios-heart-empty' size={20}/>
                        <Ionicons style={{ color: theme.colors.gray, padding: theme.sizes.horizontalHalf }} name='ios-chatbubbles' size={20}/>
                        <Ionicons style={{ color: theme.colors.gray, padding: theme.sizes.horizontalHalf }} name='ios-send' size={20}/>
                    </Block>
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
