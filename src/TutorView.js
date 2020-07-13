import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

export default class TutorView extends React.Component {
  static returnLayout() {
    console.log("returning Layout");
    return this.aboutUsLayout.y;
  }

  render() {
    return (
      <View
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          this.props.returnLayout(layout);
        }}
        style={styles.titleView}
      >
        <Text style={styles.titleText}>How We Work</Text>
        <Text style={styles.aboutUsText}>
          We send you tutoring sessions and topics and you can register to join
          any of the classes.
        </Text>
        <Image
          style={styles.img}
          source={require("./assets/img/scene-three.svg")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleView: {
    flex: 1,
    margin: 25,
    padding: 25,
    backgroundColor: "#764ABC",
    borderRadius: 50,
  },
  aboutUsText: {
    fontFamily: "Manrope",
    fontWeight: 600,
    fontSize: 0.035 * Dimensions.get("window").width,
    width: Dimensions.get("window").width / 2,
    //padding: Dimensions.get("window").width / 35,
    paddingLeft: Dimensions.get("window").width / 35,
    paddingTop: Dimensions.get("window").width / 35,
    color: "white",
  },
  img: {
    width: Dimensions.get("window").width / 2.3,
    height: ((Dimensions.get("window").width / 2.3) * 773) / 917.05,
    aspectRatio: 917.05 / 773,
    marginLeft: Dimensions.get("window").width / 30,
    marginBottom: Dimensions.get("window").width / 30,
    //marginTop: Dimensions.get("window").height / 10,
    alignSelf: "flex-end",
  },
  titleText: {
    fontFamily: "Manrope",
    fontWeight: 800,
    fontSize: 0.055 * Dimensions.get("window").width,
    paddingLeft: Dimensions.get("window").width / 35,
    paddingTop: Dimensions.get("window").width / 35,
    width: (Dimensions.get("window").width * 2) / 3,
    color: "white",
  },
});
