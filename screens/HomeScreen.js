
import React from "react";
import { ImageBackground, StyleSheet, Text, View, Linking} from "react-native";


const image = { uri: "https://i.mycdn.me/image?id=908910925319&t=50&plc=WEB&tkn=*BhDCJALYgLsJdJ5TrG1GdNiCcKs&fn=external_8" };

const HomeScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Bienvendo a:</Text>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
    </ImageBackground>
    <Text style={styles.texttwo}>Que es Mundo Crytpo?</Text>
    <Text style={styles.textthree}
        onPress={() => Linking.openURL('https://www.linkedin.com/in/andrey-nasonov-0b848120b/')}>
      Es un app creado por Andrey Nasonov  que nos brinda informacion sobre 
      los precios de Crytpo actual.
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
 
  },
  image: {
    flex: 1,
     width: 400,
     height: 400,

  },
  text: {
    color: "black",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
    
  },
    texttwo: {
    color: "#b0884b",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 62,
    textAlign: "center",
  },
   textthree: {
    color: "black",
     fontSize: 22,
    marginBottom: 82,
    textAlign: "center",
  }   
    
    
});

module.exports = HomeScreen;