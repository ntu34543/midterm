import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

function ThirdScreen() {
    const [alignItems, setAlignItems] = useState("stretch");
  
    return (
      <PreviewLayout
        label="alignItems"
        selectedValue={alignItems}
        values={[
          "stretch",
          "flex-start",
          "flex-end",
          "center",
          "baseline",
        ]}
        setSelectedValue={setAlignItems}
      >
        <View
          style={[styles.box, { backgroundColor: "powderblue" }]}
        />
        <View
          style={[styles.box, { backgroundColor: "skyblue" }]}
        />
        <View
          style={[
            styles.box,
            {
              backgroundColor: "steelblue",
              width: "auto",
              minWidth: 50,
            },
          ]}
        />
      </PreviewLayout>
    );
  }
  
  const PreviewLayout = ({
    label,
    children,
    values,
    selectedValue,
    setSelectedValue,
  }) => (
    <View style={{ padding: 10, flex: 1 }}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.row}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[
              styles.button,
              selectedValue === value && styles.selected,
            ]}
          >
            <Text
              style={[
                styles.buttonLabel,
                selectedValue === value &&
                  styles.selectedLabel,
              ]}
            >
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={[
          styles.container,
          { [label]: selectedValue },
        ]}
      >
        {children}
      </View>
    </View>
  );

export default 