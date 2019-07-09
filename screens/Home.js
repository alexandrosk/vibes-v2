import React from 'react';
import { Text, View, Image, FlatList} from 'react-native';
import styles from '../styles';
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
            <View style={styles.container}>
                <FlatList
                data={this.props.post.feed}
                renderItem={({item})=> (
                    <View style={styles.button}>
                        <Text style={styles.text}>{item.description}</Text>
                    </View>
                )}>
                </FlatList>
            </View>
        );
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
