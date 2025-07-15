 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/mobileapp/README.md
index 0000000000000000000000000000000000000000..3d8c385a3134988b5c17771c8e6bcd000f11a035 100644
--- a//dev/null
+++ b/mobileapp/README.md
@@ -0,0 +1,17 @@
+# Mobile App
+
+This is a simple React Native (Expo) application that displays a scrolling list of recipes on the home page. Each recipe occupies roughly one-third of the screen height and shows an image with a title.
+
+## Running the App
+
+1. Install dependencies (requires internet access):
+   ```bash
+   npm install
+   ```
+2. Start the Expo development server:
+   ```bash
+   npm start
+   ```
+3. Follow the on-screen instructions to open the app on a device or emulator.
+
+> **Note**: In this environment, package installation may not work due to network restrictions.
 
EOF
)
