"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AuthContext } from "@/contexts/AuthContext";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import { showSuccessToast, showErrorToast } from "../utils/toastHelpers";

export default function authentication() {
  // react is one way data binding language
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");

  const [formState, setFormState] = React.useState("login");
  const { handleRegister, handleLogin, handleGoogleLogin } = React.useContext(AuthContext);
  const navigation = useNavigate();

 let handleAuth = async () => {
  try {
    if (formState === "login") {
      const result = await handleLogin(username, password);
      if (result) {
        navigation("/"); // ✅ Redirect only if login is successful
      }
    }

    if (formState === "signup") {
      const result = await handleRegister(name, username, password);
      setName("");
      setUsername("");
      setPassword("");
      setFormState("login");
    }

    setError("");
  } catch (err) {
    const message = err?.response?.data?.message || "Something went wrong";
    setError(message);
  }
};



  return (
    <>
      <Navbar />
      <motion.div
        className="flex flex-col items-center justify-center my-10 transition-all"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Tabs
          defaultValue="login"
          value={formState}
          onValueChange={setFormState}
          className="w-[400px]"
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger
              value="login"
              onClick={() => {
                setFormState("login");
                setError("");
              }}
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              onClick={() => {
                setFormState("signup");
                setError("");
              }}
            >
              SignUp
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Welcome back</CardTitle>
                <CardDescription>
                  Login with your Google account or login details
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <Button
                      variant="outline"
                      className="w-full mt-4 mb-5"
                      onClick={handleGoogleLogin}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <defs>
                          <radialGradient
                            id="prefix__b"
                            cx="1.479"
                            cy="12.788"
                            fx="1.479"
                            fy="12.788"
                            r="9.655"
                            gradientTransform="matrix(.8032 0 0 1.0842 2.459 -.293)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset=".368" stopColor="#ffcf09" />
                            <stop
                              offset=".718"
                              stopColor="#ffcf09"
                              stopOpacity=".7"
                            />
                            <stop
                              offset="1"
                              stopColor="#ffcf09"
                              stopOpacity="0"
                            />
                          </radialGradient>
                          <radialGradient
                            id="prefix__c"
                            cx="14.295"
                            cy="23.291"
                            fx="14.295"
                            fy="23.291"
                            r="11.878"
                            gradientTransform="matrix(1.3272 0 0 1.0073 -3.434 -.672)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset=".383" stopColor="#34a853" />
                            <stop
                              offset=".706"
                              stopColor="#34a853"
                              stopOpacity=".7"
                            />
                            <stop
                              offset="1"
                              stopColor="#34a853"
                              stopOpacity="0"
                            />
                          </radialGradient>
                          <linearGradient
                            id="prefix__d"
                            x1="23.558"
                            y1="6.286"
                            x2="12.148"
                            y2="20.299"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset=".671" stopColor="#4285f4" />
                            <stop
                              offset=".885"
                              stopColor="#4285f4"
                              stopOpacity="0"
                            />
                          </linearGradient>
                          <clipPath id="prefix__a">
                            <path
                              d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z"
                              fill="none"
                            />
                          </clipPath>
                        </defs>
                        <path
                          d="M22.36 10H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53h-.013l.013-.01c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09c.87-2.6 3.3-4.53 6.16-4.53 1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07 1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93v.01C3.99 20.53 7.7 23 12 23c2.97 0 5.46-.98 7.28-2.66 2.08-1.92 3.28-4.74 3.28-8.09 0-.78-.07-1.53-.2-2.25z"
                          fill="#fc4c53"
                        />
                        <g clipPath="url(#prefix__a)">
                          <ellipse
                            cx="3.646"
                            cy="13.572"
                            rx="7.755"
                            ry="10.469"
                            fill="url(#prefix__b)"
                          />
                          <ellipse
                            cx="15.538"
                            cy="22.789"
                            rx="15.765"
                            ry="11.965"
                            transform="rotate(-7.12 15.539 22.789)"
                            fill="url(#prefix__c)"
                          />
                          <path
                            fill="url(#prefix__d)"
                            d="M11.105 8.28l.491 5.596.623 3.747 7.362 6.848 8.607-15.897-17.083-.294z"
                          />
                        </g>
                      </svg>
                      Login with Google
                    </Button>

                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        type="username"
                        value={username}
                        placeholder="@pratham"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        required
                        placeholder="******"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button
                      type="button"
                      className="w-full"
                      onClick={handleAuth}
                    >
                      Login
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">SignUp</CardTitle>
                <CardDescription>Create your account now</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex flex-col gap-6">
                    <div className="grid gap-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        type="name"
                        value={name}
                        placeholder="Pratham Potdar"
                        required
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="username">Username</Label>
                      <Input
                        id="username"
                        type="username"
                        value={username}
                        placeholder="@pratham"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="grid gap-2 mb-3">
                      <div className="flex items-center">
                        <Label htmlFor="password">Password</Label>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        required
                        placeholder="******"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button
                      type="button"
                      className="w-full"
                      onClick={handleAuth}
                    >
                      SignUp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
      <Footer />
    </>
  );
}
