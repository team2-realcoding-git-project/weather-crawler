import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity } from 'react-native';
import cityListApi from '../api/CityListApi';

export default class CityList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cities: [],
        };
    }

    componentDidMount() {
        cityListApi.fetchAvailableCities()
            .then(cities => {
                this.setState({
                    cities
                });
            });
    }

    onPressCity(item) {
        console.log('onPressCity =', item);
        this.props.navigation.navigate('Detail', {
            city: item
        });
    }

    renderItem(city) {
        return (
            <TouchableOpacity style={styles.item} onPress={() => this.onPressCity(city)}>
                <Text style={styles.text}>{city}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <FlatList style={styles.container}
                numColumns={3}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={item => item}
                data={this.state.cities}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    item: {
        flex: 1,
        height: 50,
        justifyContent: 'center',
    },
    text: {
        fontSize: 14,
        textAlign: 'center',
    }
});