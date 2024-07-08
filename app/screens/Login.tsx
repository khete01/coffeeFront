import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const Login = ({ navigation }) => {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            secureTextEntry
          />
          {errors.password && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          <Button onPress={handleSubmit} title="Login" />
          <Button
            title="Go to Signup"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
  },
});

export default Login;
