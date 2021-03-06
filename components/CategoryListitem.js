import react from "react";
import {
Image,
Text,
View,
StyleSheet
} from 'react-native';
import SkiiImage from '../assets/skii.png';
export default function CategoryListItem(props) {
    return (    
    <View style={styles.container}>
        <Text style={styles.title}> CategoryListItem</Text>
        <Image style={styles.categoryImage} source={SkiiImage}/>
    </View>
    );
}

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 40,         
        backgroundColor: 'green',
       // shadowColor: '#000',
      //  shadowOpacity: 0.3,
     //   shadowRadius : 50,
     //   shadowOffset: {width: 0, height: 0},
       marginBottom: 16,
      
    },  
categoryImage: {
    width: 64,
    height: 64
},  

title: {
    textTransform: 'uppercase',
    marginBottom: 8,
    fontWeight: '700'
}

})
