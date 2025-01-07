import { WebView } from "react-native-webview";
import Constants from "expo-constants";
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      {loading && (
        <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
      )}
      <WebView
        style={styles.webView}
        source={{ uri: "https://schoolexcel.tech/whiteboard/" }}
        onLoad={() => setLoading(false)}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  webView: {
    flex: 1,
  },
});
