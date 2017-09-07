import React from "react";
import { StyleSheet, View, Image, Text, Picker } from "react-native";
import { Button } from "react-native-elements";
import DeviceInfo from "react-native-device-info";
import { Provider, connect } from "react-redux";
import { StackNavigator, NavigationActions } from "react-navigation";
import Hr from "react-native-hr";


const promisify = fn => (...args) =>
  new Promise((resolve, reject) => fn(...args, resolve, reject));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 8
  },
  display: {
    backgroundColor: "white"
  },
  title: {
    backgroundColor: "grey",
    padding: 8,
    color:'white'
  }, 
  textTitle: {
    fontSize: 32,
    color: 'black'
  },
  padder: {
    paddingBottom: 8
  },
  textText: {
    fontSize: 20,
    paddingBottom:16,
    color: 'grey'
  },
  textRed: {
    color: "red",
    fontWeight: 'bold'
  },
  textBolder: {
    color: "black",
    fontWeight: 'bold'
  }
});
// this is a new comment
const Outage = ({ ContactInfo, service, props }) => {
  debugger;
  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <View>
          <Text style={styles.textTitle}>Service Status</Text>
          <View style={styles.title}>
            <Text>
              Services:{" "}
              {ContactInfo.ContactInfo ? (
                ContactInfo.ContactInfo.Id
              ) : (
                "0003433302"
              )}
            </Text>
            <Text style={styles.title}>
              Account:{" "}
              {ContactInfo.ContactInfo ? ContactInfo.ContactInfo.Name : " "}
            </Text>
          </View>
          <Text style={styles.textText}>Service: <Text style={styles.textBolder}>Home broadband</Text></Text>
          <Text style={styles.textText}>
            Status: <Text style={styles.textRed}>Interrupted</Text>
          </Text>
          <Text style={styles.textText}>Restoring: <Text style={styles.textBolder}>ASAP</Text></Text>
          <Hr lineColor="#b3b3b3" textColor="steelblue" />
          <View style={styles.textText}>
          <View>
            <Text style={styles.textText}>Hi {ContactInfo.ContactInfo ? ContactInfo.ContactInfo.Name : " "}</Text>
            </View>
            <View>
            <Text style={styles.textText}>As your service is currently interrupted we have added free extra data
            to your account so you can use this mobile to connect your home
            devices to the internet.</Text>
            </View>
            <View>
            <Text style={styles.textText}>We aplogoies for the invconenience and are working to get the service restored as soon as poissible.</Text>
            </View>
          </View>
        </View>
      </View>
      <Button
          raised
          backgroundColor="#397af8"
          style={{ marginBottom: 8 }}
          onPress={service}
          title="Get help connecting to your mobile"
        />
    </View>
  );
};

Outage.navigationOptions = {
  title: "Outage"
};

const mapStateToProps = state => {
  return {
    ContactInfo: state.ContactInfo
  };
};

const mapDispatchToProps = dispatch => ({
  // onNavigateToService: () => {
  //   dispatch(NavigationActions.navigate({ routeName: "Service" }));
  // },
  service: () => dispatch(NavigationActions.navigate({ routeName: "Service" }))
});

export default connect(mapStateToProps, mapDispatchToProps)(Outage);
