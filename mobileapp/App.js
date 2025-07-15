 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/mobileapp/App.js
index 0000000000000000000000000000000000000000..7a90f3afd0e0d7f663592162f561c3436e730c62 100644
--- a//dev/null
+++ b/mobileapp/App.js
@@ -0,0 +1,53 @@
+import React from 'react';
+import { SafeAreaView, View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
+
+const recipes = [
+  { id: '1', title: 'Recette 1', image: { uri: 'https://placekitten.com/800/400' } },
+  { id: '2', title: 'Recette 2', image: { uri: 'https://placekitten.com/801/400' } },
+  { id: '3', title: 'Recette 3', image: { uri: 'https://placekitten.com/802/400' } }
+];
+
+const ITEM_HEIGHT = Dimensions.get('window').height / 3;
+
+export default function App() {
+  const renderItem = ({ item }) => (
+    <View style={[styles.item, { height: ITEM_HEIGHT }]}> 
+      <Image source={item.image} style={styles.image} />
+      <Text style={styles.title}>{item.title}</Text>
+    </View>
+  );
+
+  return (
+    <SafeAreaView style={styles.container}>
+      <FlatList
+        data={recipes}
+        renderItem={renderItem}
+        keyExtractor={(item) => item.id}
+        snapToInterval={ITEM_HEIGHT}
+        decelerationRate="fast"
+        showsVerticalScrollIndicator={false}
+      />
+    </SafeAreaView>
+  );
+}
+
+const styles = StyleSheet.create({
+  container: {
+    flex: 1
+  },
+  item: {
+    width: '100%',
+    justifyContent: 'center',
+    alignItems: 'center'
+  },
+  image: {
+    width: '100%',
+    height: '80%',
+    resizeMode: 'cover'
+  },
+  title: {
+    fontSize: 18,
+    marginTop: 5,
+    textAlign: 'center'
+  }
+});
 
EOF
)
