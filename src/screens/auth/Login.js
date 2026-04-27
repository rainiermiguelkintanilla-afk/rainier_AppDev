import { useState } from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import { ROUTES } from '../../utils';

import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../app/reducers/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { isLoading } = useSelector(state => state.auth);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <ImageBackground
      source={require('../../../assets/login_bg.png')}
      resizeMode="cover"
      style={styles.background}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.overlay} />

        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>
            Sign in to your Kintanilla account
          </Text>

          <View style={styles.fieldGroup}>
            <CustomTextInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              onChangeText={val => setEmail(val)}
              keyboardType="email-address"
              textContentType="emailAddress"
              autoComplete="email"
              containerStyle={styles.inputContainer}
              labelStyle={styles.label}
              textStyle={styles.input}
            />

            <CustomTextInput
              label="Password"
              secureTextEntry={true}
              placeholder="Enter your password"
              value={password}
              onChangeText={val => setPassword(val)}
              textContentType="password"
              autoComplete="password"
              importantForAutofill="yes"
              containerStyle={styles.inputContainer}
              labelStyle={styles.label}
              textStyle={styles.input}
            /> 
          </View>

          <CustomButton
            label="Sign In"
            containerStyle={styles.buttonContainer}
            textStyle={styles.buttonText}
            loading={isLoading}
            onPress={() => {
              if (!email || !password) {
                navigation.navigate(ROUTES.ERROR);
                return;
              }
              dispatch(
                userLogin({
                  email,
                  password: password,
                }),
              );
            }}
          />

          <View style={styles.footerRow}>
            <Text style={styles.footerText}>Don&apos;t have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.REGISTER)}
            >
              <Text style={styles.footerLink}> Sign up here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
  },
  card: {
    width: '85%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 32,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 24,
  },
  fieldGroup: {
    marginBottom: 24,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 4,
  },
  input: {
    fontSize: 14,
    paddingVertical: 8,
  },
  buttonContainer: {
    width: '100%',
    backgroundColor: '#059669',
    borderRadius: 999,
    marginBottom: 16,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#6B7280',
  },
  footerLink: {
    fontSize: 13,
    color: '#059669',
    fontWeight: '600',
  },
});

export default Login;
