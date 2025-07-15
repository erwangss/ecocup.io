 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 0712367ea8fece236073a425b72d48a746ac2687..bf2f3d2811a59eb9d67a6ca6749891a47266a740 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,5 @@
-# ecocup.io
+# ecocup.io
+
+This repository contains a simple React Native mobile application located in the `mobileapp` directory. The app shows a scrollable home page with recipe images, each taking about one-third of the screen height.
+
+See [`mobileapp/README.md`](mobileapp/README.md) for instructions on running the application.
 
EOF
)
