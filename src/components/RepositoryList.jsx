import React from "react";
import {View ,Text} from "react-native";
import { FlatList } from "react-native";
import { useState, useEffect } from "react";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";

const RepositoryList = () => {
    const {repositories} = useRepositories();

    return (
        <FlatList 
            data={repositories}
            ItemSeparatorComponent={() => <Text/>}
            renderItem={({ item: repo }) => (
                        <RepositoryItem {...repo}/>
                )}
        >
        </FlatList>
    )
}

export default RepositoryList; 