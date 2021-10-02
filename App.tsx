import React, { FC, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { FlatList, Text } from 'react-native';
import styled from "styled-components/native"

import { api } from "./src/lib/api"

const Container = styled.SafeAreaView`
  flex: 1;

  background: #010101;

  padding: 2rem;

  flex-direction: column;

  align-items: center;
  justify-content: center;
`

const Title = styled.Text`
  font-size: 38px;
  text-align: center;
  color: #fff;
`

const UserContainer = styled.View`
  width: 100%;

  flex-direction: row;

  background: gray;
  border-radius: 0.2rem;
  padding: 1rem;

  justify-content: space-between;
  align-items: center;

  margin: 1rem 0;
`

const UserText = styled.Text`
  color: #fff;
  font-weight: bold;

  font-size: 16pt;
`

const UserProfile = styled.Image`
  width: 100px;
  height: 100px;

  border-radius: 50%;
`

const UserList = styled.FlatList`
  width: 80%;
`

type UserType = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  url: string
}

type UserProps = {
  avatar_url: string
  login: string
}

const User = ({ avatar_url, login }: UserProps) => {
  return (
    <UserContainer>
      <UserProfile source={{ uri: avatar_url }} />

      <UserText>{login}</UserText>
    </UserContainer>
  )
}

const App: FC = () => {
  const [users, setUsers] = useState<UserType[]>([])

  useEffect(() => {
    (async () => {
      const { data } = await api.get("/users")

      setUsers(data)
    })()
  }, [])

  const renderUser = ({item}: any) => {
    const { avatar_url, login } = item

    return (
      <User login={login} avatar_url={avatar_url} />
    )
  }

  return (
    <Container>
      <Title>Open up App.tsx to start working on your app!</Title>

      <UserList data={users} renderItem={renderUser} keyExtractor={(user: any) => user.node_id} />
    </Container>
  );
}

export default App