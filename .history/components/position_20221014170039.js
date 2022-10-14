import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

function SecondScreen() {
    const [position, setPosition] = useState('relative');
    const values = ['relative', 'absolute'];
  
    return (
      <View style={{padding: 10, flex: 1}}>
        <View style={styles.row}>
          {values.map(value => (
            <TouchableOpacity
              key={value}
              onPress={() => setPosition(value)}
              style={[styles.button, position === value && styles.selected]}>
              <Text
                style={[
                  styles.buttonLabel,
                  position === value && styles.selectedLabel,
                ]}>
                {value}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.container}>
          <View
            style={[
              styles.box,
              {
                top: 25,
                left: 25,
                position,
                backgroundColor: 'powderblue',
              },
            ]}
          />
          <View
            style={[
              styles.box,
              {
                top: 50,
                left: 50,
                position,
                backgroundColor: 'skyblue',
              },
            ]}
          />
          <View
            style={[
              styles.box,
              {
                top: 75,
                left: 75,
                position,
                backgroundColor: 'steelblue',
              },
            ]}
          />
        </View>
      </View>
    );
  }

export default SecondScreen;