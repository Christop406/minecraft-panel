import { Component, onMount } from "solid-js";
import { Panel } from "../components";
import { availableServers } from "../store";
import axios from 'axios';
import { getAllServers } from "../services/store";

export const ConfigPanel: Component = () => {
  const [servers, setServers] = availableServers;

  onMount(async () => {
    const res = await getAllServers();
    console.log(res);
    setServers(res);
  });
  return (
    <>
      <Panel />
    </>
  );
};
