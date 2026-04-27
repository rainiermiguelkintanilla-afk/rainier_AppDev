import { Text, View, Alert } from 'react-native';
import CustomButton from './CustomButton';

const CustomCard = ({ label }) => {
    return (
        <View 
            style={{
                backgroundColor: 'white',
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
                marginBottom: 20,
            }}
        >
            <Text classname="card-title">{label}</Text>
            <CustomButton
                label="Display Text"
                onPress={() => {
                    Alert.alert('Uli Nako Sir!!!');
                }}
            />
        </View>
    );
};

export default CustomWerpa;