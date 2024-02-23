import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { USER } from '../../../types/user.types'

interface UserListProps{
    users: Array<USER>;
}


const UserList = ({users}: UserListProps) => {
  return (
    <View>
       {
        users && users.map((user, index) => (
       <View key={`AllUsers-${index.toString()}`} style={styles.userDetails}>
        <View>
           <Text style={styles.firstLetter}>{user?.name?.substring(0,1) || 'Y'}</Text>
        </View>
        <View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.role}>{user.role}</Text>
        </View>
        </View>

        ))
      }
    </View>
  )
}


const styles = StyleSheet.create({
  userDetails:{
    marginBottom: 15,
    flexDirection: 'row'
  },
  firstLetter:{
    backgroundColor: '#C6FCFf',
    padding: 8,
    marginRight: 10,
    fontSize: 16
  },
  name:{
    fontSize: 14,
    letterSpacing: 0.3
  },
  role: {
    fontSize: 10,
    letterSpacing: 0.3,
  }
})
export default UserList