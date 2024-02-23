import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { gql, useQuery } from '@apollo/client';
import { GetAllCustomers } from '../../queries/cutomer.queries';
import { USER, USER_ADMIN } from '../../types/user.types';
import SelectUserType from './SelectUserType';
import UserList from './UsersList';
import { appText } from '../../utils/strings';


const User = () => {
  const { loading, error, data } = useQuery(GetAllCustomers);
  const [users, setUsers] = useState<Array<USER>>([]);
  const [userType, setUserType] = useState<string>(USER_ADMIN);

  const filterUsers = useCallback((role: string) => {
    setUserType(role);
    const filterdUsers = data.listZellerCustomers.items.filter((item: USER) => item.role === role);
    setUsers(filterdUsers);
  }, [userType, data?.listZellerCustomers]);


  useMemo(() => {
    if (data?.listZellerCustomers?.items) {
      // Initially Admin users will be auto selected
      // Filter data for admin users
      filterUsers(USER_ADMIN);
    }
  }, [data?.listZellerCustomers]);



  return (
    <View style={styles.container}>
      {
        loading && (
          <ActivityIndicator/>
        )
      }
      {
        users && (
          <>
            <SelectUserType filterUsers={filterUsers} userType={userType} />
            <UserList users={users} />
          </>
        )
      }
      {
        error && (
          <Text>{appText.Generic_Error_Msg}</Text>
        )
      }
    

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#ffffff',
    margin: 25
  }
})
export default User