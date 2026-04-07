# Esign tutorial

Esign is an *on-device signing* tool that allows you to install `.ipa` files (iOS application format) directly from your iPhone or iPad without needing a computer.

---

Before diving into the *sideloading* process, make sure you have the following three things ready on your iOS device:
1. Ensure **Esign** is already installed on your device.
2. You need a certificate file (usually in **.p12** format) along with the **.mobileprovision** file and the *password* for that certificate. *(You can obtain this certificate from the Certs menu).*
3. The raw file of the application you want to install. Make sure to download it from a safe and trusted source. I have provided some trusted source on the Links menu.

---

## Tutorial

### Step 1: Importing the Certificate to Esign
For Esign to work, you must import the "permission" or certificate first. There are two kinds of cert files for esign:

#### .esigncert
1. Save the `.esigncert` files you downloaded to the native iOS **Files** app.
2. Open the **Esign** app.
3. Go to Settings and select Import Resources.
##### esign/img1.png
4. Go to **File** tab, select the `.esigncert` file that you have imported and tap **Import Certificate Management**.
##### esign/img2.png
5. Done! You can continue to Step 2.

#### .p12 and .mobileprovision
1. Save the `.p12` and `.mobileprovision` files you downloaded to the native iOS **Files** app.
2. Open the **Esign** app.
3. Go to the **File** tab.
4. Go to **Settings** and select **Import Resources**.
5. Locate and select the `.p12` and `.mobileprovision` files from the Files app.
##### esign/img3.png
6. Once they appear in the Esign file list, tap the `.p12` file, then select **Import Certificate Management**.
7. A *pop-up* will appear asking for a password. **Enter the password** for the certificate, then tap OK.
##### esign/img4.png
8. Repeat the tapping process for the `.mobileprovision` file and select the import option if prompted.
9. To ensure the certificate is successfully installed, you can check it in the **Settings** tab > **Certificate Management**.
10. Done! You can continue to Step 2.

### Step 2: Importing the IPA File
Now, it's time to import the app you want to install into Esign.

1. Go back to the **File** tab in Esign.
2. Tap the three-dot/plus icon in the top right corner, select **Import**.
3. Find the **.ipa** file you want to install from your iOS Files app.
##### esign/img5.png
4. Once the **.ipa** file appears in the Esign file list, tap the file.
5. From the menu that appears, select **Import App Library**. This will move the file to the preparation queue.
##### esign/img6.png

### Step 3: Signing the App
This is the core process where Esign embeds your certificate into the app file so it can be installed by the iOS system.

1. Switch to the **Apps** tab in the bottom menu.
2. Select the **Unsigned** section.
3. Tap on the app you just imported.
4. Select the **Signature** option.
5. A configuration page will appear. In the **Certificate** section, make sure you select the certificate you imported in Step 1.
6. (Optional) On this page, you can also change the app name or *Bundle ID* if you want to install a duplicate app (cloning). If you're unsure, just leave it as *default*.
7. Tap the **Signature** button to start the process. Wait a few moments until the progress reaches 100%.
##### esign/img7.png
8. After the process reaches 100%, an automatic *pop-up* will usually appear. Select **Install**.
9. If the automatic *pop-up* doesn't appear, go back to the **Apps** tab, select the **Signed** section, tap the app, and select **Install**.
10. An iOS system warning will appear asking if you want to install the app. Tap **Install** once again.
11. Go to your iPhone's *Home Screen*. You will see the app currently downloading/installing.

---

> **Important Notes (Troubleshooting & Security):**
> * If you use free certificates that are widely available on the internet, Apple will frequently revoke them. If this happens, the Esign app and all *sideloaded* apps will immediately *force close* (crash), and you will need to find a new certificate to repeat the process from scratch.
> * Always be cautious when downloading `.ipa` files from the internet. Ensure they are from trusted community sources to avoid *malware* or *spyware* being injected into the app.