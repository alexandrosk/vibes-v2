import React from 'react';
import { Text, View, Button} from 'react-native';
import styles from '../styles';
import { bindActionCreators } from 'redux';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { add, subtract } from '../actions';

class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Text style={styles.text}>Props app {this.props.counter}</Text>
                <Button title="Add" onPress={() => this.props.add()}/>
                <Button title="Remove" onPress={() => this.props.subtract()}/>
            </View>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        add,
        subtract
    }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        counter : state
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Home)
