import { Component } from "solid-js";

export const Navigation: Component = () => {
  return (
    <nav class="sticky py-3 px-5 lg:m-3 lg:rounded-md shadow-sm border-b-2 border-orange-500 bg-orange-300 dark:bg-orange-900">
      <ul class="flex gap-3">
        <li class="font-bold">Minecraft Panel</li>
      </ul>
    </nav>
  );
};
