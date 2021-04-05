import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Productos() {
    const navigation = useNavigation();
    return (
        <View>
            <Text> Productos</Text>
            <Button title="Abrir menu" onPress={()=> navigation.toggleDrawer()} />
        </View>
    );
}