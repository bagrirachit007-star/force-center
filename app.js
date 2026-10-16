<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>FORCE CENTER | Login</title>

    <style>

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }

        body {
            min-height: 100vh;
            background: #0b0b0b;
            color: white;

            display: flex;
            justify-content: center;
            align-items: center;

            padding: 20px;
        }

        .login-container {
            width: 100%;
            max-width: 460px;
        }

        .login-box {
            background: rgba(25, 25, 25, 0.96);

            border: 1px solid #333;

            border-radius: 20px;

            padding: 42px 35px;

            box-shadow:
                0 20px 50px rgba(0, 0, 0, 0.5);
        }

        .logo {
            text-align: center;

            font-size: 40px;

            font-weight: 900;

            letter-spacing: 3px;

            margin-bottom: 12px;
        }

        .subtitle {
            text-align: center;

            color: #aaa;

            font-size: 17px;

            margin-bottom: 45px;
        }

        .field {
            margin-bottom: 24px;
        }

        .field label {
            display: block;

            font-size: 17px;

            margin-bottom: 10px;

            color: #ddd;
        }

        .field input {
            width: 100%;

            height: 60px;

            background: #111;

            border: 1px solid #444;

            border-radius: 13px;

            outline: none;

            padding: 0 19px;

            color: white;

            font-size: 17px;

            transition: 0.2s;
        }

        .field input:focus {
            border-color: #777;

            box-shadow:
                0 0 0 2px rgba(255,255,255,0.05);
        }

        .login-button {
            width: 100%;

            height: 61px;

            margin-top: 8px;

            border: none;

            border-radius: 13px;

            background: white;

            color: black;

            font-size: 20px;

            font-weight: bold;

            cursor: pointer;

            transition: 0.2s;
        }

        .login-button:hover {
            background: #e7e7e7;
        }

        .login-button:disabled {
            opacity: 0.6;

            cursor: not-allowed;
        }

        #message {
            min-height: 25px;

            text-align: center;

            margin-top: 20px;

            font-size: 15px;

            color: #aaa;
        }

        .footer {
            text-align: center;

            color: #666;

            font-size: 13px;

            margin-top: 55px;
        }

        @media (max-width: 520px) {

            .login-box {
                padding: 35px 22px;
            }

            .logo {
                font-size: 32px;
            }

        }

    </style>

</head>


<body>


    <div class="login-container">

        <div class="login-box">

            <div class="logo">
                RORCE CENTER
            </div>

            <div class="subtitle">
                Team Management System
            </div>


            <!-- COMPANY CODE -->

            <div class="field">

                <label>
                    Company Code
                </label>

                <input
                    type="text"
                    id="companyCode"
                    placeholder="Enter company code"
                    autocomplete="off"
                >

            </div>


            <!-- USER ID -->

            <div class="field">

                <label>
                    Gmail / User ID
                </label>

                <input
                    type="email"
                    id="userId"
                    placeholder="Enter your Gmail"
                    autocomplete="username"
                >

            </div>


            <!-- PASSWORD -->

            <div class="field">

                <label>
                    Password
                </label>

                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    autocomplete="current-password"
                >

            </div>


            <!-- LOGIN BUTTON -->

            <button
                type="button"
                id="loginButton"
                class="login-button"
            >
                LOGIN
            </button>


            <!-- MESSAGE -->

            <div id="message">
            </div>


            <div class="footer">
                FORCE CENTER
            </div>

        </div>

    </div>



    <!-- ==========================================
         FIREBASE LOGIN
         ========================================== -->

    <script type="module">

        import { initializeApp }
        from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";


        import {
            getAuth,
            signInWithEmailAndPassword
        }
        from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";



        /* ==========================================
           FIREBASE CONFIG
           ========================================== */

        const firebaseConfig = {

            apiKey:
                "AIzaSyCOTV3I0bJj1H3Jc4CU-bb-WY3Q3947bSY",

            authDomain:
                "team-app-c7b71.firebaseapp.com",

            projectId:
                "team-app-c7b71",

            storageBucket:
                "team-app-c7b71.firebasestorage.app",

            messagingSenderId:
                "697657748554",

            appId:
                "1:697657748554:web:f20282dd2f537cc5b70ab3"

        };



        /* ==========================================
           START FIREBASE
           ========================================== */

        const app =
            initializeApp(firebaseConfig);

        const auth =
            getAuth(app);



        /* ==========================================
           GET HTML ELEMENTS
           ========================================== */

        const loginButton =
            document.getElementById("loginButton");

        const message =
            document.getElementById("message");

        const companyCode =
            document.getElementById("companyCode");

        const userId =
            document.getElementById("userId");

        const password =
            document.getElementById("password");



        /* ==========================================
           SYSTEM READY
           ========================================== */

        message.textContent =
            "System ready.";

        message.style.color =
            "lightgreen";



        /* ==========================================
           LOGIN FUNCTION
           ========================================== */

        loginButton.addEventListener(
            "click",
            async function () {

                const code =
                    companyCode.value.trim();

                const email =
                    userId.value.trim();

                const pass =
                    password.value;


                /* -------------------------------
                   CHECK EMPTY FIELDS
                   ------------------------------- */

                if (
                    !code ||
                    !email ||
                    !pass
                ) {

                    message.textContent =
                        "Please fill all fields.";

                    message.style.color =
                        "#ff5555";

                    return;
                }



                /* -------------------------------
                   CHECK COMPANY CODE
                   ------------------------------- */

                if (code !== "BFX2026") {

                    message.textContent =
                        "Wrong Company Code.";

                    message.style.color =
                        "#ff5555";

                    return;
                }



                /* -------------------------------
                   LOGIN START
                   ------------------------------- */

                loginButton.disabled =
                    true;

                loginButton.textContent =
                    "LOGGING IN...";

                message.textContent =
                    "Logging in...";

                message.style.color =
                    "white";



                try {


                    /* ---------------------------
                       FIREBASE LOGIN
                       --------------------------- */

                    await signInWithEmailAndPassword(
                        auth,
                        email,
                        pass
                    );



                    /* ---------------------------
                       SUCCESS
                       --------------------------- */

                    message.textContent =
                        "Login successful!";

                    message.style.color =
                        "lightgreen";



                    loginButton.textContent =
                        "SUCCESS";



                    /* ---------------------------
                       OPEN DASHBOARD
                       --------------------------- */

                    setTimeout(
                        function () {

                            window.location.href =
                                "./dashboard.html";

                        },
                        800
                    );


                }


                catch (error) {


                    console.error(
                        "Firebase Login Error:",
                        error
                    );


                    message.style.color =
                        "#ff5555";


                    loginButton.disabled =
                        false;

                    loginButton.textContent =
                        "LOGIN";



                    /* ---------------------------
                       ERROR MESSAGES
                       --------------------------- */

                    if (
                        error.code ===
                        "auth/invalid-credential"
                    ) {

                        message.textContent =
                            "Wrong Gmail or Password.";

                    }

                    else if (
                        error.code ===
                        "auth/user-not-found"
                    ) {

                        message.textContent =
                            "This Gmail is not registered.";

                    }

                    else if (
                        error.code ===
                        "auth/wrong-password"
                    ) {

                        message.textContent =
                            "Wrong Password.";

                    }

                    else if (
                        error.code ===
                        "auth/invalid-email"
                    ) {

                        message.textContent =
                            "Invalid Gmail.";

                    }

                    else if (
                        error.code ===
                        "auth/operation-not-allowed"
                    ) {

                        message.textContent =
                            "Email/Password Login is disabled in Firebase.";

                    }

                    else if (
                        error.code ===
                        "auth/network-request-failed"
                    ) {

                        message.textContent =
                            "Network error. Check your internet.";

                    }

                    else {

                        message.textContent =
                            "Login Error: " +
                            error.code;

                    }

                }

            }
        );



        /* ==========================================
           ENTER KEY LOGIN
           ========================================== */

        password.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    loginButton.click();

                }

            }
        );



    </script>


</body>

</html>