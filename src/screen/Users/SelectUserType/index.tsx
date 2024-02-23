import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { USER_ADMIN, USER_MANAGER } from '../../../types/user.types'
import Radio from '../../../components/Radio';
import HorizontalLine from '../../../components/HorizontalLine';
import { appText } from '../../../utils/strings';

interface SelectUserTypeProps{
    filterUsers: (type: string) => void;
    userType: string;
}

const SelectUserType = ({filterUsers, userType}: SelectUserTypeProps) => {
    const selectAdminUser = () => {
        filterUsers(USER_ADMIN);
    }
    const selectManagerUser = () => {
        filterUsers(USER_MANAGER);
    }
  return (
    <>
    <Text style={styles.title}>User Types</Text>
      <Radio onPress={selectAdminUser} selected={userType === USER_ADMIN}>
         <Text>{appText.Admin}</Text> 
      </Radio>
      <Radio onPress={selectManagerUser} selected={userType === USER_MANAGER}>
         <Text>{appText.Manager}</Text> 
      </Radio>
      <HorizontalLine />
    </>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 20,
    letterSpacing: 0.5
  }
})
export default SelectUserType