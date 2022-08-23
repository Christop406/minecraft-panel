import { Component } from "solid-js";

export const Panel: Component = () => {
  return (
    <div class="w-full border-2 border-orange-400 rounded-md p-5">
      <div class="flex justify-between py-3">
        <h1>Server Name</h1>
        <div class="flex gap-3">
          <button>🟢 Start</button>
          <button>🛑 Stop</button>
        </div>
      </div>
      <div>
        <textarea class="w-full resize-y h-52 p-3 bg-zinc-100 rounded-t-md dark:bg-zinc-900"></textarea>
        <input
          class="w-full p-2 border-t-[1px] border-black bg-white dark:bg-zinc-700"
          placeholder="Enter Command"
        ></input>
      </div>
    </div>
  );
};
