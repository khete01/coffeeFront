import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

const SignUp = ({ navigation }) => {
  const signupValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "", confirmPassword: "" }}
      validationSchema={signupValidationSchema}
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

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            secureTextEntry
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}

          <Button onPress={handleSubmit} title="Signup" />
          <Button
            title="Go to Login"
            onPress={() => navigation.navigate("Login")}
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

export default SignUp;
