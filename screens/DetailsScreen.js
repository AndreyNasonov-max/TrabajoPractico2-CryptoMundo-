import {useEffect, useState} from 'react';
import React from "react";
import { ActivityIndicator, StyleSheet, Text, View} from "react-native";

export default function DetailsScreen() {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(res => res.json())
      .then(
        result => {
          setResponse(result);
          setIsLoading(false);
        },
        error => {
          setError(error);
          setIsLoading(false);
        },
      );
  }, []);

  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }

    console.log(response);
    return <Text style={styles.texttwo}>Bitcoin (USD): {response['bpi']['USD'].rate}</Text>;
  };

  return (
     <View style={styles.container}>
      {getContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee8a6',
    alignItems: 'center',
    justifyContent: 'center',
  },
    texttwo: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 62,
    textAlign: "center",
  },

});

module.exports = DetailsScreen;